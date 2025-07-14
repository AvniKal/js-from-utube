// ES6
// synctatical sugar

class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase}`
    }
}

const chai= new User("chai","chai@gmail.com","123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername())








// behind the scene

function User(username,email,password){
     this.username=username;
     this.email=email;
     this.password=password;
}

user1.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
user1.prototype.encryptPassword=function(){
    return `${this.username.toUpperCase}`
}
const tea=new User("tea","tea@gmail.com","123")

console.log(tea.encryptPassword());
console.log(tea.password());





