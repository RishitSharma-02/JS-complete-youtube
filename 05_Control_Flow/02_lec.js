// for
for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(element);    
}

for (let i = 0; i < 10 ; i++) {
    // console.log(`outer loop is running for i : ${i}`)
    for(let j = 0 ; j < i ; j++){
        // console.log(`inner loop is runnig for j : ${j}`)

    }
    
}
let myArr = ["flash" , "supperman" , "batman"]
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
    
}
// break and continue 

for(let i = 1 ; i<=20 ; i++){
    if(i == 13){
        continue;
    }
    // console.log(i);
}
for (let index = 0; index < 20 ; index++) {
    if(index == 5){
        console.log(`lucky number ${index} is detected`);
        break;
    }
    // console.log(index);
    
}

// while loop 
let index = 0;
while (index <10){
    console.log(index);
    index++;

}

// // do while
let score = 55;
do{
    score = score-1;
    console.log(`1 point deducted point is ${score}`)
}while(score > 45)

    
