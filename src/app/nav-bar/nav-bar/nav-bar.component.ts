import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AlertifyService } from '../../service/alertify.service';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-nav-bar',
  standalone:true,
  imports:[RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit 
{
  loggedinuser : string| null=null;

  constructor(private alertify:AlertifyService) 
  { 
    
  }

  ngOnInit() 
  {
    this.loggedinuser = this.loggedin();
  }
  loggedin() :string | null
  {
    return localStorage.getItem('token');
   
  }
  Onlogout()
  {
    localStorage.removeItem('token');
    //this.loggedinuser = null;
    this.alertify.success('Logout successfull');

  }

}
