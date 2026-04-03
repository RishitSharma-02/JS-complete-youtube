let myHero = [
    "thor" , "SpiderMan"
]
let heroPower = {
    thor : "Thuder",
    SpiderMan :"Spidy",

    getsipdyPower : function(){
        console.log(`spidy power is ${this.SpiderMan}`);
        

    }
}
Object.prototype.hitesh = function(){
    console.log(`Rishit is present in all object `);
    
}
// heroPower.hitesh();
myHero.hitesh();
    
Array.prototype.HeyRis = function(){
    console.log(`greeting from Rishit`)
}

const user = {
    name : "chai",
    emailID : "Ris@gmail.com"
}
const Teacher = {
    makeVideo : true
}
const TeachingSupport = {
    isAvailable : false
}
const TAsupport = {
    makeAssignment : 'Js',
    fullTime : true,
    __proto__ :TeachingSupport
}
// old way of prototypal inheritance 

Teacher.__proto__ = user

// new way of prototypal inheritance 

Object.setPrototypeOf(TeachingSupport , Teacher);
// (Kiski proterty , kiske andar)

let anotherUSerNAme = "     Chai Aur Code     "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is : ${this.trim().length}`)

}
anotherUSerNAme.trueLength();
"hitesh".trueLength();
"chai".trueLength(); 