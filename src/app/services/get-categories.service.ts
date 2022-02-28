import { Injectable } from '@angular/core';
import categories from '../../assets/json/categories.json';

@Injectable({
  providedIn: 'root'
})
export class GetCategoriesService {

  constructor() { }

  getCategories() {
    return categories;
  }
}
