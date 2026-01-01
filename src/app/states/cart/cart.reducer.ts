import { createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.action';
import { IProduct } from '../../models/product.interface';

export interface CartState {
  products: IProduct[];
  totalPrice: number
}

export const initialCounterState: CartState = {
  products: [],
  totalPrice: 0
};

export function calculateTotalPrice(products: IProduct[]) {
  return products.reduce((total, product) => total + (product.price * product.quantity), 0)
}

export const cartReducer = createReducer(
  initialCounterState,
  on(CartActions.addToCart, (state, { product }) => {
    //add product to the existing product array contained in the state
    const updatedProducts = [...state.products, product];
    return {
      ...state,
      products: updatedProducts,
      totalPrice: calculateTotalPrice(updatedProducts)

    };
  }),

  on(CartActions.removeFromCart, (state, { productId }) => {
    const updatedProducts = state.products.filter(
      (product) => product.id !== productId
    );
    return {
      ...state,
      products: updatedProducts,
      totalPrice: calculateTotalPrice(updatedProducts),
    };
  }),

  on(CartActions.incrementItem, (state, { productId }) => {
    const updatedProducts = state.products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    return {
      ...state,
      products: updatedProducts,
      totalPrice: calculateTotalPrice(updatedProducts),
    };
  }),
  on(CartActions.decrementItem, (state, { productId }) => {
    const updatedProducts = state.products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    return {
      ...state,
      products: updatedProducts,
      totalPrice: calculateTotalPrice(updatedProducts),
    };
  })
);