import { Component, OnInit } from '@angular/core';
import { CartDetailModel } from '../cart-detail-model';
import { CartsService } from '../carts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartDetails: CartDetailModel[] = [];


  subscription: Subscription;

  constructor(private cartsService: CartsService) { }

  ngOnInit() {
    this.subscription = this.cartsService.getCartDiscountedDetails()
      .subscribe(res => {
        console.log(res);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
