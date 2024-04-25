import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsModule, TabsetComponent } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';


@Component({
  selector: 'app-add-property',
  standalone:true,
  imports:[FormsModule,NgIf,TabsModule,ButtonsModule,NgFor], 
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit 
{
  propertytypes: Array<string> = ["House","Appartment","Duplex"];
  furnishedtypes: Array<string> = ["Fully","Semi","Unfurnished"];
  @ViewChild('tabset') tabset?: TabsetComponent

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
  nextTab(tabId:number)
  {
    if (this.tabset && this.tabset.tabs && tabId < this.tabset.tabs.length) {
      this.tabset.tabs[tabId].active = true;
    }
  }

}
