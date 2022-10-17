import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu'; 
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    MatMenuModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    CommonModule
  ],
  exports: [
    MatMenuModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatCardModule,

  ]
})
export class MaterialModule { }
