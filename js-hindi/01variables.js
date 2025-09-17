const accountId = 1233
let accountEmail = "shaswatyadav@gmail.com"
let  accountPassword = "1234"
let accountcity = "Lucknow"
let accountState;

//accountId = 2 // not allowed

/*
prefer not to use var
because of issue in block scope and functional scope
 */


console.log("accountId");

accountEmail = "shaswat@com"
accountPassword= "1234"
accountCity = "kolkata"
console.table([accountEmail,accountId,accountPassword,accountcity,accountState])


