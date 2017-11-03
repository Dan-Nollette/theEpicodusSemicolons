# The Epicodus Semicolons Quidditch Team Roster

#### _Epicodus Friday Project in Angular_

#### By Dan Nollette

## Description

_A friday coding project exploring Angular and typescript with the addition of CLI and firebase._

## Setup/Installation Requirements


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

## Known Bugs

*   No known bugs at this time; however, this is a work in progress.

## Support and contact details

_Please contact [nollette.dan@gmail.com](mailto:nollette.dan@gmail.com) with questions, comments, or issues, or to contribute to the code._

## Technologies Used

* JavaScript/Typescript
* Angular
* Node
* Firebase

### License

Copyright (c) 2017 ** Dan Nollette**

*This software is licensed under the MIT license.*
