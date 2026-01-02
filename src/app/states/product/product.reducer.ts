import { createReducer, on } from "@ngrx/store";
import { IProduct } from "../../models/product.interface";
import * as ProductActions from "./product.action";

export interface ProductState {
    products: IProduct[],
    error: string | null
}

export const initialProductState: ProductState = {
    products: [],
    error: null
}

export const productReducer = createReducer(
    initialProductState,
    on(ProductActions.loadProductsSuccess, (state, { products }) =>({
        ...state,
        products: products,
        error: null,
    })),
    on(ProductActions.LoadProductsFailure, (state, { errorMessage }) => ({
        ...state,
        error: errorMessage,
    }))
);


