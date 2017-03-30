import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {CartService} from "../cart.service";
//import {Product} from '../products-list/product.model';

@Component({
  selector: 'app-cart',
  template: `<div class="cart-items-number">Cart {{ cartItemsNumber }}</div>`,
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItemsNumber: number;
  subscription: Subscription;

  constructor(private _cartService: CartService) { 
  	this.subscription = this._cartService.displayNumberOfProducts().subscribe(totalNum => { this.cartItemsNumber = totalNum; });
  }

  ngOnInit() {
  }

}
