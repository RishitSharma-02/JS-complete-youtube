// date
let myDate = new Date()
// console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof(myDate));

let myCreatedDate = new Date("02-03-2026")
console.log(myCreatedDate.toString());


// new Date ("YYYY-MM-DD") or Date("MM-DD-YYYY")

let myTimeStamps = Date.now() //(give mili-sec to convert into sec use- /1000 )
console.log(myTimeStamps);
console.log(myCreatedDate.getTime());

let nDate = new Date();

//Imp

nDate.toLocaleString('default',{
    weekday: "long"
})