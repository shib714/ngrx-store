import { createAction, props } from "@ngrx/store";
import { IProduct } from "../../models/product.interface";

export const loadProducts = createAction('[Product Component] Load Products');


export const loadProductsSuccess = createAction(
    '[Product Component] Load Products Success', props<{ products: IProduct[]}>()
);

export const loadProductsFailure = createAction(
    '[Product Component] Load Products Failure', props<{ errorMessage: string }>()
);
