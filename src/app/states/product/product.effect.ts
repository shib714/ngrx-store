import { inject, Injectable } from "@angular/core";
import { ProductApiService } from "../../services/product-api.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as ProductActions from "../../states/product/product.action";
import { switchMap, map, catchError, of } from "rxjs";
import { IProduct } from "../../models/product.interface";

// will need to install @ngrx/effects by running npm i @ngrx/effects
@Injectable()
export class ProductEffect {

    private productService = inject(ProductApiService);
    //Actions is imported from @ngrx/effects
    actions$ = inject(Actions);

    loadProducts$ = createEffect(() =>
        this.actions$.pipe(
            //filter the actions
            ofType(ProductActions.loadProducts),
            switchMap(() =>
                this.productService.getProducts().pipe(
                    //map((res) => ProductActions.loadProductsSuccess({ products: res })), OR
                    map((products: IProduct[]) => ProductActions.loadProductsSuccess({ products })),
                    catchError((error: { message: string }) =>
                        of(ProductActions.loadProductsFailure({ errorMessage: 'Failed to load products' }))
                    )
                )
            )
        ));

    //WATCH : https://www.youtube.com/watch?v=aym8Yntel2E&t=1945s
    //  createTodo$ = createEffect(() => this.actions$.pipe(
    //     ofType(createTodo),
    //     mergeMap(({ todo }) => this.todoService.postTodods(todo).pipe(
    //         map((createdTodo) => {
    //             this.store.dispatch(loadTodos());
    //             return createTodoSuccess({ todo: createdTodo });
    //         }),
    //         catchError(error => of(createTodoFailure({ error })))
    //     ))
    // ));

    // updateTodo$ = createEffect(() => this.actions$.pipe(
    //     ofType(updateTodo),
    //     mergeMap(({ id, todo }) => this.todoService.putTodods(id, todo).pipe(
    //         map((updatedTodo) => {
    //             this.store.dispatch(loadTodos());
    //             return updateTodoSuccess({ todo: updatedTodo });
    //         }),
    //         catchError(error => of(updateTodoFailure({ error })))
    //     ))
    // ));

    // deleteTodo$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(deleteTodo),
    //         mergeMap(({ id }) =>
    //             this.todoService.deleteTodos(id).pipe(
    //                 map(() => {
    //                     this.store.dispatch(loadTodos());
    //                     return deleteTodoSuccess({ id });
    //                 }),
    //                 catchError((error) => of(deleteTodoFailure({ error })))
    //             ))
    //     ));


}