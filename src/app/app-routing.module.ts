import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroGameComponent } from './games/cadastro-game/cadastro-game.component';
import { ListagemGameComponent } from './games/listagem-game/listagem-game.component';
import { CadastroUserComponent } from './users/cadastro-user/cadastro-user.component';

const routes: Routes = [
  {
    path:"cadastrar-user",
    component: CadastroUserComponent
  },
  {
    path:"cadastrar-game",
    component: CadastroGameComponent
  },
  {
    path:"games-list",
    component:ListagemGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
