// array
const myArr1=[0,1,2,3,4,true,"avni"]
const myArr=[0,1,2,3,4]
const myHeros=["shaktiman","cinderella"]

const myArr2= new Array(1,2,3,4)
console.log(myArr[1])

// array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)    // inserts value at the start
myArr.shift()       // removes element at the start

console.log(myArr.includes(9))
console.log(myArr.indexOf(19))

const newArr=myArr.join()
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)

// slice,splice

console.log("A", myArr)
const myn1=myArr.slice(1,3)    // original array not manipulated and range not included
console.log(myn1)
console.log("B",myArr)

const myn2=myArr.splice(1,3)    // original array manipulated and range included
console.log("C", myArr)
console.log(myn2)





