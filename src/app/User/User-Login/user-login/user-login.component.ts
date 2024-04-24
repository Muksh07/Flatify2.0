import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { AlertifyService } from '../../../service/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private Authservice:AuthService, private alertify:AlertifyService,private router:Router) { }

  ngOnInit() 
  {

  }
  onlogin(loginform:NgForm)
  {
     console.log(loginform.value);
     const token = this.Authservice.AuthUser(loginform.value);
     if(token){
      //console.log('Login Successful')
      localStorage.setItem('token' ,token.userName)
      this.alertify.success('Login successfull')
      this.router.navigate(['/']);
     }
     else{this.alertify.error('Wrong user or password')
    //console.log('Login not successful');
    }
  }

}
