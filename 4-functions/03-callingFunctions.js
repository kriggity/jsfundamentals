function hi() {
    console.log('hello');
}

// hi;
hi();
// console.log(hi);
// console.log(hi());

// as soon as the parser sees a function invocation it is immediately ran

function listNums() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
listNums();

let arr = ['This','is', 'effing', 'awesome'];
function listVals() {
    for (let item of arr) {
        console.log(item);
    }
}
listVals();