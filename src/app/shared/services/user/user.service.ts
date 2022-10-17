import { Injectable } from '@angular/core';
import User from '../../model/user';
import { USERS } from '../../model/USERS';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  users: Array<User>;
  
  
  constructor() { 
    this.users = USERS
  }
  
  
  
  listar(): Array<User> {
    return this.users
  }
  
  inserir(user: User): void {
    this.users.push(user)
  }
  
}

