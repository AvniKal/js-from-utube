const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor)

// console.log(Math.PI)
// Math.PI=5
// console.log(Math.ceil(Math.PI ))


const Chai={
    name:'ginger chai',
    price:250,
    isAvailable:true,

    orderChai: function(){
        console.log("chai nhi bani")
    }
}
console.log(Object.getOwnPropertyDescriptor(Chai,"name"));

Object.defineProperty(Chai,"name",{
    // writable:false,
    enumerable: false // ab name iterate nhi hoga
}) 

for(let [key,value] of Object.entries(Chai)){
    // console.log(`${key}: ${value}`)
    if(typeof value !== 'function')
       console.log(`${key}: ${value}`)
}


// console.log(Object.getOwnPropertyDescriptor(Chai,"name"));
