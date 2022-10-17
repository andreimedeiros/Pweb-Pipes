import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroGameComponent } from './games/cadastro-game/cadastro-game.component';
import { MenuComponent } from './interface/menu/menu.component';
import { CadastroUserComponent } from './users/cadastro-user/cadastro-user.component';

const routes: Routes = [
  // {
  //   path:"",
  //   component:HomeComponent
  // },
  {
    path:"cadastrar-user",
    component: CadastroUserComponent
  },
  {
    path:"cadastrar-game",
    component: CadastroGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
