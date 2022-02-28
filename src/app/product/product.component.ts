import { GetCategoriesService } from './../services/get-categories.service';
import { GetProductsService } from './../services/get-products.service';
import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [
    trigger('fade', [
      transition("void => *", [
        style({opacity: 0}),
        animate(1000)
      ])
    ])
  ]
})
export class ProductComponent implements OnInit {

  selectedCategory: any = "0";

  products: {id: number, name: string, description: string, price: number, category: number, image: any}[] = [];
  categories: {id: number, name: string}[] = [];

  constructor(private getProductsService: GetProductsService, private getCategoriesService: GetCategoriesService) { }

  ngOnInit(): void {
    this.products = this.getProductsService.getProducts();
    this.categories = this.getCategoriesService.getCategories();
  }

  selectCategory() {
    let products = this.getProductsService.getProducts();
    let filtered = [];
    if(this.selectedCategory != "0") {
      for(let el of products) {
        if(el.category == this.selectedCategory) {
          filtered.push(el);
        }
      }
    }
    else {
      filtered = products;
    }
    this.products = filtered;
  }
}
