import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../product-model';
import { CartsService } from '../../../carts/carts.service';
import { HttpResponse } from '../../../../../node_modules/@angular/common/http';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  isValid: boolean = true;
  qtyAdded: number = 0;

  constructor(private cartsService: CartsService) { }

  ngOnInit() {
  }

  onAddServer(qty: HTMLInputElement) {
    if (+qty.value > 0) {
      this.cartsService.createCartDetails({ product_id: this.product.id, qty: qty.value, cart_id: this.cartsService.cartId })
        .subscribe((response) => {
          if (response.data.cart_id === undefined) {
            this.cartsService.cartId = response.data.id;
          }
          this.isValid = true;
          this.qtyAdded = +qty.value;
          qty.value = null;
        });
    } else {
      this.isValid = false;
    }

  }
}
