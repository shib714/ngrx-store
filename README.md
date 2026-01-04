# NgrxStore deep dive

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.4.

# Project Description
Expense Tracker application demonstrate the use of NGRX RXJS  with Angular from start to finish. In this project, we focused on solidifying core NgRx concepts and dive deep into creating powerful derived selectors to build a dynamic dashboard that calculates totals, income, expenses, and your net balance automatically.

# Technology Used

NGRX with store, effects, JSON-SERVER to simulate CRUD operations

# Installation

To install NGRX store, run the following command:

```bash
ng add @ngrx/store@latest
```

To install Effects, run the following command
```bash
ng add @ngrx/effects@latest
```

To install Store Devtools for debuggibg, run the following command
```bash
ng add @ngrx/store-devtools@latest
```

To install localstore, run the following command
```bash
npm i ngrx-store-localstorage
```

To install JSON SERVER as mock backend, run the following command (-g to install globally):

```bash
npm install -g json-server
```

To start json server, run 
```bash
json-server db/data.json
```
(assuming you created data.json file in db folder of your roor project. You can browse the API from the end point with the URL provided: http://localhost:3000/expenses

# Objectives:

Here, we will learn how to:
✅ Structure a feature using NgRx State, Actions, Reducers, and Effects.
✅ Perform full CRUD (Create, Read, Update, Delete) operations with a mock backend using json-server.
✅ Handle immutable array updates in your reducer for managing a list of expenses.
✅ Create a suite of advanced, memoized NgRx Selectors to derive meaningful data from your state.
✅ Build a reactive dashboard that updates automatically when your state changes.
✅ Persist your data with ngrx-store-localstorage.
✅ Build a clean UI with Angular Standalone Components.

This project is perfect for developers who want to move beyond the basics and see how to leverage NgRx to build smart, reactive, and feature-rich user interfaces.