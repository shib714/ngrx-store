import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { Expense } from "../models/expense.model";
import { ExpenseData } from "../states/expense.actions";
import { v4 as uuidv4 } from 'uuid'; //npm i uuid

@Injectable({
    providedIn: 'root'

})
export class ExpenseService {

    private readonly expenseUrl = 'http://localhost:3000/expenses';
    private http = inject(HttpClient);

    //getExp
    getExpenses(): Observable<Expense[]> {
        return this.http.get<Expense[]>(this.expenseUrl).pipe(
            catchError(this.handleError)
        );
    }
    //add
    addExpense(expenseData: ExpenseData): Observable<Expense> {
        // post
        //prepare the data
        const newExpense: Expense = {
            id: uuidv4(),
            ...expenseData
        };
        return this.http.post<Expense>(this.expenseUrl, newExpense).pipe(
            catchError(this.handleError)
        );
    }
    //update
    updateExpense(expense: Expense): Observable<Expense> {
        return this.http.patch<Expense>(`${this.expenseUrl}/${expense.id}`, expense).pipe(
            catchError(this.handleError)
        );
    }

    //delete
    deleteExpense(expenseId: string): Observable<{}> {
        return this.http.delete<{}>(`${this.expenseUrl}/${expenseId}`).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: any): Observable<never> {
        console.error('An server error occurred:', error);
        return throwError(() => new Error('An error occurred in the expense service.'));
    }
}