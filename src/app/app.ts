import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from './states/app.state';
import { Store } from '@ngrx/store';
import { selectCount } from './states/counter/counter.select';
import { CommonModule } from '@angular/common';

import { CartStore } from './store/cart.store';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, RouterOutlet, RouterLink], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ngrx-store');

  counter$: Observable<number>;
  cartStore = inject(CartStore);



  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select(selectCount);
    

  }
}
