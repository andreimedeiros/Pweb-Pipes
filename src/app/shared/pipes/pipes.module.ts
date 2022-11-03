import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamecodigoPipe } from './gameCodigo/gamecodigo.pipe';




@NgModule({
  declarations: [GamecodigoPipe],
  imports: [
    CommonModule,
  ],
  exports: [
    GamecodigoPipe
  ]
})
export class PipesModule { }
