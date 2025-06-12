let myDate= new Date();

console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

//let myCreatedDate= new Date(2023,0,23)
// let myCreatedDate= new Date(2023,0,23,5,3)
// let myCreatedDate= new Date("2023-01-14")
let myCreatedDate= new Date("01-14-2023")

// console.log(myCreatedDate.toLocaleString())

let myTimeStamp= Date.now()       // exact time batate when we want to make quizes, who came first
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())       // convert to milliseconds for comparision
console.log(Math.floor(Date.now()/1000))     // convert to seconds

let newDate=new Date();
console.log(newDate)
console.log(newDate.getMonth()+1)       // jan is 0
console.log(newDate.getDay())

// string interpolation matlab back ticks ` ` 
// ` ${newDate.getMonth()} and the day is ${newDate.getDay()}`


newDate.toLocaleString('default',{
    weekday:"long"
})
