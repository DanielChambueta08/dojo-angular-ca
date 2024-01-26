import { Component } from '@angular/core';
import { ProfileSandbox } from '../profile.sandbox';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  constructor(public profileSandbox: ProfileSandbox) { }

}
