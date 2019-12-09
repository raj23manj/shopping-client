import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { CartDetailsComponent } from './carts/cart-details/cart-details.component';
// Services
import { ProductsService } from './products/products.service';
import { CartsService } from './carts/carts.service';
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
    CartDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductsService, CartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
