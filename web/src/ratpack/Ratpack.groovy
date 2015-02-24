import com.cellarhq.CellarHQConfig
import com.cellarhq.CellarHQModule
import com.cellarhq.ClientErrorHandlerImpl
import com.cellarhq.ServerErrorHandlerImpl
import com.cellarhq.auth.SecurityModule
import com.cellarhq.domain.views.HomepageStatistics
import com.cellarhq.endpoints.*
import com.cellarhq.endpoints.api.*
import com.cellarhq.endpoints.auth.ChangePasswordEndpoint
import com.cellarhq.endpoints.auth.ForgotPasswordEndpoint
import com.cellarhq.endpoints.auth.RegisterEndpoint
import com.cellarhq.endpoints.settings.LinkEmailAccountEndpoint
import com.cellarhq.endpoints.settings.LinkTwitterAccountEndpoint
import com.cellarhq.handlebars.HandlerbarsRenderableDecorator
import com.cellarhq.health.DatabaseHealthcheck
import com.cellarhq.services.StatsService
import com.cellarhq.util.SessionUtil
import com.codahale.metrics.health.HealthCheckRegistry
import com.zaxxer.hikari.HikariConfig
import org.pac4j.core.profile.CommonProfile
import ratpack.codahale.metrics.CodaHaleMetricsModule
import ratpack.config.ConfigData
import ratpack.error.ClientErrorHandler
import ratpack.error.ServerErrorHandler
import ratpack.handlebars.HandlebarsModule
import ratpack.hikari.HikariModule
import ratpack.jackson.JacksonModule
import ratpack.pac4j.internal.SessionConstants
import ratpack.rx.RxRatpack
import ratpack.server.Service
import ratpack.server.StartEvent
import ratpack.session.SessionModule
import ratpack.session.store.MapSessionsModule
import ratpack.session.store.SessionStorage

import static ratpack.groovy.Groovy.ratpack
import static ratpack.handlebars.Template.handlebarsTemplate
import static ratpack.jackson.Jackson.json

ratpack {
    bindings {
        ConfigData configData = ConfigData.of()
                .props("$serverConfig.baseDir.file/ratpack.properties")
                .env()
                .sysProps()
                .build()

        CellarHQConfig cellarHqConfig = configData.get(CellarHQConfig)

        bindInstance(CellarHQConfig, cellarHqConfig)

        add new CodaHaleMetricsModule(), { it.enable(true).jvmMetrics(true).jmx { it.enable(true) }.healthChecks(true) }

        add(HikariModule) { HikariConfig hikariConfig ->
            hikariConfig.addDataSourceProperty('serverName', cellarHqConfig.databaseServerName)
            hikariConfig.addDataSourceProperty('portNumber', cellarHqConfig.databasePortNumber)
            hikariConfig.addDataSourceProperty('databaseName', cellarHqConfig.databaseName)
            hikariConfig.addDataSourceProperty('user', cellarHqConfig.databaseUser)
            hikariConfig.addDataSourceProperty('password', cellarHqConfig.databasePassword)
            hikariConfig.dataSourceClassName = 'org.postgresql.ds.PGSimpleDataSource'
        }

        add new JacksonModule()
        add new SessionModule()
        add new MapSessionsModule(500, 60)
        add new SecurityModule(cellarHqConfig)
        add new HandlebarsModule()

        add new CellarHQModule(cellarHqConfig)

        bindInstance Service, new Service() {
            @Override
            void onStart(StartEvent event) throws Exception {
                RxRatpack.initialize()
            }
        }

        bind ServerErrorHandler, ServerErrorHandlerImpl
        bind ClientErrorHandler, ClientErrorHandlerImpl
        bind DatabaseHealthcheck
    }

    handlers {
        handler { CellarHQConfig cellarHQConfig ->
            // For production, we want to force SSL on all requests.
            String forwardedProto = 'X-Forwarded-Proto'
            if (cellarHQConfig.isProductionEnv()
                    && request.headers.contains(forwardedProto)
                    && request.headers.get(forwardedProto) != 'https') {
                redirect(301, "https://${request.headers.get('Host')}${request.rawUri}")
            }
            next()
        }

        get { StatsService statsService ->
            if (SessionUtil.isLoggedIn(request.maybeGet(CommonProfile))) {
                redirect(302, '/cellars')
            } else {
                statsService.homepageStatistics().single().subscribe { HomepageStatistics stats ->
                    render handlebarsTemplate('index.html',
                            stats: stats,
                            action: '/register',
                            title: 'CellarHQ',
                            pageId: 'home')
                }
            }
        }

        handler chain(registry.get(BreweryEndpoint))
        handler chain(registry.get(BeerEndpoint))
        handler chain(registry.get(CellarsEndpoint))

        /**
         * Alias to /cellars/:id, auto-loads authenticated user.
         */
        handler chain(registry.get(YourCellarEndpoint))

        handler('import') {
            byMethod {
                /**
                 * Get the import page.
                 */
                get {}

                /**
                 * Starts the import process.
                 */
                post {}
            }
        }
        handler('import/:id') {
            byMethod {
                /**
                 * Get the status of an in-process import.
                 */
                get {}

                /**
                 * Update the in-progress state of an import (fix conficts, etc)
                 */
                post {}

                /**
                 * Cancel an import.
                 */
                delete {}
            }
        }

        get('about') {
            render handlebarsTemplate('about.html',
                    title: 'About',
                    pageId: 'about')
        }
        get('privacy-policy') {
            render handlebarsTemplate('privacy.html',
                    title: 'Privacy Policy',
                    pageId: 'privacy')
        }
        get('terms-of-service') {
            // TODO: The following articles still need to be written (once features for them have been completed).
            // Add API article
            // Add Cancellation and Termination article
            render handlebarsTemplate('terms-of-service.html',
                    title: 'Terms of Service',
                    pageId: 'terms')
        }

        /**
         * Auth pages
         */

        handler('register', registry.get(RegisterEndpoint))

        get('login') {
            render handlebarsTemplate('login.html',
                    title: 'Login',
                    pageId: 'login')
        }

        get('logout') {
            // TODO Accessing pac4j internals...
            request.get(SessionStorage).remove(SessionConstants.USER_PROFILE)
            request.get(SessionStorage).remove(SecurityModule.SESSION_CELLAR_ID)
            redirect('/')
        }

        handler('forgot-password', chain(registry.get(ForgotPasswordEndpoint)))
        handler('forgot-password/:id', registry.get(ChangePasswordEndpoint))
        handler('settings', chain(registry.get(SettingsEndpoint)))
        handler chain(registry.get(LinkEmailAccountEndpoint))
        handler chain(registry.get(LinkTwitterAccountEndpoint))
        handler chain(registry.get(LinkAccountEndpoint))

        /**
         * Backwards compatibility endpoints:
         */
        handler('signup') {
            redirect(301, '/register')
        }
        handler('signin') {
            redirect(301, '/login')
        }
        handler('forgotpassword') {
            redirect(301, '/forgot-password')
        }
        handler('cellar/:slug') {
            redirect(301, "/cellars/${pathTokens['slug']}")
        }
        handler('brewery/:slug') {
            redirect(301, "/breweries/${pathTokens['slug']}")
        }
        handler('brewery/:brewery/beer/:beer') {
            redirect(301, "/breweries/${pathTokens['brewery']}/beers/${pathTokens['beer']}")
        }

        /**************************************************************************************************************
         * API
         */

        prefix('api') {
            handler chain(registry.get(CellarEndpoint))
            handler chain(registry.get(CellaredDrinkEndpoint))
            handler chain(registry.get(OrganizationEndpoint))
            handler chain(registry.get(DrinkEndpoint))
            handler chain(registry.get(StyleEndpoint))
            handler chain(registry.get(GlasswareEndpoint))
        }

        get('health-checks', { HealthCheckRegistry healthCheckRegistry ->
            render json(healthCheckRegistry.runHealthChecks())
        })

        assets "public"
    }
}
