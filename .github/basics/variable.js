const accountId= 144553
let accountEmail="hitesh@google.com"
var accountPassword="12345"
accountCity="jaipur"
let accountState;

//  accountId=2 mot allowed
accountEmail="hdf2@gmail.com"
accountPassword="2"
accountCity="bengaluru"

// prefer not to use var because of issue in block scope and functional scope

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])