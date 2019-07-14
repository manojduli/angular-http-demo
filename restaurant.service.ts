import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IRestaurant } from 'src/app/restaurants/IRestaurant';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  url : string = "assets/restaurantlist.json";
  constructor(private http : HttpClient) { }
   getRestaurants () : Observable<IRestaurant []>
  { 
  
     return this.http.get<IRestaurant []>(this.url);
  }
}
