import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxAzureSessionManagerService } from '@bancolombia/ngx-azure-session-manager'
import { BcHeaderModule } from "@bancolombia/design-system-web/bc-header";
import { BcButtonModule } from "@bancolombia/design-system-web/bc-button";
import { BcIconModule } from "@bancolombia/design-system-web/bc-icon";

import { HeaderComponent } from "./pages/header.component";
import { HeaderRoutingModule } from "./header-routing.module";
import { HeaderSandbox } from "./header.sandbox";
import { AuthenticationGateway } from "../../domain/models/authentication/authentication.gateway";



@NgModule({
    imports: [
      CommonModule,
      HeaderRoutingModule,
      BcHeaderModule,
      BcButtonModule,
      BcIconModule.forRoot({
        path: 'https://library-sdb.apps.bancolombia.com/2.0.16'
      }),
    ],
    exports: [HeaderComponent],
    declarations: [HeaderComponent],
    providers: [
      HeaderSandbox,
      { provide: AuthenticationGateway, useClass: NgxAzureSessionManagerService }
    ]
  })
  export class HeaderModule { }
