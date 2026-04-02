const user = {
    users: "Rishit kumar sharma",
    loginCount : "58",
    signIn : " true",

    getUSerDetails : function(){
        // console.log("Got user Details ")
        
        // dekho agar hm yaha pr username console karate hai 
        // to kya hoga 
        // console.log(`"username:" , ${users}`)
        // isko pata hi nhi hai kis users ka baat ho 
        // rha hai yaad karo jo pdhe the execution contest ka 
        // ki iska alag fres EC banta hai

        //ye aise hoga 
        // console.log(`"userNAme:" , ${this.users}`  );
        


    }

}
// console.log(user.users);
// console.log(user.getUSerDetails());
//ek baar this ko jaan lo

// .........................
// new key word jo hai ye constructor function hai jo allow karta hai ki 
// app ek hi object literal se multiple instances bana saka

function userO(userName , loginCount , isLoggedIn){
    this.userName = userName;
    this.isLoggedIn = isLoggedIn;
    this.loginCount = loginCount;

    return this;
}
const userOne = userO("hitesh ", 12 , true);
 console.log(userOne);
 // if we do 
 const userTwo = userO("jva",87 ,false)
 //then this overwrite the value set by userOne 

//  to remove ths issue we use new to get new instances every time (separate copy)
// new use krke ek empty object create hoga 
//2nd :- ek constructor fun call hota hai new keyword ke karan 
//3rd :- this se argunment iss obj ke andar inject ho jate hai 
// 4th : - hame funct ke andar mil jayenge 


 