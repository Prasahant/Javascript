// // conditional operators

// //1. comparison operators

// let a = 10;
// let b = 20;

// console.log(a > b);   // false
// console.log(a < b);   // true
// console.log(a == 10); // true
// console.log(a === "10"); // false

// //2. Logical operators
// //logical AND(&&)

// let age = 20;
// let hasLicense = true;

// if (age >= 18 && hasLicense) {
//     console.log("You can drive");
// }

// //logical OR (||)

// let age = 20;

// if (age >= 18 || age < 65) {
//   console.log("You are an adult.");
// }

// //Logical NOT (!)
// let isLoggedIn = false;

// console.log(!isLoggedIn);


// //Ternary (Conditional) Operator (? :)

// //Sysntax : condition ? expression1 : expression2;

// let age = 18;

// let result = age >= 18 ? "Adult" : "Minor";

// console.log(result);

// //Nullish Coalescing Operator (??)
// console.log(0 || 100);   // 100
// console.log(0 ?? 100);   // 0

// console.log("" || "Hello");   // Hello
// console.log("" ?? "Hello");   // ""

// //Optional Chaining (?.)
// const user = {
//     name: "Prashant"
// };

// console.log(user.address?.city);


// //if...else statement
// let age = 16;

// if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Minor");
// }



// const balance = 1000;
// if(balance >= 500) console.log("You can make a purchase");

//if ...else if...else statement
// let marks = 75;

// if (marks >= 90) {
//   console.log("Grade A");
// } else if (marks >= 70) {
//   console.log("Grade B");
// } else {
//   console.log("Grade C");
// }

//multiple if statements
// let marks = 85;
// if (marks >= 90) {
//   console.log("Grade A");
// }
// if (marks >= 70) {
//   console.log("Grade B");
// }
// if (marks < 70) {
//   console.log("Grade C");
// }   


// if(2==2){
//     console.log("first");
// }
// if(2==3){
//     console.log("second");
// }
// if(2=="4"){
//     console.log("third");
// }
// if(2==="3"){
//     console.log("fourth");
// }
// if(2===2){
//     console.log("fifth");
// }
// if(2=="2"){
//     console.log("sixth");
// }
// if(2==="2"){
//     console.log("seventh");
// }

