class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get email(){   
        return this._email.toUpperCase();
    }
    set email(value){     // competes with the constructor to succeed
        this._email=value;
    }

    get password(){
        //return this._password.toUpperCase()
        return `${this._password} hitesh`;
    }
    set password(value){
          this._password  = value;
    }
    
}

const avni=new User("avni@gmail.com","abc")
console.log(avni.password);
console.log(avni.email);


