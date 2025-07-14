function setUserName(username){
    //complex DB
    this.username=username;
    
    console.log("called");
}

function createUser(username,email,password){
    // setUserName(username); // bas reference gaya h call nhi hua h
    setUserName.call(this,username); // reference hold karke rakhna hai
    // here this is current contect given to function
    // call apna current execution context kisi aur ko paas kar deta h
    
    this.email=email;
    this.password=password;

}

const chai=new createUser("chai","chai@123","123")
console.log(chai); 