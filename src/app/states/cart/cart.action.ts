import { createAction, props } from "@ngrx/store";
import { IProduct } from "../../models/product.interface";

//https://www.youtube.com/watch?v=nNxsmP1MBs8&list=PLc2Ziv7051bY3O2IXVqPlC-Gp1XY2xY1H&index=2
export const addToCart = createAction(
    '[Cart Component] Add to Cart',
    props<{ product: IProduct }>()
);


export const incrementItem = createAction(
    '[Cart Component] Increment Item',
    props<{ productId: number }>()
);

export const decrementItem = createAction(
    '[Cart Component] Decrement Item',
    props<{ productId: number }>()
);


export const removeFromCart = createAction(
    '[Cart Component] Remove from Cart',
    props<{ productId: number }>()
);

// export const clearCart = createAction('[Cart Component] Clear Cart');