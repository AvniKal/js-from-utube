const coding=["js","ruby","python","cpp","java"]

// method 1
coding.forEach(function (item) {      // call back function ka naam nhi hota hai
       console.log(item)
})

// method 2
coding.forEach((item) => {      // call back function ka naam nhi hota hai
       console.log(item)
})

// method 3
function printMe(item){
    console.log(item)
}
coding.forEach(printMe) // not paranthesis after printMe


coding.forEach((item, index, arr) => {      // call back function ka naam nhi hota hai
       console.log(item, index , arr)
})


const myCoding=[       // list of objects
    {
    languageName:"javascript",
    languageFileName:"js"
    },
    {
    languageName:"java",
    languageFileName:"java"
    },
    {
    languageName:"python",
    languageFileName:"py"
    }

]

myCoding.forEach((item) => {

    console.log(item.languageName)
})


