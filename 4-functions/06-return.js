/*
Return
*/
let name = () => {
    return 'Chris';
}

let fullName = name();
console.log(`${fullName}`)

let tipCalc = amt => amt * .25;
console.log(tipCalc(12.00));

let totalPlusTip = (amt, perc) => (amt += (amt * (perc / 100))).toFixed(2);
console.log(`$${totalPlusTip(55, 22)}`);

let totalPlusTax = amt => (amt += (amt * 0.07)).toFixed(2);
console.log(`$${totalPlusTax(3.99)}`);