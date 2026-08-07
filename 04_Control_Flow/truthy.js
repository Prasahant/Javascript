// const userEmail = "pk@gmail.com";

// if (userEmail) {
//   console.log("You have a valid email address.");
// }else {
//   console.log("Please provide a valid email address.");
// }   

//falsy values: false, 0, -0, BigInt On,"", null, undefined, NaN

//truthy values : if falsy values are inside string then it is truthy values("0","false","[]","{}", etc)

// if(userEmail.length==0){
//   console.log("Array is Empty");
// }

// const emptyObj = {}
// if(Object.keys(emptyObj).length==0){
//   console.log("Object is empty");
// }

// console.log(false==0);// true
// console.log(false=="");//true
// console.log(0=="");//true


// //Nullish Coalescing Operator (??)


// console.log(0 || 100);   // 100
// console.log(0 ?? 100);   // 0

// console.log("" || "Hello");   // Hello
// console.log("" ?? "Hello");   // ""


let val1;
val1 = 1 ?? 10
console.log(val1);

let val2;
val2 = null ?? 10
console.log(val2);

let val3;
val3 = undefined ?? 15
console.log(val3);

let val4;
val4 = undefined ?? 12 ?? 10
console.log(val4);

// Ternary (Conditional) Operator (? :)
let age = 18;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);

