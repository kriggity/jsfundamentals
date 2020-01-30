/*
Methods

*/

/* 
Splice
let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
*/

let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheesecake', 'hotdog'];
console.log(`original array: ${food}`);
food.push('sashimi'); // appends to the end of the array
console.log(`pushed array: ${food}`);
food.splice(1, 1, 'lobster'); // postition, how many to delete, what to replace it with | remove shrimp and replace with lobster
console.log(`spliced array: ${food}`);
food.splice(2, 0, 'Sweet Potato Pie'); // remove nothing, add after index 1
console.log(`spliced array: ${food}`);

/*
Pop: removes the last element from an array and returns that element
arr.pop()
*/
food.pop();
console.log(`pop array: ${food}`);

/*
Shift: removes the first element from an array and returns that removed element
arr.shift()
*/
food.shift();
console.log(`shift array: ${food}`);

/*
Unshift: adds one or more elements to the beginning of an array and returns the new length of the array
arr.unshift(element1[, ...[, elementN]])
*/
food.unshift('popcorn', 'steak');
console.log(`unshift array: ${food}`);