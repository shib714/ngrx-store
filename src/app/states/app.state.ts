import { CounterState } from "../counter/states/counter.reducer";
import { ProductState } from "../shopping-cart/states/product.reducer";

//https://www.youtube.com/watch?v=nNxsmP1MBs8&list=PLc2Ziv7051bY3O2IXVqPlC-Gp1XY2xY1H&index=2
export interface AppState {
    counter: CounterState,

    product: ProductState,

}