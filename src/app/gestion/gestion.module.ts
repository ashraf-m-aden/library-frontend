import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCDCComponent } from './cdc/all-cdc/all-cdc.component';
import { CdcComponent } from './cdc/cdc/cdc.component';
import { AddCDCComponent } from './cdc/add-cdc/add-cdc.component';
import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { AngularMaterialModule } from '../angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routesG } from './gestion.routing.module';
import { GenreComponent } from './genre/genre.component';
const firebaseConfig = {
  apiKey: 'AIzaSyAQOjGK_jq1YWh-Kvb_iSC9OjewqFCy2Ds',
  authDomain: 'nationallibrary-13f4b.firebaseapp.com',
  databaseURL: 'https://nationallibrary-13f4b.firebaseio.com',
  projectId: 'nationallibrary-13f4b',
  storageBucket: 'nationallibrary-13f4b.appspot.com',
  messagingSenderId: '1025578313641',
  appId: '1:1025578313641:web:d9ecc0ce98a831c57bc6b8',
  measurementId: 'G-QEF24HN1MB'
};


@NgModule({
  declarations: [AllCDCComponent, CdcComponent, AddCDCComponent, GenreComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routesG),
  ]
})
export class GestionModule { }
