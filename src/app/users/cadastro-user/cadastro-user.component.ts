import { Component, OnInit } from '@angular/core';
import User from 'src/app/shared/model/user';


@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.scss']
})
export class CadastroUserComponent implements OnInit {
  
  teste = "testandoeee"
  user: User;
  


  constructor() { 
    this.user = new User('',0,'')
  }




  ngOnInit(): void {
  }

}
