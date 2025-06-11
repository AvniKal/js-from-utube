let score= "33abc" // NaN
// let score= null // 0
// let score= true // 1
// let score= undefined // NaN
// let score= "33" // 33


console.log( typeof score);
console.log( typeof(score));

let valueInNumber= Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let isLoggedIn= 1
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log( booleanIsLoggedIn);

// 1- true
// 0- false
// ""-false // empty
// "hitesh"-true


let someNumber=33
let stringNumber= String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

//avoid these comparision
console.log(null>0)
console.log(null==0)
console.log(null>=0)

console.log(undefined<0)
console.log(undefined==0)
console.log(undefined>=0)

console.log("2">1)
console.log("02">1)

// === (strictly checks values along with data type)
console.log("2"==2)
console.log("2"===2)


















