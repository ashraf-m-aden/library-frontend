import { DashboardComponent } from './../dashboard/dashboard.component';
import { AddCDCComponent } from './cdc/add-cdc/add-cdc.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCDCComponent } from './cdc/all-cdc/all-cdc.component';
import { CdcComponent } from './cdc/cdc/cdc.component';
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
    path: 'allCDC',
    component: AllCDCComponent,
    pathMatch: 'full'
  },
  {
    path: 'addCDC',
    component: AddCDCComponent,
    pathMatch: 'full'
  },
  {
    path: 'cdc/:id',
    component: CdcComponent,
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
