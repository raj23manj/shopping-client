import { Component, OnInit, Input } from '@angular/core';
import { CartDetailModel } from '../../cart-detail-model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input('detail') detail: CartDetailModel;
  @Input('index') index: number;

  constructor() { }

  ngOnInit() {
  }


}
