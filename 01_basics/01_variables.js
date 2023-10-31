const accountId = 14453;
let accountEmail = "naman@hmail.com";
var accountPassword = "1234";
accountCity = "Jaipur";

//  accountId = 111;   Not allowed

/*
refer not to use var
because of issue in block scope & function scope
*/

accountEmail = "nn@nn.com"
accountPassword = "88"
accountCity = "Delhi"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity]);