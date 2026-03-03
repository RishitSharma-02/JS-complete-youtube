const coding = ["java" , "js" , "python" , "anaconda"];
const values = coding.forEach((item)=>{
    console.log(item)

})// ye koi value return nhi krta
// console.log(values);

//so values return krne ke ;iye 
const myNums = [
    1,2,3,4,5,6,7,8,9,10
];
// ye hmko values wapas karega for each nhi krta 
const collect = myNums.filter((nums) => nums > 4 && nums < 9 );
console.log(collect);

const newNums =[
 
];
myNums.forEach((num) =>
{
    if(num > 4){
        newNums.push(num);
    } 
})
console.log(newNums);