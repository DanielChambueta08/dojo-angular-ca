import { Injectable } from '@angular/core';

import { InfoSessionModel } from '@bancolombia/ngx-azure-session-manager';
import { AuthenticationGateway } from '../../domain/models/authentication/authentication.gateway';

@Injectable()
export class HeaderSandbox {

  infoSession!: InfoSessionModel;

  constructor(public authentication: AuthenticationGateway) { }

  checkoutAccount() {
    this.authentication.initialize()
    .subscribe((session: InfoSessionModel) => {
      this.infoSession = session;
    });
  }


  logIn() {
    this.authentication.logIn()
    .subscribe({
      next: (infoSession) => {
       this.infoSession = infoSession;
      },
      error: (error) => console.log(error),
    });
  }

  logOut() {
    this.authentication.logOut()
    .subscribe({
      next: (infoSession) => {
       this.infoSession = infoSession;
      },
      error: (error) => console.log(error),
    });
  }

}
