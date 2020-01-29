/*
For/of Loops
- will not work on an object because they are enumberable
- look at the iterable properties of an array

for (const iterator of object) {
    
}
*/

let catArray = ['Russian Blue', 'Calico', 'Siamese', 'Persian Longhair'];

for (let cat of catArray) {
    console.log(cat);
}