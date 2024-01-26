import { Injectable } from '@angular/core';

import { AuthenticationGateway } from './domain/models/authentication/authentication.gateway';

@Injectable()
export class AppSandbox {
  constructor(
    private authentication: AuthenticationGateway
  ) { }

  initialize() {
    this.authentication.initialize();
  }
}
