const accountId = 13455
let accountEmail = "shaswat@gmail.com"
var accountPassword = "1234"
accountCity = "Lucknow"
let accountState;

// accountId = 2 // not allowed

accountEmail = "shas@gmail.com"
accountPassword = "354"
accountCity = "Delhi"

console.log(accountId);


/*
Prefer not to use to var
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])