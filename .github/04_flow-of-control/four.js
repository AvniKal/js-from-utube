const coding=["js","ruby","python","cpp","java"]

const values= coding.forEach((item) => {      // call back function ka naam nhi hota hai
       console.log(item)
       return item
})

console.log(values)   // forEach koi value return nhi karta h output is undefined   