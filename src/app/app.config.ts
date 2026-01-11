import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromExpenses from './expenses-tracker/states/expense.reducer';
import { ExpenseEffects } from './expenses-tracker/states/expense.effects';

import { provideStoreDevtools } from '@ngrx/store-devtools';

import { ProductEffect } from './shopping-cart/states/product.effect';
import { productReducer } from './shopping-cart/states/product.reducer';
import { counterReducer } from './counter/states/counter.reducer';



export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore(),

    provideState(fromExpenses.expensesFeatureKey, fromExpenses.expensereducer),
    provideEffects([ExpenseEffects]),
    provideState({ name: 'counter', reducer: counterReducer }),
    provideState({ name: 'product', reducer: productReducer }),
    provideEffects(ProductEffect),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
}),
  ],
};
