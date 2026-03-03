// const myNums = [
//     ,1,2,3,4,5
// ];
// const total = myNums.reduce(function (acc , currValur){
//     console.log(`acc ${acc} and currValue ${currValur}`)
//     return acc + currValur;
// }, 0 )
//  // yaha accumulator return hota hai
// console.log(total);

const shoppingCart = [
    {
        item : " kaju Barfi",
        price: 500
    },
    {
        item : "Rasgula",
        price: 100
    },
    {
        item : "Milk cake",
        price: 590
    },
    {
        item : "Gulab jamun",
        price: 650
    },
    {
        item : "Gajar Halwa",
        price: 809
    },
    
]
const total1 = shoppingCart.reduce((acc , item) => {
    return acc + item.price 
} ,0 )
console.log(total1)