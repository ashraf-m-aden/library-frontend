import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { MatSortModule, MatPaginatorModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [MatSidenavModule, MatIconModule, MatTabsModule,
    BrowserAnimationsModule, MatMenuModule, MatSortModule,
    MatMenuModule, MatButtonModule, MatPaginatorModule,
    MatToolbarModule, MatListModule,
    MatDividerModule, MatInputModule,
    MatCardModule, MatTableModule, MatSelectModule
  ]
})
export class AngularMaterialModule { }
