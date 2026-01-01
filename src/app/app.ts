import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from './states/app.state';
import { Store } from '@ngrx/store';
import { selectCount } from './states/counter/counter.select';
import { Counter } from "./counter-component/counter";
import { CommonModule } from '@angular/common';
import { Products } from './products/products';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, RouterOutlet], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ngrx-store');

  counter$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select(selectCount);;
  }
}
