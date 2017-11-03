# TheEpicodusSemicolons

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Setup steps:

1: In the terminal run `git clone https://github.com/Dan-Nollette/theEpicodusSemicolons.git`

2: In the terminal run `bower init`

3: In the terminal run `bower install bootstrap --save`

4: In the terminal run `npm install angularfire2@4.0.0-rc.0 firebase@^3.6.6 --save`

5: This App requires a firebase API key in order to work. If you don't have one already you can sign up here (https://firebase.google.com/). Once you sign up, click "Add Firebase to your web app". Save the html snippet that then pops up.

Once you have the relevant data handy, create a file in the root of the project named src/app/api-keys.ts
The content should be as follows with the specifics filled in based on the snippet you got from firebase:
```
  export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```

6: In the terminal run `ng serve` while in the project directory

7: In your browser of choice enter the URL http://localhost:4200/
