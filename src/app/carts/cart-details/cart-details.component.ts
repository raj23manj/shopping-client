import { Component, OnInit } from '@angular/core';
import { CartDetailModel } from '../cart-detail-model';
import { CartsService } from '../carts.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartDetails: CartDetailModel[] = [];
  additional_discount: number = 0;
  discounted_total: number = 0;
  total_price: number = 0;
  no_discount_total: number = 0;

  subscription: Subscription;
  subscription2: Subscription;

  constructor(private cartsService: CartsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.subscription2 = this.cartsService.getCurrentActiveCart()
      .subscribe(res => {
        if (res.data !== null)
          this.cartsService.cartId = res.data.id;

        this.subscription = this.cartsService.getCartDiscountedDetails()
          .subscribe(res => {
            this.cartDetails = res.data.calculated_cart_details;
            this.additional_discount = res.data.additional_discount;
            this.discounted_total = res.data.discounted_total;
            this.total_price = res.data.total_price;
            this.no_discount_total = res.data.no_discount_total
          });
      });
  }

  checkout() {
    if (this.cartsService.cartId != null) {
      this.cartsService.deactivateCurrentCart().subscribe(response => {
        this.cartsService.cartId = null;
        this.router.navigate([''], { relativeTo: this.route });
      });
    } else {
      this.router.navigate([''], { relativeTo: this.route });
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }

}
