// two ways to decleare literal , constructor  (*singlton)

//object literrals
const mySym = Symbol("MyKEY");

const jsUser = {
    name : "Rishit",
    "Full Name" : "Rishit Kumar Sharma", 
    Age : 21,
    [mySym] : "MyKEY",
    location : "Bhopal",
    email :"rishitshamra@gmail.com",
    isLoggedIn : false,
    LastLoggedIn : ["Monday" , "Friday"]
}

// access ka 2 tarika hota hai 
console.log(jsUser.email);
//and
console.log(jsUser["email"]); // more preferable 

//remebser symbol object me [value] aise decleare hota hai and aise hi acess bhi kiya ja sakta hai

jsUser.email = "beingRishit@gamil.com"; // to chng 
// to change 
// Object.freeze(jsUser); // to fix or freeze cant be chng
jsUser.email = "Risjierfk@gmaiksl."; 
console.log(jsUser["email"]);

console.log(jsUser);
jsUser.greetings = function(){
    console.log(`hello ${this["name"]}`)
}
console.log(jsUser.greetings());