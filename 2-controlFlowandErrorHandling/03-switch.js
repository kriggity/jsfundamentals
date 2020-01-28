/*
Switch Statements
- execute a block of code depending on different cases
- often use the break and/or default keywords (both are optional)
- break breaks ouf of the current condition and switch statement
- default specifies code to run if there is no case match
*/

let officeCharacter = "Toby";

switch (officeCharacter) {
    case "Michael":
        console.log("Jan was always so horny.")
        break;
    case "Jim":
        console.log("It needs to be classy.");
        break;
    case "Dwight":
        console.log("Fact!");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter} isn't here.`)
}

let menuItem = "cake";

switch (menuItem) {
    case "pie":
        console.log("Mmmmm, floor pie.");
        break;
    case "cake":
        console.log("Let them eat cake!");
        break;
    case "ice cream":
        console.log("Have you seen Mr. Tasty?");
        break;
    default:
        console.log(`Sorry, ${menuItem} is not on the menu.`);

}