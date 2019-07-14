import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/restaurant.service';
import { IRestaurant } from 'src/app/restaurants/IRestaurant';

@Component({
  selector: 'app-buy-restaurant',
  templateUrl: './buy-restaurant.component.html',
  styleUrls: ['./buy-restaurant.component.css']
})
export class BuyRestaurantComponent implements OnInit {

restaurant :IRestaurant[];
id: number;
name : string;
address : string;
category : string;
  constructor(private service : RestaurantService) { }

  ngOnInit() {
    this.service.getRestaurants().subscribe(data=>this.restaurant=data);
  }
 buy (restaurant : IRestaurant)
 {
   this.id=restaurant.id;
   this.name=restaurant.name;
   this.address=restaurant.address;
   this.category=restaurant.category;
 }

}
