import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TareasListComponent } from "./pages/tareas-list.component";

const routes: Routes = [
  {
    path: '',
    component: TareasListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasListRoutingModule { }
