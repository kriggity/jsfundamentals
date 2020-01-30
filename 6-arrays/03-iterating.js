/*
For Each method: executes a provided function once for each array element
- same as for in and for of
- iterates over properties in the array
arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
*/
let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheesecake', 'hotdog'];

// fat arrow concise
food.forEach(foodItem => console.log(foodItem));
food.forEach((foodItem, index) => console.log(`${index + 1}. ${foodItem}`));

// far arrow block
food.forEach(individualFoodItem => {
    console.log(individualFoodItem);
});

// normal block
food.forEach(function (foodItem, index) {
    console.log(`${index + 1}. ${foodItem}`);
});

let movieList = [
    'Clerks',
    'Mallrats',
    'Chasing Amy'
]
movieList.forEach(movieTitle => console.log(movieTitle));
movieList.push('Jersey Girl');
movieList.splice(0, 1, 'Clerks X');
movieList.forEach((movieTitle, index) => console.log(`${index + 1}. ${movieTitle}`));