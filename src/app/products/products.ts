import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCard } from './producd-card/product-card';
import { IProduct } from '../models/product.interface';
import { ProductApiService } from '../services/product-api.service';
import { CartStore } from '../store/cart.store';
import { Store } from '@ngrx/store';
import * as ProductActions from '../states/product/product.action';
import * as ProductSelectors from '../states/product/product.selector';

@Component({
  selector: 'products',
  imports: [CommonModule, ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  private productApiService = inject(ProductApiService);

  //products$!: Observable<IProduct[]>;
  error$!: Observable<string | null>;
  cartStore = inject(CartStore);

  private store = inject(Store<{ cart: { products: IProduct[] } }>);


  //all products in the page are loaded using ProductActions
  // constructor(private store: Store<{ cart: { products: IProduct[] } }>) {
  //   this.store.dispatch(ProductActions.loadProducts());
  //   this.products$ = this.store.select(ProductSelectors.selectAllProducts);
  //   this.error$ = this.store.select(ProductSelectors.selectProductError);
  // }

  //this.store.dispatch(ProductActions.loadProducts());
  products$ = this.store.select(ProductSelectors.selectAllProducts);
  errors$ = this.store.select(ProductSelectors.selectProductError);

  constructor() {
    this.store.dispatch(ProductActions.loadProducts());
  }



  addProductToCart(product: IProduct) {
    this.cartStore.addToCart(product);
    console.log("Add product to cart", product);
  }
}
