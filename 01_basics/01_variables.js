const accountId = 1445533
let accountEmail = "abdulmoeedkhan298@gmail.com"
var accountPassward = "12345"
accountCity = "Rawalpindi"
let accountState;
// accountId = 2   not allowed

accountEmail = "hc@hc.com"
accountPassward = "2020202020"
accountCity = "Islamabad"


console.log(accountId);
/*
Prefer not to use "var"
because of issue in block scope and functional scope
*/

//console second table
console.table([accountId, accountEmail, accountPassward, accountCity, accountState])
