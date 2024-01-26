import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PocketComponent } from './pages/pocket.component';


const routes: Routes = [
  {
    path: '',
    component: PocketComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PocketRoutingModule { }
