package com.cellarhq.endpoints

import static com.cellarhq.ratpack.hibernate.HibernateDSL.transaction
import static ratpack.groovy.Groovy.groovyMarkupTemplate

import com.cellarhq.Messages
import com.cellarhq.auth.Role
import com.cellarhq.domain.Cellar
import com.cellarhq.domain.EmailAccount
import com.cellarhq.services.AccountService
import com.cellarhq.util.LogUtil
import com.cellarhq.util.SessionUtil
import com.google.inject.Inject
import groovy.util.logging.Slf4j
import org.pac4j.core.profile.CommonProfile
import org.pac4j.core.profile.UserProfile
import org.pac4j.http.profile.HttpProfile
import ratpack.form.Form
import ratpack.groovy.handling.GroovyContext
import ratpack.groovy.handling.GroovyHandler
import ratpack.pac4j.internal.SessionConstants
import ratpack.session.store.SessionStorage

import javax.validation.ConstraintViolation
import javax.validation.Validator
import javax.validation.ValidatorFactory

@Slf4j
class RegisterEndpoint extends GroovyHandler {

    private final AccountService accountService
    private final ValidatorFactory validatorFactory

    @Inject
    RegisterEndpoint(AccountService accountService, ValidatorFactory validatorFactory) {
        this.accountService = accountService
        this.validatorFactory = validatorFactory
    }

    @SuppressWarnings('AbcMetric')
    @Override
    protected void handle(GroovyContext context) {
        context.with {
            byMethod {
                get {
                    render groovyMarkupTemplate('register.gtpl',
                            title: 'Register',
                            action: '/register',
                            method: 'post',
                            error: request.queryParams.error ?: '',
                            loggedIn: SessionUtil.isLoggedIn(request.maybeGet(CommonProfile)))
                }

                /**
                 * Handles registration.
                 *
                 * Will validate the user form submission, and if valid save to the database and grant the user a
                 * session prior to redirecting to /yourcellar.
                 */
                post {
                    Form form = parse(Form)

                    Cellar cellar = new Cellar().with { Cellar self ->
                        screenName = form.screenName
                        contactEmail = form.email
                        lastLogin = new Date()
                        addRole(Role.MEMBER)
                        return self
                    }
                    EmailAccount emailAccount = new EmailAccount().with { EmailAccount self ->
                        self.cellar = cellar
                        email = form.email
                        password = form.password
                        passwordConfirm = form.passwordConfirm
                        return self
                    }

                    Validator validator = validatorFactory.validator
                    Set<ConstraintViolation<Cellar>> cellarViolations = validator.validate(emailAccount.cellar)
                    Set<ConstraintViolation<EmailAccount>> accountViolations = validator.validate(emailAccount)
                    if (cellarViolations.size() == 0 && accountViolations.size() == 0) {
                        // Rx would actually work pretty well here...
                        transaction(context) {
                            accountService.create(emailAccount)
                        }.onError { Throwable e ->
                            log.error(LogUtil.toLog('RegistrationFailure', [
                                    exception: e.toString()
                            ]))

                            redirect(500, '/register?error=' + Messages.UNEXPECTED_SERVER_ERROR)
                        } then {
                            // TODO Is there a way to do this without calling into ratpack's internals?
                            UserProfile userProfile = makeUserProfile(emailAccount)

                            request.register(userProfile)
                            request.register(UserProfile, userProfile)
                            request.get(SessionStorage).put(SessionConstants.USER_PROFILE, userProfile)

                            redirect('/yourcellar')
                        }
                    } else {
                        // TODO Definitely add flash message support.
                        String messages = new StringBuilder('Could not register_')
                                .append(cellarViolations.collect { "${it.propertyPath} ${it.message}" }.join('_'))
                                .append('_')
                                .append(accountViolations.collect { "${it.propertyPath} ${it.message}" }.join('_'))
                                .toString()

                        redirect(422, '/register?error=' + messages)
                    }
                }
            }
        }
    }

    UserProfile makeUserProfile(EmailAccount emailAccount) {
        return new HttpProfile().with { HttpProfile self ->
            addAttribute('display_name', emailAccount.cellar.displayName)
            addAttribute('username', emailAccount.email)
            addAttribute('email', emailAccount.email)
            addRole(Role.MEMBER.toString())
            return self
        }
    }
}
