import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';
import { MaterialModule } from '../material/material.module';
import {FormsModule} from '@angular/forms';






@NgModule({
  declarations: [
    CadastroUserComponent
  ],
  imports: [
    FormsModule,
    MaterialModule,
    CommonModule
  ],
  exports: [
    CadastroUserComponent
  ]
})
export class UsersModule { }

