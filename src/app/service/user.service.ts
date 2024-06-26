import { Injectable } from '@angular/core';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService 
{
constructor() { }
addUser(user:User)
  {
    let users = [];
    const storedUsers =localStorage.getItem('Users');
    if(storedUsers)
    {
      users = JSON.parse(storedUsers);
    }
    users.push(user);
    localStorage.setItem('Users',JSON.stringify(users));
  }
}
