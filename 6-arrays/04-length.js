/*
Length: property of an object which is an instance of type Array sets or returns the number of elements in that array
- does not start at zero

arr.length
*/
let arr = ['Clerks X', 'Mallrats', 'Chasing Amy', 'Jersey Girl'];
// console.log(arr.length);
// console.log(arr.toString()); // returns a string representing the specified array and its elements
// console.log(arr.toString());
if (arr instanceof Array) {
    let reverseArr = arr.reverse();
    reverseArr.forEach(movieTitle => console.log(movieTitle));
} else {
    console.log("Not an array.");
}