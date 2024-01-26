// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBackend: 'https://61097341d71b670017639923.mockapi.io/bancolombia/api/v1/',
  azureConfig:{
    loginMicrosoft: 'https://login.microsoftonline.com',
    redirectUri: 'http://localhost:4200/',
    clientId: '<client-id>', // reemplace <client-id> por el client id de azure
    tenantId: '<tenant-id>', // reemplace <tenant-id> por el tenant id de azure
    appScope: 'api://<client-id>/default',
    sendTokenTo: {
      'https://61097341d71b670017639923.mockapi.io': ['api://<client-id>/default']
    },
    session: {
      forceSingleTab: true, // permite bloquear tabs a los usuarios, es decir solo podrá usar tener un tab activo
      sessionValidatorBaseEndpoint: 'http://localhost:8080', // endpoint base de SessionValidator, https://my-alb-domain.apps.ambientesbc.com/my-project
      logger: console.log, // logs solo para desarrollo
      blurOnLeave: true, // si se habilita distorciona la pantalla cuando el tab es abandonado
      idleTimeout: 290000, // detecta inactividad del usuario de 4 minutos y 50 segundos,
      idleTimeoutGracePeriod: 10 // lanza la actividad de logout después de detectar la inactividad y alertar por 10 segundos
    },
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
