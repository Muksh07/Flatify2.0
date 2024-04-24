import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  standalone:true,
  imports:[FormsModule,NgIf], 
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  constructor(private myrouter:Router) 
  { 

  }

  ngOnInit() 
  {

  }
  onBack()
  {
    this.myrouter.navigate(['/']);
  }
  OnSubmit(myForm:any)
  {
    console.log(myForm);
  }

}
