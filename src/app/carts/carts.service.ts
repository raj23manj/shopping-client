import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CartsService {

  cartId: number = null;

  readonly API_URL = 'http://localhost:3000/api/v1/';

  constructor(private httpClient: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  createCartDetails(cartDetail: any) {
    let req = null;
    let payload: any = null;
    let uri: any;
    if (this.cartId === null) {
      payload = {
        cart: { is_new: "true", cart_detail: cartDetail }
      };

      uri = this.API_URL + "carts";
    } else {
      payload = {
        cart_detail: cartDetail
      };

      uri = this.API_URL + `carts/${this.cartId}/cart_details`;
    }

    return this.httpClient.post<any>(uri, payload, this.httpOptions);
  }

  getTotalCartItems() {
    let uri = this.API_URL + `carts/${this.cartId}/cart_details`;
    return this.httpClient.get<any>(uri);
  }

  getCartDiscountedDetails() {
    let uri = this.API_URL + `carts/${this.cartId}/cart_details/calculated_cart_details`;
    return this.httpClient.get<any>(uri);
  }

  getCurrentActiveCart() {
    return this.httpClient.get<any>(this.API_URL + "carts/cart_is_active");
  }

  deactivateCurrentCart() {
    let payload: any = { cart: { de_activate: "true" } }
    return this.httpClient.patch<any>(this.API_URL + `carts/${this.cartId}`, payload);
  }

}
