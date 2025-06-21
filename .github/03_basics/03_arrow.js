const user={
    user:"hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , this is my website`);  // this is used to refer to current context
        console.log(this)   // current context print hoga
    }
}


// user.welcomeMessage()
// user.username="avni"
// user.welcomeMessage()

console.log(this)    // in node environment context empty object hai
// browser ke andar jo global object hai woh hai window object

function chai(){
        let username="avni";
        // console.log(this);   // bahut sara objects aa jaata h
        console.log(this.username) // undefined // functions ke andar this nhi kaam aata bas object ke andar
}
chai()


const chai=function(){      // other way to declare function
       let username="avni";
       console.log(this.username)  
}


const chai= ()  =>  {      // other way to declare function  // arrow function
       let username="avni";
       console.log(this.username)    // undefined
       // console.log(this);   // bahut sara objects aa jaata h
}


const addTwo1=(num1,num2) => {
       return num1+num2;
}
console.log(addTwo1(3,5))

// const addTwo=(num1,num2) => num1+num2;
// const addTwo=(num1,num2) => (num1+num2);  // implicit return // curly bractets aur return hara dono and write in one line
                                                                //   aur function keyword bhi hata do
const addTwo=(num1,num2) => ({username:"avni"});     // return object

console.log(addTwo(3,5));

// const myArray=[2,5,3,7,8];
// myArray.forEach(function() {})
// myArray.forEach(() => {})






