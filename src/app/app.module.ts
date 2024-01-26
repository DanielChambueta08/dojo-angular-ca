import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { MsalGuard, MsalInterceptor, MsalModule, MsalRedirectComponent } from '@azure/msal-angular';
import { BrowserCacheLocation, InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { NgxAzureSessionManagerModule, NgxAzureSessionManagerService, SessionConfigModel } from '@bancolombia/ngx-azure-session-manager';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { HeaderModule } from './ui/header/header.module';
import { AppSandbox } from './app.sandbox';
import { AuthenticationGateway } from './domain/models/authentication/authentication.gateway';


const isIE = window.navigator.userAgent.indexOf('MSIE') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderModule,
    MsalModule.forRoot(new PublicClientApplication({
      auth: {
        clientId: environment.azureConfig.clientId,
        authority: `${environment.azureConfig.loginMicrosoft}/${environment.azureConfig.tenantId}`,
        redirectUri: environment.azureConfig.redirectUri,
      },
      cache: {
        cacheLocation: BrowserCacheLocation.LocalStorage,
        storeAuthStateInCookie: isIE,
      }
    }),
      {
        interactionType: InteractionType.Redirect,
        authRequest: {
          scopes: [environment.azureConfig.appScope]
        },
      }, {
      interactionType: InteractionType.Redirect,
      protectedResourceMap: new Map(Object.entries(environment.azureConfig.sendTokenTo))
    }),
    NgxAzureSessionManagerModule.forRoot(environment.azureConfig.session as SessionConfigModel),
  ],
  providers: [
    AppSandbox,
    { provide: AuthenticationGateway, useClass: NgxAzureSessionManagerService },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    MsalGuard,
    HttpClient
  ],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }
