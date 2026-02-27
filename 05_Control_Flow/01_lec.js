// if 
if(true){

}
if(false){

}
// comparision operator < , > , <= , >=  , ==, != , === (type bhi check) , !==
const month = 4;
switch(month){
    case 1 :
        console.log("Jan")
        break;

    case 2 :
        console.log("feb") 
        break;
    case 3 :
        console.log("March")
        break;
        
        default:
            console.log("hoga koi")

}

// truthy and falsy
const userEmail = "ksa@ldknfl.cokap";
if(userEmail){
    console.log("got the eamil");
    
}
else{
    console.log("Dont have email");
    
}
// falsey values 
// false , 0  ,-0, "" , null , undefiend , NaN

// truthy value 
// "0" , 'false' , " " , [] , {} , function(){} , 

const arr = [];
if(arr.length == 0){
    console.log("array is empty");
}
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("empty object ");
    
    
} 
// Nullish Coalescing operator (??): null undefined 
// safty check krta hai agar value null hai to 2nd value retur krega nhi to first 
// const val1 = 5 ?? 10;

const val1 = null ?? 50;
console.log(val1);
let var1 = undefined ?? 55;
console.log(var1);

// ternary operator
const coffePrice = 180;
coffePrice > 100 ? console.log("coastly") : console.log("affordable") ;


