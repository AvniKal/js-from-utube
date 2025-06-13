// singleton
// object.create     // constructore method ke through singleton hi banta hai


// object literals

const mySym= Symbol("key1")

const jsUser={
    name:"avni",
    "full name": "mahi agarwal",
    // mySym : "key1"    // galat way kyuki symbol datatype nhi dikhata h
    [mySym]:"myKey1",    // syntax for key to be Symbol data type
    age:21,
    location: "West Bengal",
    email: "avni__2@gmail.com",
    isLoggedIn : false,
    lastLoginDays=["monday","saturday"]
    
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log( jsUSer["full name"])
console.log( jsUSer[mySym])

jsUser.email="avni@chatgpt.com"
// Object.freeze(jsUser)     // ab koi change propagate nhi hoga 

jsUser.greeting= function(){
    console.log("hello js user")
}
jsUser.greetingTwo= function(){
    console.log(`hello js user, ${this.name}`)    // 'this' is used to refer to same object 
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
