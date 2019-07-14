import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule}from '@angular/forms';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { HttpClientModule } from '@angular/common/http';
import { Route,RouterModule } from '@angular/router';
import { BuyRestaurantComponent } from './buy-restaurant/buy-restaurant.component';



const routes: Route []=[
  {
    path : 'restaurant',
    component : RestaurantsComponent
  },
  {
    path : 'addRestaurant',
   component : AddRestaurantComponent
  },
  {
     path : 'buyRestaurant',
     component : BuyRestaurantComponent
  },
  {
     path : '',
     redirectTo : '/restaurant',
     pathMatch : 'full'
   }
];



@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    AddRestaurantComponent,
    BuyRestaurantComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
