import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './pages/profile.component';
import { ProfileSandbox } from './profile.sandbox';


@NgModule({
  imports: [  
    CommonModule,
    ProfileRoutingModule
  ],
  declarations: [ProfileComponent],
  providers: [ProfileSandbox]
})
export class ProfileModule { }
