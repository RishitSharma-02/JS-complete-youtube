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

// if database se value aigi to array me atti hai like:-

const user =[
    {
        id :100,
        email: "user1@gmail.com",
    },
    {
        id :108,
        email: "user1@gmail.com",
    }
    ,
    {
        id :104,
        email: "user1@gmail.com",
    }
    ,
    {
        id :107,
        email: "user1@gmail.com",
    }
]
console.log((user[1]).email);
console.log(Object.keys(tinderUSer)); // keys in array
console.log(Object.values(tinderUSer));//values in arrays
console.log(Object.entries(tinderUSer));

// agar janana hai ki koi property hai ki nhi tinder user ke pass then :-
console.log(tinderUSer.hasOwnProperty('GFName'));