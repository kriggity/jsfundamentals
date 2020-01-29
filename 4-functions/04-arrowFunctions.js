/*
Arrow Functions
- shorthand way of writing a function expression (not declaration)
- all arrow functions must be stored in a variable (and are not hoisted)
- the fat arrow signifies a function
*/
let hi = () => {
    console.log("hello");
}

// Concise Body
let hi = () => console.log("hello"); // return is implicit, and occurs by default

// Block Body
let hi = () => {
    console.log("hello");
    // return keyword must be present in block body arrow function
}

// Concise vs Block
let apples = num => console.log(`There are ${num} apples.`);
apples(3);

let counting = num => {
    for (let i = 0; i <= num; i++) {
        console.log(i);
    }
}
counting(6);

/*
- 1 param = parens optional
- 0 or more than 1 params = parens mandatory
*/