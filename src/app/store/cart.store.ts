import {
    patchState,
    signalStore,
    withComputed,
    withMethods,
    withState,
} from '@ngrx/signals';

import { computed } from '@angular/core';
import { IProduct } from '../models/product.interface';

export function calculateTotalPrice(products: IProduct[]) {
    return products.reduce((total, product) => total + (product.price * product.quantity), 0)
}

export interface CartState {
    products: IProduct[];
}

const initialCartState: CartState = {
    products: [],
};


export const CartStore = signalStore(
    { providedIn: 'root' },
    withState(initialCartState),
    withComputed(({ products }) => ({
        totalPrice: computed(() => calculateTotalPrice(products())),
    })),
    withMethods(({ products, ...store }) => ({
        addToCart(product: IProduct) {
            // Check if the product already exists in the cart
            const existingProduct = products().find(p => p.id === product.id);
            let updatedProducts;

            // If the product exists, increment its quantity, otherwise add it to the cart
            if (existingProduct) {
                updatedProducts = products().map(p =>
                    p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            } else {
                updatedProducts = [...products(), { ...product, quantity: 1 }];
            }
            patchState(store, { products: updatedProducts });
        },
        removeItem(id: number) {
            const updatedProduct = products().filter((a) => a.id !== id);
            patchState(store, { products: updatedProduct });
        },

        increment(id: number) {
            const updatedProduct = products().map((product) =>
                product.id === id
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            );
            patchState(store, { products: updatedProduct });
        },
        decrement(id: number) {
            const updatedProduct = products().map((product) =>
                product.id === id
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            );
            patchState(store, { products: updatedProduct });
        },
    }))
);