import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";


export interface CounterState {
    count: number;
  }
  
  export const initialState: CounterState = {
    count: 0,  
}
export const counterReducer = createReducer(
    initialState,
    //increament the count by 1 and update the sate
    on(increment, (state) => ({
        ...state,
        count: state.count + 1
    })),
    //decreament the count by 1 and update the sate
    on(decrement, (state) => ({
        ...state,
        count: state.count - 1
    })),
    //reset the count to 0 and update the sate
    on(reset, (state) => ({
        ...state,
        count: 0
    })),
      
)

