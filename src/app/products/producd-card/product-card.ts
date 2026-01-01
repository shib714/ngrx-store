import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { IProduct } from '../../models/product.interface';
import { CommonModule } from '@angular/common';

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
