import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCard } from './producd-card/product-card';
import { IProduct } from '../models/product.interface';

@Component({
  selector: 'products',
  imports: [CommonModule, ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  private readonly url = 'https://fakestoreapi.com/products';

  private http = inject(HttpClient);

  products$ = this.http.get(this.url) as Observable<IProduct[]>;
  error!: Observable<string | null>;



}
