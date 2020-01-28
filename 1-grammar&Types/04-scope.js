/*
Scope
- scope is how a computer keeps track of all variables in a program
- scopes can be nested, where there's an outer scope (global), and on an inner scope (local)
*/
let x = 12; // globally-scoped variable
function scope() {
    let x = 33; // locally-scoped variable
    console.log(x);
}
scope();
console.log(x);

//

let y = 12;
function scope() {
    y = 33;
    console.log(y);
}
scope();
console.log(y);

/*
Const: is a constant variable that cannot be reinitialized
Var: scoped to the nearest function block
Let: scoped to the nearest enclosing block
*/
var x = 12;

function varTest() {
    var x = 33;
    if (1 == 1) {
        var x = 45;
        console.log(x);
    }
    console.log(x);

}
varTest();
console.log(x);

//

let x = 12;
function letTest() {
    var x = 33;
    if (true) {
        let x = 45;
        console.log(x);
    }
    console.log(x);
}
letTest();
console.log(x);

//

const x = 12;
function constTest() {
    const x = 1;
    if (true) {
        const x =3;
        console.log(x);
    }
    console.log(x);
}
constTest();
console.log(x);

//

