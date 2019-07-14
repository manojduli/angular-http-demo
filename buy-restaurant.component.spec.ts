import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyRestaurantComponent } from './buy-restaurant.component';

describe('BuyRestaurantComponent', () => {
  let component: BuyRestaurantComponent;
  let fixture: ComponentFixture<BuyRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
