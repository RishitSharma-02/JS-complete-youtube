// IIfE  immediately invoked function
// (ye wala block IIFE likhne ke liye ) (ye wal execution ke liye )
// kyun krte hai global scope ke pollution se dikkat hoti hai kyi bar so iise bchne ke liye iife 


(function chai(){
    console.log("Chai ready")
})();

((name)=> {
    console.log(`hey user , ${name}`)
})("rishit");

