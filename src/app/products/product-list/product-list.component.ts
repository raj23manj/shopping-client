import { Component, OnInit } from '@angular/core';
import { Product } from '../product-model';
import { ProductsService } from '../products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {



  products: Product[] = [];

  subscription: Subscription;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.subscription = this.productsService.getProducts().subscribe((data: any) => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
