import { DashboardComponent } from './dashboard/dashboard.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/dashboard', pathMatch: 'full'
  }, {
    path: 'dashboard', component: DashboardComponent, pathMatch: 'full'
  },
  {
    path: 'addUser', component: AddUserComponent, pathMatch: 'full'
  }
];

export const _components = [
  AddUserComponent, SidebarComponent, DashboardComponent
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
