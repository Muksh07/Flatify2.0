import { JsonPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../Model/User';
import { UserService } from '../../../service/user.service';
import * as alertyfy from 'alertifyjs';
import { AlertifyService } from '../../../service/alertify.service';

@Component({
  selector: 'app-user-register',
  standalone:true,
  imports:[ReactiveFormsModule,NgIf,JsonPipe],
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit 
{
  registerationForm!: FormGroup;
  user!: User;
  userSubmitted?:boolean;

  constructor(private userService: UserService, private alertify:AlertifyService ) { }

  ngOnInit() 
  {
    this.registerationForm = new FormGroup({
      userName: new FormControl('',Validators.required),
      email: new FormControl(null, [Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required, Validators.minLength(8)]),
      confirmpassword: new FormControl(null,[Validators.required, Validators.minLength(8)]),
      Mobile: new FormControl(null,[Validators.required, Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/^\d+$/)])
    },this.passwordmatchingvalidator);
  }
  createRegistrationForm()
  {
   
  }
  
  passwordmatchingvalidator(fg:AbstractControl): Validators|null 
  {
    return fg.get('password')?.value===fg.get('confirmpassword')?.value ? null:
    {notmatched:true}
  }




  get userName()
  {
    return this.registerationForm.get('userName') as FormControl;
  }
  get email()
  {
    return this.registerationForm.get('email') as FormControl;
  }
  get password()
  {
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmpassword()
  {
    return this.registerationForm.get('confirmpassword') as FormControl;
  }
  get mobile()
  {
    return this.registerationForm.get('Mobile') as FormControl;
  }


  userData():User
  {
    return this.user = {
      userName : this.userName.value,
      email:this.email.value,
      password: this.password.value,
      Mobile:this.mobile.value
    }
  }

  OnSubmit() 
  {
      console.log(this.registerationForm.value);
      this.userSubmitted = true;
      if(this.registerationForm.valid)
      {
        this.userService.addUser(this.userData());
        this.registerationForm.reset();
        this.userSubmitted = false;
        this.alertify.success('Congrats, You are successfully registered');
      }else{
        this.alertify.error('Please, Provides the required fields');
      }
  }

}
