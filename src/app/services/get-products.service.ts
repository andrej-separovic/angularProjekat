import { Injectable } from '@angular/core';
import products from '../../assets/json/products.json';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  constructor() { }

  getProducts() {
    return products;
  }
}
