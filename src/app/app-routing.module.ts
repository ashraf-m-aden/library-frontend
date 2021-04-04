import { AuthGuardService } from './services/guards/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessagesComponent } from './messages/messages/messages.component';
import { SingleMessageComponent } from './messages/single-message/single-message.component';
import { BorrowBookComponent } from './book-dashboard/borrow-book/borrow-book.component';
import { GlobalStatsComponent } from './statistic/global-stats/global-stats.component';
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
import { AuthGuardDeconnectedService } from './services/guards/auth-guard-deconnected.service';

export const routes: Routes = [
  {
    path: '', redirectTo: '/dashboard', pathMatch: 'full'
  },
   {
    path: '*', redirectTo: '/dashboard', pathMatch: 'full'
  },

  {
    path: 'dashboard', component: DashboardComponent, pathMatch: 'full'
  },
  {
    path: 'addUser', component: AddUserComponent, pathMatch: 'full', canActivate: [AuthGuardService]
  },
  {
    path: 'clients', component: ClientsComponent, pathMatch: 'full', canActivate: [AuthGuardService]
  },
  {
    path: 'client/:id', component: ClientComponent, pathMatch: 'full', canActivate: [AuthGuardService]
  },
  {
    path: 'singleMessage', component: SingleMessageComponent, pathMatch: 'full', canActivate: [AuthGuardService]
  },
  {
    path: 'messages', component: MessagesComponent, pathMatch: 'full', canActivate: [AuthGuardService]
  }
  ,
  {
    path: 'GS', component: GlobalStatsComponent, pathMatch: 'full', canActivate: [AuthGuardService]
  },
  {
    path: 'type/:id', component: LivresComponent, pathMatch: 'full', canActivate: [AuthGuardService]
  },
  {
    path: 'addBook', component: AddBookComponent, pathMatch: 'full', canActivate: [AuthGuardService]
  },
  {
    path: 'book/:id', component: BookComponent, pathMatch: 'full', canActivate: [AuthGuardService]
  },
  {
    path: 'bookDashboard', component: BookDashboardComponent, pathMatch: 'full', canActivate: [AuthGuardService]
  },
  {
    path: 'borrowedBook', component: BorrowedBookComponent, pathMatch: 'full', canActivate: [AuthGuardService]
  },
  {
    path: 'borrowBook/:id', component: BorrowBookComponent, pathMatch: 'full', canActivate: [AuthGuardService]
  },
  {
    path: 'notification', component: NotificationsComponent, pathMatch: 'full', canActivate: [AuthGuardService]
  },
  {
    path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [AuthGuardDeconnectedService]
  },

];

export const components = [
  AddUserComponent, DashboardComponent, ClientsComponent, ClientComponent,
  NotificationsComponent , GlobalStatsComponent, Dialog,   BorrowedBookComponent,
  BookDashboardComponent, SingleMessageComponent,
  BookComponent, HeaderComponent, BorrowBookComponent, MessagesComponent,
  AddBookComponent, LoginComponent,
  LivresComponent
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
