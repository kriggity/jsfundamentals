/*
- for loops take in 3 parameters
1. initial expression
2. condition
3. increment expression

for (let index = 0; index < array.length; index++) {
    const element = array[index];    
}
*/
for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

for (let i = 0; i >= -24; i -= 2) {
    console.log(i);
}

let name = "Christopher";
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

let num = 0;
for (i = 0; i <= 50; i++) {
    num += i;
}
console.log(num);