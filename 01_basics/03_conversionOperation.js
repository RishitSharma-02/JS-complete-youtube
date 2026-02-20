/*
let score = "33";
console.log(typeof (score));
let valueInNumber = Number(score)
console.log(typeof valueInNumber);

let num = "55avv";
let value2 = Number(num);
console.log(value2)
console.log(typeof value2);


let num2 = null
let value3 = Number(num2)
console.log(value3)
console.log(typeof value3)

let num3 = undefined
let value4 = Number(num3);
console.log(value4)
console.log(typeof value4);

// 33 is easily converted into no 
// 33adb is give NaN not a number

let isLoggedIn =  "Rishit"; // 1 is true 0 is false
// empty string is false and any string is true
let booleanIsLoggdIn = Boolean(isLoggedIn);
console.log(booleanIsLoggdIn);


let someNumber = 33;
let StringCon = String (someNumber);
console.log(typeof StringCon);
console.log(StringCon);

*/

// *******************Operation ****************************


let value = 44;
let negVal = -value;
console.log(negVal);

/*
console.log(2+2)
console.log(2*2)
console.log(2**3) power
console.log(2/2)
*/
let gameCounter = 34 
gameCounter++;
console.log(gameCounter)

// prefix and postfix
/*
If used postfix, with operator after operand (for example, x++),
the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, ++x),
the increment operator increments and returns the value after incrementing.
*/

let x = 44;
let y = ++x;
console.log(`x:${x} ,  y:${y}`);

let a = 34;
let b = a++;
console.log(`a:${a} ,  b:${b}`);
