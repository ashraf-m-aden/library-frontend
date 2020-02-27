import { CdcService } from './services/cdc.service';
import { Dialog } from './users/add-user/add-user.component';
import { BooksService } from './services/books.service';
import { ClientsService } from './services/clients.service';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule, components, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';

import { HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { GestionModule } from './gestion/gestion.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BorrowBookComponent } from './book-dashboard/borrow-book/borrow-book.component';

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
  entryComponents: [Dialog],
  declarations: [AppComponent, components, Dialog, BorrowBookComponent],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgxChartsModule,
    ChartsModule,
    AngularFireAnalyticsModule,
    GestionModule,
    CarouselModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ClientsService, BooksService, CdcService  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
