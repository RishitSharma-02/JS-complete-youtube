const promiseOne =new promise(function(resolve , reject){
    // do an async 
    // Db calls , cryptography 
    setTimeout(function(){
        console.log("Async task is complete")
    },1000)
})
// ye ho gya promise creation ab isko conmsume bhi krna hai 

// consume 
promiseOne.then(function(){
    console.log("promise Consumed")
})