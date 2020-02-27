import { GlobalStatsComponent } from './statistic/global-stats/global-stats.component';
import { NotifsComponent } from './notification/notifs/notifs.component';
import { SingleNotifComponent } from './notification/single-notif/single-notif.component';
import { ClientsComponent } from './users/clients/clients.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddUserComponent, Dialog } from './users/add-user/add-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './users/client/client.component';
import { BorrowedBookComponent } from './book-dashboard/borrowed-book/borrowed-book.component';
import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';
import { BookComponent } from './book-dashboard/book/book.component';
import { AddBookComponent } from './book-dashboard/add-book/add-book.component';
import { LivresComponent } from './book-dashboard/livres/livres.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
  {
    path: '', redirectTo: '/dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard', component: DashboardComponent, pathMatch: 'full'
  },
  {
    path: 'addUser', component: AddUserComponent, pathMatch: 'full'
  },
  {
    path: 'clients', component: ClientsComponent, pathMatch: 'full'
  },
  {
    path: 'client/:id', component: ClientComponent, pathMatch: 'full'
  },
  {
    path: 'singleNotif', component: SingleNotifComponent, pathMatch: 'full'
  },
  {
    path: 'notifs', component: NotifsComponent, pathMatch: 'full'
  }
  ,
  {
    path: 'GS', component: GlobalStatsComponent, pathMatch: 'full'
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
  },
  {
    path: 'allCDC',
    loadChildren: './gestion/gestion.module#GestionModule'
  },
];

export const components = [
  AddUserComponent, DashboardComponent, ClientsComponent, ClientComponent,
  SingleNotifComponent, NotifsComponent, GlobalStatsComponent, Dialog,   BorrowedBookComponent,
  BookDashboardComponent,
  BookComponent, HeaderComponent,
  AddBookComponent,
  LivresComponent
];
@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
