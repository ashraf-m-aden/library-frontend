import { routesC } from './book-dashboard-routing.module';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorrowedBookComponent } from './borrowed-book/borrowed-book.component';
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { LivresComponent } from './livres/livres.component';
import { BookDashboardComponent } from './book-dashboard.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    BorrowedBookComponent,
    BookDashboardComponent,
    BookComponent,
    AddBookComponent,
    LivresComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(routesC),
    CarouselModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BookDashboardModule { }
