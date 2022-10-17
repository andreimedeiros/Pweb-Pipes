import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroGameComponent } from './cadastro-game/cadastro-game.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    CadastroGameComponent
  ],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [
    CadastroGameComponent
  ]
})
export class GamesModule { }
