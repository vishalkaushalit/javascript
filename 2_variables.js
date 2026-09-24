const accountId = 12345
let accountEmail = "demo@gmail.com"
var accountName = "Demo"
accountCity = "Mohali"
let accountState;

/* 
    Prevent to use var because of issue of block scope and functional scope
    Constant value can never be reassigned e.g accountId = 2 is not allowed because 
    it is already declared at the top 
*/

accountEmail = "test@gmail.com"
accountName = "Test"
accountCity = "Chandigarh"

console.log(accountId);

console.table([accountEmail,accountName,accountCity,accountState]);