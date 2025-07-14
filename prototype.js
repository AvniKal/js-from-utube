function createUser(username,score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++;
}
createUser.prototype.printMe= function(){
    console.log(`price is ${this.score}`)
}
// jis matlab this // jisne bhi bulaya h

const chai=new createUser("chai",25)
const tea=createUser("tea",250)
// new keyword nhi lagayenge toh code nhi chalega

// myArr.map()
chai.printMe()


// behind scenes- new keyword
/* Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.   */




let myHeros=["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
         console.log(`spidy power is ${this.spiderman}`)
    }
}
Objects.prototype.avni=function(){
       console.log(`avni is present in all objects`)
}
Array.prototype.heyavni=function(){
       console.log(`avni says hello`)
}



// heroPower.avni()
myHeros.heyavniavni()   // will not run coz it is object not array
heroPower.heyavni() // this will run



// Inheritance
const user={
    name:"chai",
    email:"chai@google.com"
}
const Teacher={
    makeVideo:true
}
const teachingSupport={
    isAvailable:false
}
const TASupport={
      makeAssignmnent:'JS assignmnet',
      fullTime: true,
      __proto__: teachingSupport
}
Teacher.__proto__=user   // prototypal inheritance
// user ka properties teacher m aa jayga


// modern syntax
Object.setPrototypeOf(teachingSupport,Teacher)

 

let myName="hitesh   "
console.log(myName.trueLength)

String.prototype.trueLength= function(){
       console.log(`${this}`)
       console.log(`${this.name}`)
       console.log(`true length is ${this.trim().length()}`)
}   
myName.trueLength() 


"avni".trueLength()
"icetea".trueLength()





