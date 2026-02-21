const name = "rishit";
const repoCount = " total 50";
console.log(name + repoCount + "value"); // not good syntax 
//insted of this we use backticks `` (use placeholder)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

let game = new String( "fReeFire")
gameChng = game;

console.log(gameChng.substring(0,4));
let anotherGAme = game.slice(0,3);
console.log(anotherGAme);
console.log(game);

// string in js is most important part it has alot of functions so plz refer document 
/* some eaxample
trim (trim end and strt)(remove white space)
replace(value , new value)
include(value) return boolean (true if contained)
split('based on what')
*/
let myHome = "New-Miners-sawang-gomia";
console.log(myHome.split('-'));