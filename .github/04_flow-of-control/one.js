if(2=="2"){
    console.log("executed 1")
}

if(2==="2"){
    console.log("executed 2")
}

// !== (checks along with data type)


const temp=41
if(temp<50){
    let power="fly"
    var okay="don't fly"
    console.log(`executed 3 , ${power}`)
    console.log(`executed 3 , ${okay}`)
} else{
    console.log("temp greater than 50")
}
// console.log(`executed 3 , ${power}`)    // scope of power is not outside if
console.log(`executed 3 , ${okay}`)     // scope of 'okay' is  outside if coz var is used

if(temp>50) console.llog("executed 4");   // use semicolon

// same way use else if like we do in c++



