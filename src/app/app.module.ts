import { AuthGuardService } from './services/guards/auth-guard.service';
import { AuthService } from './services/auth.service';
import { NotificationsService } from './services/notifications.service';
import { Dialog } from './users/add-user/add-user.component';
import { BooksService } from './services/books.service';
import { ClientsService } from './services/clients.service';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule, components, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GestionModule } from './gestion/gestion.module';
import { AuthGuardDeconnectedService } from './services/guards/auth-guard-deconnected.service';

@NgModule({
  entryComponents: [Dialog],
  declarations: [AppComponent, components],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    GestionModule,
    HttpClientModule
  ],
  providers: [ClientsService, BooksService, NotificationsService, AuthService,
    AuthGuardDeconnectedService, AuthGuardService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthGuardService,
      multi   : true,
    },  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
