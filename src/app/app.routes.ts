import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
    },
    {
        path: 'products',
        loadComponent: () => import('./products/products').then(m => m.Products),
    },
    {
        path: 'cart',
        loadComponent: () => import('./cart/cart').then(m => m.Cart),
    },
    {
        path: 'counter',
        loadComponent: () => import('./counter-component/counter').then(m => m.Counter),
    }

];
