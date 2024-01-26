import { Injectable } from '@angular/core';
import { InfoSessionModel } from '@bancolombia/ngx-azure-session-manager';
import { AuthenticationGateway } from '../../domain/models/authentication/authentication.gateway';

@Injectable()
export class HomeSandbox {

  infoSession!: InfoSessionModel;

  constructor(private authentication: AuthenticationGateway) {}

  getInfoSession() {
    this.authentication.initialize()
    .subscribe({
      next: (infoSession) => {
       this.infoSession = infoSession;
      },
      error: (error) => console.log(error),
    });
  }
}
