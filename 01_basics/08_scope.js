// bahar ke value ko global scope

// curly braces hi scope hai 
if (true){ // iske andar jo hai wo block scope 
let a =10;
const b = 20;
var c =30;
}
// console.log(a) dekh bhai ye if ke scope ke andar hai  bahr nhi aa sakta 
//console.log(b) // ye bhi same bahar nhi aa sakta  
console.log(c) //

// important :- jb hm browser ke console pr scope check krenge wo alog hai and code environment me allag hai

/*+++++ Hoisting refers to the behavior where JavaScript moves the declarations of variables, functions, and classes 
 to the top of their scope during the compilation phase. 
 This can sometimes lead to surprising results, especially when using var, let, const, or function expressions.
 */
//yes
console.log(out(4));
function out( number1){
    return number1+1;
}

//not 
// console.log(out2(5));
let out2 = function(number1){
    return number1+2;

}