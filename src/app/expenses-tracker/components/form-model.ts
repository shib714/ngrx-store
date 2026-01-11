import { ExpenseCategory, Expense } from "../models/expense.model";

export interface FormModel {
    description: string;
    amount: number;
    category: ExpenseCategory;
    date: string;
}

export const initialValues: FormModel = {
    description: '',
    amount: 0.00,
    category: 'Food',
    date: new Date().toISOString().split('T')[0] // Default to today
}