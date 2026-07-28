let score = "43abc"
console.log(score)
console.log(typeof(score))

let valueInNumber = Number(score) //convert string to number
console.log(valueInNumber) //print NaN => Not a Number
console.log(typeof valueInNumber) //number

// "33" => 33 number
// "33abc" => NaN
//true => 1
//undefined => NaN
//null => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn) //convert number to boolean
console.log(booleanIsLoggedIn) //true
console.log(typeof booleanIsLoggedIn) //boolean


let sumNumber = 34
let stringSumNumber = String(sumNumber) //convert number to string
console.log(stringSumNumber) //34
console.log(typeof stringSumNumber) //string