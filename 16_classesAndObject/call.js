
// ab padhenge ca;; and bind ke bare me 
// problem phle ye hai ki dekh agar kisi function ke andar ek 
// aur function call ho to 
function setUSer(username){
    this.username = username;
    console.log("Called");
    
}

function createUSer (username , email , password) {
    // setUSer(username);
     // ye aise call to hua lekin iska jo execution context bna hoga wo iss function tk atte atte hata diya gaya hoga iss leye ye user name nhi dega 
    // isko hold krke rkhne ke liye hmme explicitly batana padega ki isko call karo

    setUSer.call(this,username);
    //abhi bhi ye(setUSer.call(username); kaam nhi karega isko hmme upar wale ka context hata kr iss function ka context dena hoga wo aise hoga 
    // setUSer.call(this ,username);



this.email = email;
this.password = password;

}

const chai = new createUSer("chai" , "chai@fb" , "12545");
console.log(chai);
              