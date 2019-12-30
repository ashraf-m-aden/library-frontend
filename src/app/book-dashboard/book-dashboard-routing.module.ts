import { DashboardComponent } from './../dashboard/dashboard.component';
import { BorrowedBookComponent } from './borrowed-book/borrowed-book.component';
import { BookDashboardComponent } from './book-dashboard.component';
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { LivresComponent } from './livres/livres.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from '../users/clients/clients.component';

export const routesC: Routes = [
  {
    path: '', redirectTo: '/bookDashboard', pathMatch: 'full'
  },
  {
    path: 'livres', component: BookDashboardComponent, pathMatch: 'full'
  },
  {
    path: 'type/:id', component: LivresComponent, pathMatch: 'full'
  },
  {
    path: 'addBook', component: AddBookComponent, pathMatch: 'full'
  },
  {
    path: 'book/:id', component: BookComponent, pathMatch: 'full'
  },
  {
    path: 'bookDashboard', component: BookDashboardComponent, pathMatch: 'full'
  },
  {
    path: 'borrowedBook', component: BorrowedBookComponent, pathMatch: 'full'
  }
];

export const components = [
  DashboardComponent, ClientsComponent, BookComponent, BorrowedBookComponent,
  , LivresComponent, AddBookComponent, BookDashboardComponent
];
@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class BookDashboardRoutingModule { }
