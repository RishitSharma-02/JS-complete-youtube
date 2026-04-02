// jannenge function ke bare mai 
// note js haar nhi manti har cheej ko upar se upar leke jati hai and jati hi rhti hai 
//  this is called protypal inheritance


function multipleBy5(num){
    return num*5;

}
console.log(multipleBy5(5));

multipleBy5.power =2;
// console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function constUser (userName , score ){
    this.userName = userName;
    this.score = score;
}

// remember this means jis
// ab sb kuch b=dhayan se dekhna 
/*
dekho hota kya hai ki constUSer.prototype se hmko ek empty prototype mil jayega 
ok ({}) ye hai . then isme hmm kuch method dall rhe hai dekho aise 
constUser.prototype.increment = function(){
    score++;
}
 dekho ya pr hmne increment naam ka method banaya and ab isko bolo jb bhi call
 kar tum score badhado 
 ok lekin dikat ayaha ayegi 

 const chai = constUser("chai" , 49);
 const coffe = constUser("coffe" , 79);

 ab jo hai ye increment smjh nhi payega ki kiska value badhana hai 
 to isko current context (abhi hm jis pr ha usko ) batane ke liye 
 THIS key word picture me atta hai 
 */
constUser.prototype.increment = function(){
    this.score++;
}
constUser.prototype.PrintMe = function(){
    console.log(`Price is , ${this.score}`);  // kiska score jis ka baat ho rha hai uskop 

}
/*
 const chai = constUser("chai" , 49);
 const coffe = constUser("coffe" , 79);
  
 // Now 
 chai.PrintMe();
 dekho ab important bata ye upar ka code nhi chalega kyun nhi chalega hmne to 
 sb theek banaya hai ye isleye nhi chalega kyunki hmne prototype me method to 
 dal diya lekin ye abhi usse pata nhi chala hai to pata kaise chalega to ye usko 
 aise pata hai by using NEW KeyWord 
 */

  const chai = new constUser("chai" , 49);
 const coffe = new constUser("coffe" , 79);
 chai.PrintMe();
 coffe.PrintMe();
 chai.increment();
 coffe.increment();
 chai.PrintMe();
 coffe.PrintMe();
 /*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/