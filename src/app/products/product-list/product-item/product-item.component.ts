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

  constructor(private cartsService: CartsService) { }

  ngOnInit() {
  }

  onAddServer(qty: HTMLInputElement) {
    this.cartsService.createCartDetails({ product_id: this.product.id, qty: qty.value, cart_id: this.cartsService.cartId })
      .subscribe((response: HttpResponse<any>) => {
        if (response.data.cart_id === undefined) {
          this.cartsService.cartId = response.data.id;
        }
      });
  }
}
