import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Iproperty } from '../property/Iproperty';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http:HttpClient) { }
getallproperties(sellrent:number):Observable<Iproperty[]>
{
  return this.http.get('/data/propertylist.json').pipe(
    map((data: { [key: string]: any })=> { const propertylistArray:Array<Iproperty> =[];
      for(const id in data)
      {
        if(data.hasOwnProperty(id)&& data[id].sellrent===sellrent){
          propertylistArray.push(data[id]);
        }
      }
      return propertylistArray;
    })
  );
}

}
