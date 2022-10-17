import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    RouterModule,
    MaterialModule,
    CommonModule
  ],
  exports: [
    MenuComponent
  ]
})
export class InterfaceModule { }
