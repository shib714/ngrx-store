import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
    },
    {
        path: 'products',
        loadComponent: () => import('./shopping-cart/components/products/products').then(m => m.Products),
    },
    {
        path: 'cart',
        loadComponent: () => import('./shopping-cart/components/cart/cart').then(m => m.Cart),
    },
    {
        path: 'counter',
        loadComponent: () => import('./counter/components/counter').then(m => m.Counter),
    }

];
