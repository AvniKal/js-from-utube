// object function
const user1={
    username:'hitesh',
    loginCount:8,
    signedIn:true,

    getUserDetails: function(){
        // console.log("got user details from database")
        console.log(`username: ${this.username}`);
        console.log(this) //user1 
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this)    // empty string- global context

const user2={
    username:'hitesh',
    loginCount:8,
    signedIn:true,

    getUserDetails: function(){
        // console.log("got user details from database")
        console.log(`username: ${this.username}`);
        console.log(this) //user 
    }
}

// new keyword is a constructor function
// it allows us to make multiple instances from one object
// makes new executional context

function User(username, loginCount, isLoggedIn){   // constructor
    this.username= username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    this.greeting=function(){
        console.log(`welcome ${this.username}`)
    }

    return this;  // ab ye object return ho jayega
    // by default return ho jaata h vaise bhi
}
const userOne=new User('avni',20,true)
const userTwo=new User('dhruv',35,true)

console.log(userOne.constructor);   // values overwrite ho rha h so we use 'new' keyword
console.log(userTwo); 

// new keyword sei empty object create ho jaata h jisko instance bolte hai
// ek constructor function call hota hai new keyword ke karan
// ye func saare arguments ko pack karta hai 















