class User {
    constructor(userName){
        this.userName = userName;  
    }
    logMe (){
        console.log(`userNAME is ${this.userName}`);
    }
}
class Teacher extends User {
    constructor(username , email , password){
        super(username)
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course was added ${this.username}`)
    }

}
const chai =new  Teacher("Rish" ,"ris@gmail." , "45312")
chai.addCourse()