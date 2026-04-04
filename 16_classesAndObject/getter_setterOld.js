function user(email , password){
    this.email = email;
    this.password = password;

    Object.defineProperty(this , 'email' , {
        get : function(){
           return this._email;

        },
        set : function(value){
            this._email = value;

        }
    })

}
const chai = new user("rishit@gmail.com" , "djfks6451fds");
console.log(chai.email);