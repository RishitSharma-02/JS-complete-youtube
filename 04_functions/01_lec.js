function addTwoNum (number1 , number2){
    console.log(number1 + number2);
}
addTwoNum(99,99);

function subTwoNum (number1 ,number2)
{
    return number1-number2;

}
const result = subTwoNum(58,6);
console.log(`result : ${result}`);

function loginUserMessage(username ){
    if(username === undefined){
        console.log("plz enter a user name ");
        return;

    }
    return `${username} just loggedIn`
}
console.log(loginUserMessage("popop"))

function calculateCartPrice(...num){
    return num
}
console.log(calculateCartPrice(200,300,587,5695,5887));

const user1 ={
    name : "dknflk",
    email:"usjdelk@qljenf",
    age : 35
}
function handleObj(anyObj){
    console.log(`user name is ${anyObj.name} , and age is ${anyObj.age}`);
}
handleObj(user1);

