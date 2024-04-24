import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-property-details',
  standalone:true,
  imports:[RouterLink,RouterLinkActive],
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  public propertyId: number;
  constructor(private route: ActivatedRoute, private router: Router) 
  { 
    this.propertyId = 0;
  }

  ngOnInit()
  {
    this.propertyId= +(this.route.snapshot.params['id']);
    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
      });
  }
  onNextPage() 
  {
      this.propertyId++;
      this.router.navigate(['/detail-property', this.propertyId]);
  }

}
