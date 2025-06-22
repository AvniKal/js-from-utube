const coding=["js","ruby","python","cpp","java"]

const values= coding.forEach((item) => {      // call back function ka naam nhi hota hai
       console.log(item)
       return item
})

console.log(values)   // forEach koi value return nhi karta h output is undefined   





const myNums=[1,2,3,4,5,6,7,8,9,10]

const newNums1= myNums.filter((num) => num>4)
console.log(newNums1)    // filter terturn karta h unlike forEach

const newNums= myNums.filter((num) => {
    return num>4
})

const arr=[]
newNums.forEach((num) =>{
    if(num>4)
        arr.push(num)
})
console.log(arr)






// const userBooks = books.filter( (bk) => bk.genre==="history"). // bk is array of objects

