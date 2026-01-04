import { Component, EventEmitter, Input, input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IProduct } from '../../../models/product.interface';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

  //product = input<IProduct>();
  @Input() product!: IProduct;


  @Output() handleAdd = new EventEmitter();

  ngOnInit() {}

  addToCart(product: IProduct) {
    this.handleAdd.emit(this.product);
  }


}
