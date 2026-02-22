const user =// this current contxt ki baat krta hai 
{
    username :"ritesh",
    price : 55465,

    welcome : function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
        
    },

}
// user.welcome();
// user.username ="smir";
// user.welcome();

/*
function coffe (){ // functions ke andar aa kr hm this use nhi kr sakte is tarah 
    let coffename = "NEstle"
    console.log(this.coffename)
}
coffe();
*/
 // ARROW function dekho
/*
const coffe = function (){ 

    let coffename = "NEstle"
    console.log(this.coffename)
}
coffe();
*/
//changes // arrows func me bhi this define nhi hai
const coffe = () => {
    let coffename = "nastle"
    console.log(this);
}
coffe()

// const addkro = (num1 , num2)=> {
//     return num1 + num2;
// }

const addkro = (num1 , num2) => num1+num2; // implicit return only for one line statement 
// ya aise kr do 
const subkro = (num1 , num2 ) => (num1+num2) 
console.log(addkro(5,5))