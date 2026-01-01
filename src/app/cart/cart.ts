import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartProducts, selectTotal } from '../states/cart/cart.selector';


import { IProduct } from '../models/product.interface';
import { Observable } from 'rxjs';
import { decrementItem, incrementItem, removeFromCart } from '../states/cart/cart.action';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

  private store = inject(Store<{cart: {products: IProduct[], totalPrice: number}}>);
  cartItems$ : Observable<IProduct[]> =  this.store.select(selectCartProducts);
  tatalPrice$ : Observable<number> =  this.store.select(selectTotal);

  // Alternatively: constructer base injection
  // constructor(private store: Store<AppState>) {
  //   this.cartItems$ = this.store.select(selectCartProducts);
  //   this.tatalPrice$ = this.store.select(selectTotal);    
  // }

  remove(productId: number) {
    this.store.dispatch(removeFromCart({ productId }));
  }

  increment(productId: number) {
    this.store.dispatch(incrementItem({ productId }));
  }

  decrement(productId: number) {
    this.store.dispatch(decrementItem({ productId }));
   
  }




}
