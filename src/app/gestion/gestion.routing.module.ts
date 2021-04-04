import { DashboardComponent } from './../dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenreComponent } from './genre/genre.component';

export const routesG: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'genre',
    component: GenreComponent,
    pathMatch: 'full'
  }
];

export const components = [];
@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class GestionRoutingModule {}
