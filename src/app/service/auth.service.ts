import { Injectable } from '@angular/core';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService 
{
constructor() { }
AuthUser(user:any)
{
  let USerArray = [];
  const userinlocal = localStorage.getItem('Users');
  if( userinlocal){
    USerArray = JSON.parse(userinlocal);
  }
  return USerArray.find((p: User)=> p.userName===user.userName && p.password === user.password);
}

}
