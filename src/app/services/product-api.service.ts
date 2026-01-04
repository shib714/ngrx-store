import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProduct } from '../models/product.interface';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductApiService {

    private readonly API_URL = 'https://fakestoreapi.com/products';


    http = inject(HttpClient);
    
    //thnrough this method, we added quantity data in addition to the data returned by the API
    getProducts() : Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.API_URL)
            .pipe(
                map(((products) => {
                    return products.map((product) => {
                        return { ...product, quantity: 1 }
                    })
                }))
            )                
    }

    //For demonstration purposes only to do CRUD, not in use
    //Create
    postProduct(product: IProduct): Observable<IProduct> {
        return this.http.post<IProduct>(this.API_URL, product);
    }

    //update
    putProduct(id: number, product: IProduct) {
        return this.http.put<IProduct>(`${this.API_URL}/${id}`, product);    
    }

    //delete
    deleteProduct(id: number) {
        return this.http.delete<IProduct>(`${this.API_URL}/${id}`);
    }
}






}