const MArvel_Heros = ["Thor" , "IronMAn" , "SpiderMAn" , "Hulk"];
const DC_Heros = ["Batman" , "SuperMan" , "Flash " , "Aquaman"];
 //see arrayskoi bhi value leleta hai to ye yaha array bhi lelega 
 
//  MArvel_Heros.push(DC_Heros);
//  console.log(MArvel_Heros);

 const ALLHeros = MArvel_Heros.concat(DC_Heros);
 console.log(ALLHeros);
 //alternate concat -> ...value (ye Spread kr dega)

const All_NEw_HEros = [...MArvel_Heros , ...DC_Heros];
console.log(All_NEw_HEros);

const Another_arr = [1,2,3,[4,5,6,7,[8,9,[10,11,12]]]]
const UsableARR = Another_arr.flat(Infinity);
console.log(UsableARR);

//(isArray) ye batega jpo input mila hai wo array hai ya nhi 
// (from) ye jo bhi input  milega usko array me convert krdega 

console.log(Array.isArray("Rishit"));
console.log(Array.from("Rishit"));
//interesting case 
console.log(Array.from({name : "Rishit"}))// ye empty dega kyun ki pata nhi na hai keys ka banaye ya value ka 

let socre1 = 100;
let score2 =200;
let score3 =300;

console.log(Array.of(score2, score3 , socre1));



