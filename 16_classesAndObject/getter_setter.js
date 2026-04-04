class USer{
    constructor(email , password){
        this.email = email,
        this.password = password
    }
    // getter hogya to setter bhi hoga hi dono hogahi kbhi bhi ek akela nhi hoga 
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){ // set yani data base me kaise set hoga 
        this._password = value
        // agar hm value.toUpperCAse kiya to ye set bhi upper case me hoga 
    }
    // agar hm log this.password hi likhe to ek error ayega ( Maximum call stack size exceeded) to isse bache ke liye kya kare hm 
    // hmloga naya variable de dete hai this._password

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }
}
const Hitesh = new USer("h@hiti.com" , "faadsgf");
console.log(Hitesh.password)
console.log(Hitesh.email);