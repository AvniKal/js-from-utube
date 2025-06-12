"use strict"; //treat all js code as newer version

// alert( 3+3)   we are using node js, not browser
console.log(3+3)
console.log("avni")

let name="avni"
let age=18
let gameCount=18.3
let isLoggedIn= true
const outsideTemp=null
let userEmail;
const id=Symbol('123');
const anotherId= Symbol('123')
const bigNumber= 34567890123n;

console.log(id===anotherId)

//primitive data types( 7)
// number = 2 to the power 53
// bigint
// string ( double quotes)
// boolean ( true/false)
// null ( standalone value). representation of empty value
// undefine (value is not yet assigned)
// symbol (unique)

// objects

console.log( typeof "hitesh");  //string
console.log(typeof age)    // number
console.log(typeof null)  // object
console.log(typeof undefined) // undefined


// non-primitive/reference
// array, objects/ functions

const heros=["shaktiman","naagraj","doga"]     //array

let myObj={           // object
    name:avni,
    age:18,
}

const myFunction= function(){
    console.log("hello world");
}

// memory
// stack(primitive) , heap(reference type)









