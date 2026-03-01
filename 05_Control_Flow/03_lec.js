// high order loops
// 
const arr = [1 ,2 ,3 ,4];
// for of loop  ye lagega objects pr , strings , array , and many more ...
for (const element of arr) {
    // console.log(element);
}
// maps 
const map = new Map();
map.set ('IN' , "India")
map.set('USA' , "America");
map.set('BAN' , "Bangladesh")
for (const [key , value] of map) {
    console.log(`${key} :- ${value}`)
}

const myObj = {
    game1 : "free fire ",
    game2 : "hill climbing ",
    game3  : "subeway suffer "


}
for (const key in myObj) {
    console.log(`${key} is for ${myObj[key]}`);

}

const arr2 = ["js" , "cpp" , "ruby"];
for (const key in arr2) {
    console.log(key)    
}
// imp observation for of me value utha raha tha and forin me key utha rha hai 
// key in array reffer to indexing position 

for (const key in arr2) {
    console.log(arr2[key])
    
}
//object keliye forin
//arrays ke andar forof

// for each loop 
const coding = [ "js" , "python " , "ruby" , "rust"];
coding.forEach()