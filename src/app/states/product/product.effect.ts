import { inject, Injectable } from "@angular/core";
import { ProductApiService } from "../../services/product-api.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as ProductActions from "../../states/product/product.action";
import { switchMap, map, catchError, of } from "rxjs";



// will need to install @ngrx/effects by running npm i @ngrx/effects

@Injectable()
export class ProductEffect {
    private api = inject(ProductApiService);
    //Actions is imported from @ngrx/effects
    actions$ = inject(Actions);

    loadProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.loadProducts),
            switchMap(() => 
                this.api.getProducts().pipe(
                map((res) => ProductActions.loadProductsSuccess({ products: res })),
                catchError((error: { message: string }) =>
                    of(ProductActions.LoadProductsFailure({ errorMessage: 'Failed to load products' }))
                )
            )
        )
 
    ));
}