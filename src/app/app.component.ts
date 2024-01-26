import { Component } from '@angular/core';

import { AppSandbox } from './app.sandbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public appSandbox: AppSandbox) {
    this.appSandbox.initialize();
  }

}
