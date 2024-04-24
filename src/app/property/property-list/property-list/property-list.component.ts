import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyCardComponent } from '../../property-card/property-card/property-card.component';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HousingService } from '../../../service/Housing.service';
import { Iproperty } from '../../Iproperty';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports:[PropertyCardComponent,NgFor],
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit
{
  sellrent=1;
  Properties!:Array<Iproperty>;

  constructor(private route: ActivatedRoute, private housing: HousingService) { }

  ngOnInit(): void {
    if((this.route.snapshot.url.toString())==="rent-property")
    {
      this.sellrent=2;
    }
    this.housing.getallproperties(this.sellrent).subscribe(
      (data: any) => {
        this.Properties = data;
        console.log(data); 
      },
      error => {
        console.error(error);
      } 
    );
  }
}
