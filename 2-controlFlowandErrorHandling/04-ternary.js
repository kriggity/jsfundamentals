/*
Ternary: shorcut for writing an if/else statement
- requires the default (else)
*/
let num = 6;

// Ternary
(num > 0) ? console.log("yes") : console.log("no");

// If/else
if (num > 0) {
    console.log("yes");
} else {
    console.log("no");
}

// Else/if
let num = 0;
// Ternary
(num == 0) ? console.log("working") : (num < 0) ? console.log("not working") : console.log("still not working");
// else/if
if (num == 0) {
    console.log("working");
} else if (num < 0) {
    console.log("not working");
} else {
    console.log("still not working");
}

let age = 32;
(age >= 18 && age < 21) ? console.log("You can vote and purchase tobacco.")
: (age >= 21 && age < 25) ? console.log("You can purchase alcohol.")
: (age >= 25) ? console.log("You can rent a car or boat.")
: console.log("You're legally able to marry in this state, and that's about it.");