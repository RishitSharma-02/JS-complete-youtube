class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`UserName: ${this.username}`);
        
    }
   static createId(){ // ab iska access nhi milega sbko 
        return `12548`
    }
}
const hitesh = new User("Hitesh");
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username , email){
        super(username);
        this.email = email
    }
}
const Iphone = new Teacher("Iphone" , "ris@gmail.com");
Iphone.logMe();