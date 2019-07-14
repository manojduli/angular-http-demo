import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/restaurant.service';
import { IRestaurant } from 'src/app/restaurants/IRestaurant';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurant : IRestaurant[];
  constructor(private service:RestaurantService) {
    this.service.getRestaurants().subscribe(data=>this.restaurant=data);
   }

  ngOnInit() {
    
  }

}
