import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { CartDetailsComponent } from './carts/cart-details/cart-details.component';
// Services
import { ProductsService } from './products/products.service';
import { CartsService } from './carts/carts.service';
import { CartItemComponent } from './carts/cart-details/cart-item/cart-item.component';
// Routes
const appRoutes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart-details', component: CartDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductItemComponent,
    CartDetailsComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [ProductsService, CartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
