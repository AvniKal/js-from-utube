const mail="a@gmail.com"

if(mail){
    console.log("user email exists")
}  else{
     console.log("user email does not exist")
}

// falsy values
// false, 0, -0 , BigInt 0n , ""(empty string), null, undefined , NaN


// thruthy values
// "0", 'false' , " ", [],{} , function(){}

const Usermail=[]        // for array
if(Usermail.length === 0){
    console.log("user email empty")
}

const empObj={}     // for array
if(Object.keys(empObj).length === 0){
    console.log("object empty")
}
