//ES6
class user{
    constructor(userNm , email , pass){
        this.userNm = userNm;
        this.email - email;
        this.pass = pass
    }
    encryptPassword(){
        return `${this.pass}pqr##`
    }
    ChngNm (){
        return`${this.userNm.toUpperCase()}`
    }
    
}
const chai = new user("Rishit " , "ris@gmail" , "879452")
console.log(chai.encryptPassword());
console.log(chai.ChngNm());

//behind the secen kya ho rha hoga 

function USer(UserName , email , password){
    this.UserName = UserName;
    this.email = email;
    this.password = password;
}
USer.prototype.encryptPassword2 = function(){
    return`${this.password}pqr##`
}
const tea = new user("Risha " , "ris@gmail" , "879452")
console.log(tea.encryptPassword());
console.log(tea.ChngNm());