function saymyName(){
    console.log("H")
    console.log("i")
    console.log("t")
    console.log("e")
    console.log("s")
    console.log("H")
}
// saymyName //just a reference , not a function call
saymyName()


// function addTwoNumbers(number1, number2){
//    console.log(number1+number2)
// }
// const result=addTwoNumbers(3,4)
// console.log(result)



function addTwoNumbers(number1, number2){
    // let result=number1+number2
    // return result
    return number1+number2
}
const result=addTwoNumbers(3,4)
console.log(result)

function loginUserMessage(username="sam"){    // default is sam
    if(!username){
        console.log("pls enter a username")
        return
    }
    return `${username} is loggedin`
}
// console.log(loginUserMessage("dhruv"))
console.log(loginUserMessage())   // undefined


