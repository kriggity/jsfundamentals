/*
Constructor Functions
- start with capital letter
1. function keyword
2. function name
3. params 
4. this keyword refers to the object it belongs to
5. keys of the new object
6. arguments passed through function parameters; resolved as values;
7. new keyword
8. instance of object
*/
// (1)     (2)          (3)
function Person(name, age, canVote) {
    //(4)  (5)    (6)
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}
//            (7)   (8)
let person4 = new Person('James', 80, true);
console.log(person4);