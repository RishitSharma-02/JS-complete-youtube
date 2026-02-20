// primitive 
// 7 types : String(call by value) ,number , boolean  , null (empty), undefined , symbol ,BigInt 


// reference type(non ptimitive )(iske refference apko allocate kiya ja sakta hai )
// Arrays , Objects , functions 

const score = 1000;
const score1 = 10232.35;

const isLoggedIn = true ;
const outsideTmp = null;
let userEmail;

//symbol
const id= Symbol('123');
const superId = Symbol('123');
console.log(id === superId);

const bigNumber = 7061028461;
const heros = ["shaktiman" , "doga" , "bheem" , "arjun"];
let myObj ={

    //in the form of key and value pairs
    name : "rishit",
    age : 21,
    height : 5.11,
}

let myFunc = function(){
    console.log("hello world");
} 