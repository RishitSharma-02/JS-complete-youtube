// singletons obj

const tinderUSer = new Object();
// or or
// const tinderUSer = {} ; both are same bs wo singleton hai 

tinderUSer.id = "65651dac";
tinderUSer.name = "Rishit";
tinderUSer.isLoggedIn = false ;

console.log(tinderUSer);

const rehggularUSer ={
    email : "someOne@gam.com",
    fullname : {
        userFullname :{
            Fname :"Rishit",
            Mname : "Kumar" , 
            Lname : "Sharma", 
        }
    }
}
console.log(rehggularUSer.fullname.userFullname.Fname);

// jaise arrays merege kiya tha same hm obh=j ko bhi combine kr sakte hai

const obj1 ={ 1 : "a" , 2: "b"}
const obj2 = {3 : "c" , 4: "d"}

const obj3 = {obj1 , obj2}; // problematic merge
console.log(obj3);

//use 
const obj4 = Object.assign({} , obj1 , obj2 ) // syntax is (target , objects)
console.log(obj4);

// either use spread 
const obj5 ={...obj1 , ...obj2}
console.log(obj5);