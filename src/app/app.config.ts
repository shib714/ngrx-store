import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { ProductEffect } from './states/product/product.effect';
import { productReducer } from './states/product/product.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { counterReducer } from './states/counter/counter.reducer';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore(),
    provideState({ name: 'counter', reducer: counterReducer }),
    provideState({ name: 'product', reducer: productReducer }),
    provideEffects(ProductEffect),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
}),
  ],
};
