/*
- a variable is a named container for storing data
- we name variables so that we can refer to them later
*/

let a = 2;

let b = 1;
/* 
let: javascript keyword
b: variable name
=: assignment operator
1: value
*/
console.log(`total: ${a + b}`);

/*
notes on variables:
- a variable name must begin with a letter, underscore, or dollar sign
- numbers may follow the above characters, but they cannot come first
- javascript is case sensitive
- no spaces in variable names
- camelCase is the best practice for naming variables with multiple words (helps with readability)
*/

/*
var, let, const:
- var: 'old' keyword for variables in javascript
- let: 'new' keyword introduced for variables in ES6
- const: unchangeable (ES6) variable once declared
*/

/*
declarations vs initialization:
- declarations are the LEFT side of an operator in a variable assignment (e.g. let x)
- initializations are on the the RIGHT side of an operator in a variable assignment (e.g. = 1)
*/

let x, y, z; // declaration
x = 1; // initializationŒ
y = 'hello'; // initialization
z = 3; // initialization

console.log(`x: ${x} | y: ${y} | z: ${z}`);
