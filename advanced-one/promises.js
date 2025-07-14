// exmaple 1
const promiseOne = new Promise(function(resolve,reject){
    // do an async task
    // DB calls, cryptography, network call
    setTimeout(function(){
        console.log('async task is completed ');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed")
})


// exmaple 2
new Promise(function(resolve,reject){
    setTimeout(function(){
    console.log("async task 2")
    resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved")
})



// example 3
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"chai",email:"chai@example.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})


// example 4
const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:'avni',password:"123"})
        }  else{
            reject('ERROR:something went wrong')
        }
    },1000)
})

promiseFour
.then((user) => {
     console.log(user);
     return user.username
})
.then((username) => {
      console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("the promise is either resolved or rejected"))


// example 5
const promiseFive=new Promise(function(resolve,reject){
     setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:'javascript',password:"123"})
        }  else{
            reject('ERROR:JS went wrong')
        }
    },1000)
})


async function consumePromiseFive(){
    try{ 
    const response=await promiseFive;
     console.log(response)
     }
     catch(error){
         console.log(error)
     }
}

consumePromiseFive()




async function getAllUsers(){
    try{
    const response= await fetch('https://jsonplaceholder.typicode.com/users')  // array of users
    // db sei data aare toh time lagega so use await
    //console.log(response)
    const data=await response.json()    // string to json
     // response.json m bhi time lagta h
    console.log(data);
    } catch(error){
        console.log("E:",error)
    }
}

// getAllUsers()

// fetch is also a promise
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))







