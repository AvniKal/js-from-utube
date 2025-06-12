const name="avni"
const repoCount=1


// console.log(name + repoCount + " value")
console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName= new String("avni-is")
console.log(gameName[0])
console.log(gameName.__proto__)     // 2 underscore each
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString= gameName.substring(0,4)
console.log(newString)

const anotherString= gameName.slice(-4,7)
console.log(anotherString)

const newStringOne="   avni   "
console.log(newStringOne.trim())

const url="https//:google.com"
console.log(url.replace('tp','-'))
console.log(url.includes('avni'))
console.log(url.split('o'))

