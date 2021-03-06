package com.cellarhq.auth.endpoints

import com.cellarhq.auth.services.AccountService
import com.cellarhq.common.Messages
import com.cellarhq.common.session.FlashMessage
import com.cellarhq.domain.EmailAccount
import com.cellarhq.util.LogUtil
import com.cellarhq.util.SessionUtil
import com.google.inject.Inject
import groovy.util.logging.Slf4j
import ratpack.exec.Blocking
import ratpack.form.Form
import ratpack.groovy.handling.GroovyContext
import ratpack.groovy.handling.GroovyHandler

import javax.validation.ConstraintViolation
import javax.validation.Validator
import javax.validation.ValidatorFactory

import static ratpack.handlebars.Template.handlebarsTemplate

@Slf4j
class ChangePasswordHandler extends GroovyHandler {

  private final AccountService accountService
  private final ValidatorFactory validatorFactory

  @Inject
  ChangePasswordHandler(AccountService accountService, ValidatorFactory validatorFactory) {
    this.accountService = accountService
    this.validatorFactory = validatorFactory
  }

  @Override
  protected void handle(GroovyContext context) {
    context.with {
      byMethod {
        get {
          Blocking.get {
            accountService.findByPasswordChangeRequestHash(context.pathTokens['id'])
          }.onError { Throwable t ->
            log.error(LogUtil.toLog(request, 'ForgotPasswordFailure', [
              exception: t.toString()
            ]), t)

            SessionUtil.setFlash(context, FlashMessage.error(Messages.UNEXPECTED_SERVER_ERROR)).then {
              redirect('/forgot-password')
            }
          }.then { EmailAccount emailAccount ->
            if (emailAccount) {
              render handlebarsTemplate('change-password.html',
                title: 'Change Password',
                action: "/forgot-password/${context.pathTokens['id']}",
                pageId: 'change-password')
            } else {
              SessionUtil.setFlash(context, FlashMessage.error(Messages.FORGOT_PASSWORD_UNKNOWN_REQUEST)).then {
                redirect('/forgot-password')
              }
            }
          }
        }
        post {
          parse(Form).then { Form form ->

            Blocking.get {
              boolean result = false

              EmailAccount account = accountService.findByPasswordChangeRequestHash(context.pathTokens['id'])
              if (account) {
                log.info(LogUtil.toLog(request, 'ChangingPassword', [
                  accountId: account.id
                ]))
                account.password = form.password
                account.passwordConfirm = form.passwordConfirm

                Validator validator = validatorFactory.validator
                Set<ConstraintViolation<EmailAccount>> accountViolations = validator.validate(account)
                boolean passwordsMatch = account.password == account.passwordConfirm
                if (accountViolations.size() == 0 && passwordsMatch) {
                  accountService.changePassword(account, Optional.of(context.pathTokens['id']))
                  result = true
                } else {
                  List<String> messages = []
                  accountViolations.each { messages << "${it.propertyPath.toString()} ${it.message}" }
                  if (!passwordsMatch) {
                    messages << 'passwords do not match'
                  }

                  SessionUtil.setFlash(
                    request,
                    FlashMessage.error(Messages.FORM_VALIDATION_ERROR, messages))
                }
              } else {
                SessionUtil.setFlash(context, FlashMessage.error(Messages.FORGOT_PASSWORD_UNKNOWN_REQUEST))
              }

              return result
            }.onError { Throwable t ->
              log.error(LogUtil.toLog(request, 'ForgotPasswordFailure', [
                exception: t.toString()
              ]))

              redirect('/forgot-password?error=' + Messages.UNEXPECTED_SERVER_ERROR)
            }.then { boolean result ->
              if (result) {
                SessionUtil.setFlash(
                  context,
                  FlashMessage.success(Messages.FORGOT_PASSWORD_LOGIN_WITH_NEW_PASSWORD)).then {
                  redirect('/login')
                }
              } else {
                redirect("/forgot-password/${context.pathTokens['id']}")
              }
            }
          }
        }
      }
    }
  }
}
