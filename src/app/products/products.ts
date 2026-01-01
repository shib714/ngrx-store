import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCard } from './producd-card/product-card';
import { IProduct } from '../models/product.interface';
import { ProductApiService } from '../services/product-api.service';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { addToCart } from '../states/cart/cart.action';

@Component({
  selector: 'products',
  imports: [CommonModule, ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  //private readonly url = 'https://fakestoreapi.com/products';
  //private http = inject(HttpClient);
  //products$ = this.http.get(this.url) as Observable<IProduct[]>;
  //error!: Observable<string | null>;

  private productApiService = inject(ProductApiService);

  products$: Observable<IProduct[]> = this.productApiService.getProducts();
  store = inject(Store<AppState>);
  error!: Observable<string | null> ;


  //constructore based injection
  // constructor(private store: Store<{ cart: { products: IProduct[] } }>) {
  //  this.products$ = this.productApiService.getProducts();   
  // }


  //debug
  //ngOnInit(): void {
  //plain http call will return array of products without quantity in there
  // this.http.get(this.url).subscribe({
  //   next: (data) => {
  //     console.log(data);
  //     },
  //   error: (err) => {
  //     this.error = err;
  //   },
  // });

  //to get quantity, we will need to call productApiService.getProducts() to  return IProduct array with quantity in there
  // this.productApiService.getProducts().subscribe({
  //   next: (data) => {
  //     console.log(data);
  //   },
  //   error: (err) => {
  //     this.error = err;
  //   },
  // });
  // }

  addProductToCart(product: IProduct) {
    this.store.dispatch(addToCart({ product }));
    console.log("Add product to cart", product);
  }





}
