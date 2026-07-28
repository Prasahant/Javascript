let score = "43abc"
// console.log(score)
// console.log(typeof(score))

let valueInNumber = Number(score) //convert string to number
// console.log(valueInNumber) //print NaN => Not a Number
// console.log(typeof valueInNumber) //number

// "33" => 33 number
// "33abc" => NaN
//true => 1
//undefined => NaN
//null => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn) //convert number to boolean
// console.log(booleanIsLoggedIn) //true
// console.log(typeof booleanIsLoggedIn) //boolean


let sumNumber = 34
let stringSumNumber = String(sumNumber) //convert number to string
// console.log(stringSumNumber) //34
// console.log(typeof stringSumNumber) //string

/*********************Operations*************/
let value =3 
let negVlaue = -value

// console.log(negVlaue);

// console.log(2+2); //4
// console.log(2-2);//0
// console.log(2*2);//4
// console.log(2/2);//1
// console.log(2%3);//2
// console.log(2**3);//8 => 2*2*2


let str1 = "Prashant"
let str2 = "Kumar"
// console.log(str1 + str2) //PrashantKumar

// console.log("1"+2+2) //122 => 1 is string so 2 is converted to string and then concatenated

console.log(+true) //1 => true is converted to number
console.log(+false) //0 => false is converted to number
console.log(+"") //0 => empty string is converted to number

let gameScore = 100
console.log(gameScore++) //100 => first print then increment (post increment)
console.log(++gameScore) //102 => first increment then print (pre increment)
