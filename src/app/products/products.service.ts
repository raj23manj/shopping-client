import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {

  readonly API_URL = 'http://localhost:3000/api/v1/';

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get<any>(this.API_URL + 'products');
  }
}
