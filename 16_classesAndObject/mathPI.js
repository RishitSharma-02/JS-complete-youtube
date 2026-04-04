const discriptor =Object.getOwnPropertyDescriptor(Math , "PI");
console.log(discriptor);

const chai = {
    name : 'ginger Chai',
    Price : 296,
    isAvailable : true
}
console.log(Object.getOwnPropertyDescriptor(chai , "name"))
Object.defineProperty(chai , 'name',{
    writable : false, // mtlb value rewrite nhi ki ja sakti
    enumerable : true // mlb loop lagana false yani ab obj pr loop nhi lagega
})
console.log(Object.getOwnPropertyDescriptor(chai , 'name'));

for (let [key , value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
        
    }
    
}