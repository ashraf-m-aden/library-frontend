import { GlobalStatsComponent } from './statistic/global-stats/global-stats.component';
import { NotifsComponent } from './notification/notifs/notifs.component';
import { SingleNotifComponent } from './notification/single-notif/single-notif.component';
import { ClientsComponent } from './users/clients/clients.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './users/client/client.component';

export const routes: Routes = [
  {
    path: '', redirectTo: '/dashboard', pathMatch: 'full'
  },
  {
    path: 'bookDashboard',
    loadChildren: './book-dashboard/books.module#BookDashboardModule'
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
    path: 'client', component: ClientComponent, pathMatch: 'full'
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
  }
];

export const components = [
  AddUserComponent, DashboardComponent, ClientsComponent, ClientComponent,
  SingleNotifComponent, NotifsComponent, GlobalStatsComponent
];
@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
