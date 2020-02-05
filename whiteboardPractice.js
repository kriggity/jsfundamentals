/*
    - create a function that has two parameters: both of them will be numbers.
    -  inside of the function, add both of the numbers together and console.log the result
*/
addNums = (num1, num2) => num1 + num2;
console.log(addNums(3, 4));
/*
- create an object literal named 'gym' that holds the following key/value pairs:
- id: number
- name: string
- location: string
- equipment: array
- equipment is an array that should store no more than two objects. Those 2 objects should each store 'equipmentName' and 'equipmentDesc' keys.
*/
let gym = {
    id: 1,
    name: 'Globogym',
    location: 'Los Angeles',
    equipment: [
        {
            equipmentName: 'barbells',
            equipmentDesc: 'equal weights connected by a handle'
        },
        {
            equipmentName: 'therabands',
            equipmentDesc: 'big rubberbands with different elasticity'
        }
    ]
}
console.log(gym.equipment[0].equipmentName);

/*
    - create a function named volumeFinder that has 3 parameters: one named 'length', one named 'width', and the last named 'height'.
    - using the formula listed below, find the volume of a solid rectangle
        - length x width x height
    - capture the value of the equation above in a new variable, and console.log that value once equated.
*/
volumeFinder = (length, width, height) => length * width * height;
let newBox = volumeFinder(3, 4, 5);
console.log(newBox);
