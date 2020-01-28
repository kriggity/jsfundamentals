/*
- JS is interpreted line-by-line, top-to-bottom
- JS performs two passes of the code
- First pass of the code recognizes declared variables (left side of assignment operators), and stores them in memory (hoisting)
- Second pass of the code assigns values to variables
- Functions are also hoisted
*/
console.log(name);
let name = 'Chris';

b();

function b() {
    console.log('Hoisted!');
}