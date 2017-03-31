import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {CartService} from "../cart.service";
//import {Product} from '../products-list/product.model';

@Component({
  selector: 'app-cart',
  template: `<div class="cart-wrapper" (mouseover)='displayProducts()' (mouseleave)='hideProducts()'>
	  			 <div class="cart-items-number">Cart {{ cartItemsNumber }}</div>
	  			 <div class="products-in-cart" *ngIf="displayCart">
		  			 <app-product-row *ngFor="let productItem of productsInCart" 
		      			[product]="productItem">
		    		 </app-product-row>
	  			 	
	  			 </div>
  			 </div>`,
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItemsNumber: number;
  subscription: Subscription;
  productsInCart: Array<any>;
  displayCart: boolean;

  constructor(private _cartService: CartService) { 
  	this.subscription = this._cartService.displayNumberOfProducts().subscribe(totalNum => { this.cartItemsNumber = totalNum.totalNum;  this.productsInCart = totalNum.product; });
    this.displayCart = false;
  }

  displayProducts() {
  	this.displayCart = true;
  }

  hideProducts() {
  	this.displayCart = false;
  }

  ngOnInit() {
  }

}
