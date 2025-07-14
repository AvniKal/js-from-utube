class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username : ${this.username}`)
    }

    static createId(){    // static saare instances ko iss property ka access dene sei rok deta hai
        return `123`;
    }
}


const avni=new User("avni")
// console.log(avni.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)   // super call is basically this,call
        this.email=email
    }
}
const iphone=new Teacher("iphone","i@phone.com")
iphone.logMe();
// console.log(iphone.createId()); error aayga due to static


