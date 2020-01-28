let weather = 30;
if (weather < 50) {
    console.log("Wear a jacket.")
} else {
    console.log("No jacket necessary.");
}

let name = 'Dan';
if (name === 'Chris') {
    console.log(`Hello, my name is ${name}.`);
} else {
    console.log(`Hello, is your name ${name}?`);
}

let name = 'zAchARy';
console.log(`${name.charAt(0).toUpperCase()}${name.substr(1).toLowerCase()}`);

//////////////

let age = 22;
if (age >= 18 && age < 21) {
    console.log("You can vote and buy tobacco.");
} else if (age >= 21 && age < 25) {
    console.log("You can purchase alcohol.")
} else if (age >= 25) {
    console.log("You can rent a car, boat, or llama.")
} else {
    console.log("You're legally able to get married in this state. That's about it.")
}

//////////////