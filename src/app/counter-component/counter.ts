import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Observable } from "rxjs";
import { AppState } from "../states/app.state";
import { Store } from "@ngrx/store";
import { selectCount } from "../states/counter/counter.select";
import { increment, decrement, reset } from "../states/counter/counter.actions";


@Component({
    selector: 'counter',
    imports: [CommonModule],
    templateUrl: './counter.html',
    styleUrl: './counter.css',
    //providers: [CounterStore],

})
export class Counter {
    count$: Observable<number>;

    // counterStore = inject(CounterStore);

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