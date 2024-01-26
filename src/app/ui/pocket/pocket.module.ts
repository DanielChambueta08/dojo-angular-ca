import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BcCardModule } from '@bancolombia/design-system-web/bc-card';

import { PocketRoutingModule } from './pocket-routing.module';
import { PocketComponent } from './pages/pocket.component';
import { PocketSandbox } from './pocket.sandbox';
import { PocketGateway } from '../../domain/models/pocket/pocket.gateway';
import { HttpClientAdapter } from '../../infrastructure/adapters/httpclient-adapter/httpclient.adapter';
import { PocketUsecase } from '../../domain/usecases/pocket/pocket.usecase';


@NgModule({
  imports: [  
    CommonModule,
    PocketRoutingModule,
    BcCardModule
  ],
  declarations: [PocketComponent],
  providers: [ 
    PocketSandbox,
    PocketUsecase,
    { provide: PocketGateway, useClass: HttpClientAdapter }
  ]
})
export class PocketModule { }
