import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./ui/home/home.module').then(m => m.HomeModule)
  },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./ui/profile/profile.module').then(m => m.ProfileModule),
  //   canActivate: [MsalGuard]
  // },
  // {
  //   path: 'pocket',
  //   loadChildren: () => import('./ui/pocket/pocket.module').then(m => m.PocketModule),
  //   canActivate: [MsalGuard]
  // },
  {
    path: 'listar-tareas',
    loadChildren: () => import('./ui/tareas-list/tareas-list.module').then(m => m.TareasListModule)
  },
  {
    path: 'formulario-tareas',
    loadChildren: () => import('./ui/formulario-tareas/formulario-tareas.module').then(m => m.FormularioTareasModule)
  }
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
