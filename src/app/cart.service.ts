import { Injectable } from '@angular/core';
import {Product} from './products-list/product.model';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CartService {
	private cart:Product[]=[];
    private subject = new Subject<any>();

  constructor() { }

    addItem(item:Product) {
        this.cart.push(item);
        this.subject.next(this.cart.length);
        this.displayNumberOfProducts();
    }
    deleteItem(item:Product){
        //this.cart = this.cart.filter(cartItem=>cartItem.id!==item.id);
    }
    clearCart(){
        this.cart = [];
    }

    displayNumberOfProducts(): Observable<any> {
        return this.subject.asObservable();
    }
}
