import { Component, OnInit } from '@angular/core';
import {Product} from '../products-list/product.model';
@Component({
  selector: 'app-product-image',
  host: {class: 'ui small image'},
  inputs: ['product'],
  template: `
  <img class="product-image" [src]="product.imageUrl">
  `
})
export class ProductImageComponent implements OnInit {
	product: Product;
  constructor() { }

  ngOnInit() {
  }

}
