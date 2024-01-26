export const environment = {
  production: true,
  apiBackend: '',
  azureConfig:{
    loginMicrosoft: 'https://login.microsoftonline.com',
    redirectUri: '#{redirect-url-pdn}#',
    clientId: '#{client-id}#', // reemplace <client-id> por el client id de azure
    tenantId: '#{tenant-id}#', // reemplace <tenant-id> por el tenant id de azure
    appScope: 'api://#{tenant-id}#/default',
    sendTokenTo: {
      '<put-host-here>': ['api://#{tenant-id}#/default'],
      '<put-another-host-here>': ['api://#{tenant-id}#/default']
    },
    session: {
      forceSingleTab: true, // permite bloquear tabs a los usuarios, es decir solo podrá usar tener un tab activo
      sessionValidatorBaseEndpoint: 'http://localhost:8080', // endpoint base de SessionValidator, https://my-alb-domain.apps.ambientesbc.com/my-project
      blurOnLeave: true, // si se habilita distorciona la pantalla cuando el tab es abandonado
      idleTimeout: 290000, // detecta inactividad del usuario de 4 minutos y 50 segundos,
      idleTimeoutGracePeriod: 10 // lanza la actividad de logout después de detectar la inactividad y alertar por 10 segundos
    },
  }
};
