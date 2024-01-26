import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioTareasComponent } from './pages/formulario-tareas.component';

const routes: Routes = [
  {
    path: '',
    component: FormularioTareasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioTareasRoutingModule { }
