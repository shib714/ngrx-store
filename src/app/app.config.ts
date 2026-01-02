import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './states/counter/counter.reducer';
import { cartReducer } from './states/cart/cart.reducer';
import { productReducer } from './states/product/product.reducer';
import { provideEffects } from '@ngrx/effects';
import { ProductEffect } from './states/product/product.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore(),
    provideState({name: 'counter', reducer: counterReducer}),
    provideState({name: 'cart', reducer: cartReducer}),
    provideState({name: 'product', reducer: productReducer}),
    provideEffects(ProductEffect),
  ],
};
