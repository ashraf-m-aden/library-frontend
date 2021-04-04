import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { AngularMaterialModule } from '../angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routesG } from './gestion.routing.module';
import { GenreComponent } from './genre/genre.component';



@NgModule({
  declarations: [GenreComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routesG),
  ]
})
export class GestionModule { }
