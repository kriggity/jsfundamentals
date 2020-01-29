/*
For/in Loops
- good for counting key/value pairs in an object
- properties in an object are enumerable
- for/in loops will iterate over an object's enumerable properties

for (const key in object) {
    if (object.hasOwnProperty(key)) {
        const element = object[key];        
    }
}
*/
let student = {
    name: "Chris",
    awesome: true,
    degree: 'Ba Science in Design',
    week: 37
}

for (let item in student) {
    // console.log(item);
    console.log(student[item]); // object bracket notation
}

let catArray = ['Russian Blue', 'Calico', 'Siamese', 'Persian Longhair'];

for (cat in catArray) {
    console.log(catArray[cat]); // cat is the indices
}


let name = "cHrIsToPhEr", capName = '';
for (letter in name) {
    if (letter != 0) {
        capName += name[letter].toLowerCase();
    } else {
        capName += name[letter].toUpperCase();
    }
}
console.log(capName);
for (letter in name) {
    if (letter != 0) {
        console.log(name[letter].toLowerCase());
    } else {
        console.log(name[letter].toUpperCase());
    }
}
console.log(capName);