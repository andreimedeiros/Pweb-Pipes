import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/shared/model/game';
import { GameService } from 'src/app/shared/services/game/game.service';

@Component({
  selector: 'app-listagem-game',
  templateUrl: './listagem-game.component.html',
  styleUrls: ['./listagem-game.component.scss']
})
export class ListagemGameComponent implements OnInit {

  games: Array<Game> ;

  constructor(private gameService: GameService) {
  }
  
  ngOnInit(): void {
    this.games = this.gameService.listar();
  }




}
