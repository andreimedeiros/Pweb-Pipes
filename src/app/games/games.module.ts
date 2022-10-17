import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroGameComponent } from './cadastro-game/cadastro-game.component';
import { MaterialModule } from '../material/material.module';
import { ListagemGameComponent } from './listagem-game/listagem-game.component';



@NgModule({
  declarations: [
    CadastroGameComponent,
    ListagemGameComponent
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
