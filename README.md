# NgrxStore

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.4.

The project is to demonstrate the use of NGRX  signal store including NGRX effects using redux pattern to maintain application state.
CSS used: [Tailwind CSS] https://ailwind css is used in styles
Inspired by : https://www.youtube.com/watch?v=Szmkp5xxOUo&t=21s

To load products, we use FREE api  : 'https://fakestoreapi.com/products'

## Getting Started

To use NgRX, install NgRx library running command :
```bash
 ng add @ngrx/store@latest 
 ```
To use NgRX Effects, install NgRx effects library running command :
```bash
ng add @ngrx/effects@latest 
``` 
To use NgRX Signal store, install NgRx signal store library running command :
```bash
ng add @ngrx/signals@latest

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
