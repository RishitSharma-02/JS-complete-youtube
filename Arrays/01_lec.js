// arrays 
// in js arrays are resizable contains mixed of element
// sahlow copy (same reference point)
const myArr =[0,0,2,3,4,5,5,25];
const myHero =["Batman" , "Spiderman" , "Thor"];
console.log(myHero[2]);

// push and pop 
myHero.push("Hulk")
console.log(myHero);

// unshift and shift
myHero.unshift("Ironman")
console.log(myHero);
myHero.shift()
console.log(myHero)

console.log(myHero.includes("superman"));
console.log(myHero.indexOf("superman"));

// imp join ye array ko string me convert kr deta hai 

const newArr = myArr.join();
console.log(typeof(newArr)); // string 
console.log(myArr);

// slice , splice(very imp slice original array ko manipulate nhi krta and last elemen exclu.)
//(splice imp original array ko manipulate krta hai and last element incl)

const riArr = [1,2,3,4,5,6];
console.log("A" , riArr);
const riArr2 = riArr.slice(1,3);
console.log(riArr2);
console.log("B" , riArr);

const riArr3 = riArr.splice(1,3);
console.log(riArr3);
console.log("C" , riArr);



