const accountID = 12542;
let accountEmail = "pashant@gmail.com";
var accountPassword = "12345";
accountCity = "New York";

let accState; //it will give undefined because we have not assigned any value in it yet.


//accountID = 12345; //Value cannot be reassigned.

accountEmail = "hiteshchoudhary@gmail.com"; //Value can be reassigned.
accountPassword = "54321"; /*Value can be reassigned but not recommended to use var 
beacuse it is function scoped and can lead to bugs in large applications.*/
accountCity = "Los Angeles"; //Value can be reassigned.


console.log(accountID);
console.table([accountID, accountEmail, accountPassword, accountCity, accState]);


