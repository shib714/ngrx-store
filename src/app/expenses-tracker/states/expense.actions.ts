//loading
//https://www.youtube.com/watch?v=hoPZCrXkIM4&t=529s
import { createAction, props } from '@ngrx/store';
import { Expense } from '../models/expense.model';

//data to pass while add (omitting the id from Expense)
export type ExpenseData = Omit<Expense, 'id'>;

export const loadExpenses = createAction('[Expenses Page] load Expense');

export const loadExpensesSuccess = createAction(
  '[Expenses API] load Expense Success',
  props<{ expenses: Expense[] }>()
);

export const loadExpensesFailure = createAction(
  '[Expenses API] load Expense Failure',
  props<{ error: any }>()
);
//load expense by id
// export const loadExpenseById = createAction(
//   '[Expenses Page] Load Expense By Id',
//   props<{ expenseId: string }>()
// );

// export const loadExpenseByIdSuccess = createAction(
//   '[Expenses API] Load Expense By Id Success',
//   props<{ expenseId: string }>()
// );
// export const loadExpenseByIdFailure = createAction(
//   '[Expenses API] Load Expense by ID Failure',
//   props<{ error: any }>()
// );
//add
export const addExpense = createAction(
  '[Expenses Page] Add Expense',
  props<{ expenseData: ExpenseData }>()
);
export const addExpenseSuccess = createAction(
  '[Expenses API] Add Expense Success',
  props<{ expense: Expense }>()
);
export const addExpenseFailure = createAction(
  '[Expenses API] Add Expense Failure',
  props<{ error: any }>()
);

//update
export const updateExpense = createAction(
  '[Expenses Page] Update Expense',
  props<{ expense: Expense }>()
);
export const updateExpenseSuccess = createAction(
  '[Expenses API] Update Expense Success',
  props<{ expense: Expense }>()
);
export const updateExpenseFailure = createAction(
  '[Expenses API] Update Expense Failure',
  props<{ error: any }>()
);

//delete
export const deleteExpense = createAction(
  '[Expenses Page] Delete Expense',
  props<{ expenseId: string }>()
);
export const deleteExpenseSuccess = createAction(
  '[Expenses API] Delete Expense Success',
  props<{ expenseId: string }>()
);
export const deleteExpenseFailure = createAction(
  '[Expenses API] Delete Expense Failure',
  props<{ error: any }>()
);