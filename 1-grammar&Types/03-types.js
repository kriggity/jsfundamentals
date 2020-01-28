/*
Booleans
- true or false
*/
let on = true;
console.log(on);

let off = false;
console.log(off);

/*
Null
- null is an empty value
- an empty container with nothing in it, but something that still exists
*/
let empty = null;
console.log(empty);

/*
Undefined
- no value is defined
- does not act as an empty container
*/
let undeafff = undefined;
console.log(undeafff);

/*
Numbers
- literally just numbers
*/
let degrees = 33;
console.log(degrees);

/*
Strings
- strings are datatypes used to represent text and are wrapped in either single or double quotes
*/
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(`stringOne: ${stringOne} | stringTwo: ${stringTwo}`);

let first = 2 + 5;
let second = "2" + 5;
console.log(typeof first);
console.log(typeof second);

// if there are mixed data types (e.g. second), the number will convert to a string

/*
Objects
- used to store many values
- curly braces denote an object
- housed as key/value pairs
- separated by commas
*/
let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true
}
console.log(frodo);
console.log(typeof frodo);

/*
Arrays
- containers that hold a list of items
- square brackets denote array
- separated by commas
*/
let burritos = [
    'large',
    'spicy',
    4,
    true
]
console.log(burritos);
console.log(typeof burritos);

let firstName, lastName, houseNumber, street, city, state, zipcode;
firstName = 'Chris';
lastName = 'Kraft';
houseNumber = 4179;
street = 'Mad Anthony St.';
city = 'Cincinnati';
state = 'Ohio';
zipcode = 45223;

console.log(`${firstName} ${lastName}`);
console.log(`${houseNumber} ${street}`);
console.log(`${city}, ${state} ${zipcode}`);

/*
String: Properties
- properties are qualities associated with a specific datatype
- strings have properties, or qualities that are associated with strings
- not parenthetical
*/

console.log(firstName.length); // length will not start counting at zero

/*
String: Methods
- methods are tools that help us manipulate data but leave the original data untouched
- methods are parenthetical (e.g. .method())
*/
let myName = 'Chris Kraft';
myName = myName.toLocaleLowerCase();
console.log(myName.length);
console.log(myName);
console.log(myName.includes('kraft'));

let sent = "This sentence will be split into individual parts";
let newArray = sent.split(' ');
console.log(newArray);
