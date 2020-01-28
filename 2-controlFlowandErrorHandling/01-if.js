/*
Falsey: value considered false in a boolean context
1. false
2. 0
3. '', "", ``
4. null
5. undefined
6. NaN
*/

let isOn = true;

if (isOn == true) {
    console.log("The light is on.");
}

if (isOn) {
    console.log("The light is still on.");
}

isOn = false;
if (isOn == false) {
    console.log('The light is off.');
}
if (!isOn) {
    console.log('The light is off.');
}

let weather = 30;
if (weather < 50) {
    console.log("Wear a jacket.");
}