/*
Object
- container that stores multiple sets of data as key-value pairs
- denoted by curly braces {}
*/
let netflix = {
    id: 1,
    showName: 'The Office',
    season1: {
        seasonInfo: {
            episodeInfo: [
                {
                    episode: 1,
                    episodeName: 'Pilot'
                }, {
                    episode: 2,
                    episodeName: 'Diversity Day'
                }, {
                    episode: 3,
                    episodeName: 'Health Care'
                }, {
                    episode: 4,
                    episodeName: 'The Alliance'
                }, {
                    episode: 5,
                    episodeName: 'Basketball'
                }, {
                    episode: 6,
                    episodeName: 'Hot Girl'
                }
            ]
        }
    }
}
// data is accessed using dot notation
// console.log("all data:", netflix);
// console.log(`all data: ${JSON.stringify(netflix,null,2)}`);
// console.log(`season info: ${JSON.stringify(netflix.season1.seasonInfo,null,2)}`);
// console.log(`specific episode name: ${JSON.stringify(netflix.season1.seasonInfo.episodeInfo[1].episodeName, null, 2)}`);

// let arr = netflix.season1.seasonInfo.episodeInfo;
// for (let item in arr) {
//     if (item == 2) {
//         console.log(`${arr[item].episode}. ${arr[item].episodeName}`);
//     }
// }

/*
JSON: JavaScript Object Notation
- data is text-only
- JSON syntax is derived from JS object syntax
- exists as a string, and needs converted to a native JS object
*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}
// console.log(Object.keys(spaceJam.toonSquad));
// console.log(Object.keys(spaceJam.toonSquad.duck)); // [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
// console.log(Object.keys(spaceJam.toonSquad.duck).toString()); // 0,1,2,3,4,5,6,7,8,9
// console.log(Object.values(spaceJam.nbaPlayers));

/*
object bracket notation: the object name is followed by a set of square brackets. Inside the square brackets, the property name is specified as a string
- allows the setting of keys to an object
- allow storing keys of an object as a variable

- all keys inside of an object are strings (even though they're not wrapped in single or double quotes)

object.property
object['property']
*/
let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

let test = Object.keys(garden); // [ 'vegetable', 'flower', 'fruit', 'water', 'sun', 'size' ]
// console.log(typeof test[0]); // string

let zucchini = garden['vegetable'];
// console.log(zucchini); // zucchini

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

let baking = {};
baking['zucchini'] = 'better make some bread';
console.log(baking[garden['vegetable']]); // better make some bread


let testObj = {
    "Space Here": true,
    noSpaces: true
}
console.log(testObj["Space Here"]);