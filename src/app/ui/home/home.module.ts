import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxAzureSessionManagerService } from '@bancolombia/ngx-azure-session-manager'

import { HomeRoutingModule } from './home-routing.module';
import { HomeSandbox } from './home.sandbox';
import { HomeComponent } from './pages/home.component';
import { AuthenticationGateway } from '../../domain/models/authentication/authentication.gateway';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent],
  providers: [
    HomeSandbox,
    { provide: AuthenticationGateway, useClass: NgxAzureSessionManagerService }
  ]
})
export class HomeModule { }
