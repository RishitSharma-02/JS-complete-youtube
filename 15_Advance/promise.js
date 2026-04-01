/*
const promiseOne = new Promise(function(resolve , reject){
    // can do an async or
    // Db calls , cryptography , network call etc.

    setTimeout(function(){
        console.log("Async task is complete") // abhi ye then connext nhi hua hai 

        // ab hoga .then promise se connect 
        resolve();
    },1000)
})
// ye ho gya promise creation ab isko conmsume bhi krna hai 

// consume 
promiseOne.then(function(){
    console.log("promise Consumed")
})

/// second method

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },10000)
}).then(function(){
    console.log("Async task 2 is completed")
})

// 3 
const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("HEY there you are:-");
        resolve({userName : "Rishit" , age : "22" , Department : "CSE"})
    },5000)
}).then(function(user){
console.log(user);
})
*/

//4
/*
const promiseFour = new Promise (function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            console.log("functon is running");
        resolve({userNmae:"Rishit" , Roll:"Manager"});
        }else{
            reject("ERORR 404 occured");
        }        
    },2500)
})
promiseFour
.then((user) =>{ // dekho ye bhut imp step hai yaha pr isko bolte hai chainig 
    //databases connection me kaam ata hai ye wale then jo value return karega 
    // wo iske bd wale then me jayega 

    console.log(user);
    return user.userNmae 
})
.then(
    function(userNmae){
        console.log(userNmae);
    }
)
.catch((e)=>{
    console.log(e);
})
.finally(()=> console.log("The promise is finally either reject or resolved ")
)

// promise 5
// also a good way to handle promise many time use in databases

const promiseFive = new Promise(function(resolve , reject){
    let error = false;
    if(!error){
        console.log("Funtion 5 is running");
    resolve({userLang : "JAVA" , UserId:"92457"});
    }else{
        console.log("Java Error");
        
    }
},1500)
//dekho kya hai is async await jo hai ye erro ko ache ke handle nhi krpata 
//isleye isko try catch block me likhte hai jisse error gracefully handle hojaye

  async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error)
        
    }
    
  }

  consumePromiseFive();
*/
// new cheej dekho
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const show = await response.json()
        console.log(show);
        
    } catch 
    (error) {
        console.log("E:" , error);

    }
    
}
getAllUsers()

// same cheej ko then and catch se likhenge 

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
}).then((data) =>{
    console.log(data)
})
.catch((error)=>{
    console.log("E:" , error)
})