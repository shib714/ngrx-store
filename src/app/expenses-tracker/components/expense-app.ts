import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Expense, ExpenseCategory } from '../models/expense.model';
import { FormModel, initialValues } from './form-model';
import { Field, form, submit } from '@angular/forms/signals';
import * as ExpenseSelectors from '../states/expense.selectors';
import * as ExpenseActions from '../states/expense.actions';
import { CommonModule } from '@angular/common';
import { ExpenseData } from '../states/expense.actions';
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'expense-app',
  imports: [CommonModule, Field],
  templateUrl: './expense-app.html',
  styleUrl: './expense-app.css',
})
export class ExpenseApp {

  private store = inject(Store);
  isEditMode = signal(false);
  isSubmitting = signal(false);
  private snackBar = inject(MatSnackBar);

  private formModel = signal<FormModel>(initialValues);
  // excluding id property during add and making it optional during editing
  // formModel: Omit<Expense, 'id'> & { id?: string } = {
  //   description: '',
  //   amount: 0,
  //   category: 'Food',
  //   date: new Date().toISOString().split('T')[0] // Default to today
  // };

  expenseForm = form(this.formModel);

  // Observables for the template
  allExpenses$: Observable<Expense[]>;
  isLoading$: Observable<boolean>;
  totalIncome$: Observable<number>;
  totalExpenses$: Observable<number>;
  netBalance$: Observable<number>;
  expenseCategories: ExpenseCategory[] = ['Food', 'Transport', 'Shopping', 'Utilities', 'Income', 'Other'];

  constructor() {
    // Select all the data slices we need for our UI
    this.allExpenses$ = this.store.select(ExpenseSelectors.selectAllExpenses);
    this.isLoading$ = this.store.select(ExpenseSelectors.selectExpensesLoading);
    this.totalIncome$ = this.store.select(ExpenseSelectors.selectTotalIncome);
    this.totalExpenses$ = this.store.select(ExpenseSelectors.selectTotalExpense);
    this.netBalance$ = this.store.select(ExpenseSelectors.selectNetBalance);
  }

  ngOnInit(): void {
    this.store.dispatch(ExpenseActions.loadExpenses());
  }
  saveExpense(): void {
    //this.subscribeMessage.set('');
    submit(this.expenseForm, () =>
      this.onSubmit());
  }
  async onSubmit() {
    // Submit to the server
    console.log('Submitting data to server:', this.expenseForm().value());
    if (this.expenseForm().valid()) {
      this.isSubmitting.set(true);

      const formValue = this.expenseForm().value();

      if (this.isEditMode()) {
        this.snackBar.open('Transaction updated successfully', 'Close', { duration: 3000 });
        this.onEdit(formValue as Expense);
        this.isEditMode.set(false);
        this.expenseForm().reset(initialValues);
      } else {
        const expenseData: ExpenseData = this.expenseForm().value();
        // Dispatch add action
        this.store.dispatch(ExpenseActions.addExpense({ expenseData }));
        this.snackBar.open('Transaction added successfully', 'Close', { duration: 3000 });

      }
      this.isSubmitting.set(false);
      // Reset form 
      this.expenseForm().reset(initialValues);
    }
  }

  onEdit(expense: Expense): void {
    this.isEditMode.set(true);
    this.expenseForm().reset({ ...expense, date: new Date(expense.date).toISOString().split('T')[0] });
    console.log("Updating expense :", this.expenseForm().value());
    this.store.dispatch(ExpenseActions.updateExpense({ expense }));
    window.scrollTo(0, 0);
  }

  onDelete(expenseId: string): void {
    if (confirm('Are you sure you want to delete this transaction?')) {
      this.store.dispatch(ExpenseActions.deleteExpense({ expenseId }));
    }
  }
  onCancel(): void {
    this.expenseForm().reset(initialValues);
    this.isEditMode.set(false);
  }
}


