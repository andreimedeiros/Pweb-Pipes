import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/shared/model/game';


@Component({
  selector: 'app-cadastro-game',
  templateUrl: './cadastro-game.component.html',
  styleUrls: ['./cadastro-game.component.scss']
})
export class CadastroGameComponent implements OnInit {

  game: Game;

  constructor() { 
    this.game = new Game(0,'','')
  }

  ngOnInit(): void {
  }

}
