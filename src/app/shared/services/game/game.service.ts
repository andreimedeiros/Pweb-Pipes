import { Injectable } from '@angular/core';
import { Game } from '../../model/game';
import { GAMES } from '../../model/GAMES';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  games: Array<Game>


  constructor() { 
    this.games = GAMES
  }



  listar(): Array<Game> {
    return this.games
  }

  inserir(game: Game): void {
    this.games.push(game)
  }

}
