import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestaurantService } from 'src/app/restaurant.service';
import { IRestaurant } from 'src/app/restaurants/IRestaurant';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  userform : FormGroup = new FormGroup({
    id : new FormControl(),
    name  : new FormControl("",[Validators.required,Validators.minLength(3)]),
    address : new FormControl(null,[Validators.required,Validators.minLength(3)]),
    category  :new FormControl()
  });
  restaurant : IRestaurant[];
  
  constructor(private service : RestaurantService) { }

  ngOnInit() {
    this.userform =  new FormGroup({
      id : new FormControl(),
      name  : new FormControl("",[Validators.required,Validators.minLength(3)]),
      address : new FormControl("",[Validators.required,Validators.minLength(3)]),
      category  :new FormControl()
    });
    this.service.getRestaurants().subscribe(data=>this.restaurant=data);
  }
  onSubmit(obj:any)
  {
   // console.log(obj);
   this.restaurant.map(p=> p.name).forEach(p=>console.log(p));
   let arr = this.restaurant.filter(p=>p.id==obj.id);
   if( arr.length >  0)
   {
     alert("Id already Exists")
   }
   else
   this.restaurant.push({id:obj.id,name : obj.name,address : obj.address,category :obj.category});
  }
}


