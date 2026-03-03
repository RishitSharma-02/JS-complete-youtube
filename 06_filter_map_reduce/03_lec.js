const myNums = [
    1,2,3,4,5,6,7,8,9,10
];
const newN = myNums.map((nums) => {
    return nums+10
});
console.log(newN);

// chaining dekhle
const new2 = myNums
                    .map((num) => num + 2 )
                    .map((nums) => nums*2)
                    .filter((num) => num > 14 && num< 22)
console.log(new2);