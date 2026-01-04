import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { selectCount } from "../states/counter.select";
import { increment, decrement, reset } from "../states/counter.actions";
import { AppState } from "../../states/app.state";


@Component({
    selector: 'counter',
    imports: [CommonModule],
    templateUrl: './counter.html',
    styleUrl: './counter.css',
    //providers: [CounterStore],

})
export class Counter {
    count$: Observable<number>;

     //counterStore = inject(CounterStore);

    constructor(private store: Store<AppState>) {
        this.count$ = this.store.select(selectCount);
    }

    increment() {
        this.store.dispatch(increment());
    }
    decrement() {
        this.store.dispatch(decrement());
    }
    reset() {
        this.store.dispatch(reset());
    }
}