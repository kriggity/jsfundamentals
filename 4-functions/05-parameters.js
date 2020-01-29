function hi(name) {
    console.log(`Hello, ${name}.`)
}
hi("Butthead");

function counter(num) {
    for (num; num <= 10; num++) {
        console.log(num);
    }
}
counter(-5);

function concatName(first,last) {
    let fullName = first + " " + last;
    console.log(`Hello, my name is ${fullName}.`);
}
concatName('Chris','Kraft');