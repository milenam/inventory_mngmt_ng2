import { Component, EventEmitter, OnInit } from '@angular/core';
import {Product} from '../products-list/product.model';

@Component({
  selector: 'app-products-list',
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  template: `
  <div class="ui items">
    <app-product-row 
      *ngFor="let myProduct of productList" 
      [product]="myProduct" 
      (click)='clicked(myProduct)'
      [class.selected]="isSelected(myProduct)">
    </app-product-row>
  </div>
  `
})
export class ProductsListComponent implements OnInit {
	/**
   * @input productList - the Product[] passed to us
   */
  productList: Product[];

  /**
   * @output onProductSelected - outputs the current 
   *          Product whenever a new Product is selected
   */
  onProductSelected: EventEmitter<Product>;

  /**
   * @property currentProduct - local state containing 
   *             the currently selected `Product`
   */
  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }


  ngOnInit() {
  }

}
