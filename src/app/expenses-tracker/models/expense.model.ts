
//https://www.youtube.com/watch?v=hoPZCrXkIM4&t=92s

export type ExpenseCategory = 'Food' | 'Transport' | 'Shopping' | 'Utilities' | 'Income' | 'Other';

export interface Expense {
  id : string;
  description : string;
  amount : number;
  category : ExpenseCategory;
  date : string;
}

export interface ExpenseState {
    items: Expense[];
    loading: boolean;
    error: string | null;
}
