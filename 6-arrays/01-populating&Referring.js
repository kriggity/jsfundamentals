/* 
Arrays
- containers that hold a list of items
- denoted by square brackets []
- can hold multiple data types
- each item, regardless of datatype, in the array is separated by a comma
*/
let list = ['orange', 'banana', 'apple'];
console.log(list[1]); // banana

/*
- square bracket notation: when calling an array, append square brackets immediately after the array name with the index number referenced
- begins count at zero
*/
let students = ['Matt', 'Bob', 'Jeff', 'AB', 43, true, ['Krigs', 'Taylor', 'Will']];
// instanceof operator is used to check the variable used
console.log(typeof students); // object
console.log(students instanceof Array); // true
console.log(students instanceof Object); // true
console.log(students[2]); // Jeff
console.log(`Hello, ${students[6][2]}.`); // Hello, Will.