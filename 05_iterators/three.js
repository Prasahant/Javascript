// //for of loop

// let fruits = ["Apple", "Banana", "Mango"];

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// console.log("\n");

// let numbers = [10, 20, 30, 40];

// for (let num of numbers) {
//     console.log(num);
// }

// console.log("\n");


// let numbers1 = [10, 20, 30, 40];

// for (let num1 of numbers1) {
//     console.log(num1);
// }


// const greetings = "hello world!"
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`)
// }


// //for in loop
// let student = {
//     name: "Prashant",
//     age: 21,
//     course: "CSE"
// };

// for (let key in student) {
//     console.log(key);
// }

// console.log("\n");

// let employee = {
//     name: "Prashant",
//     age: 21
// };

// for (let key in employee) {
//     console.log(key,employee [key]);
// }

// console.log("\n");

// let arr = ["A", "B", "C"];

// for (let index in arr) {
//     console.log(index, arr[index]);
// }

// //forEach
// let numbers = [10, 20, 30, 40];

// numbers.forEach(function(num) {
//     console.log(num);
// });

// console.log("\n");

// //arrow function

// numbers.forEach((num) => {
//     console.log(num);
// });


// //map
// let numbers = [1, 2, 3, 4];

// let result = numbers.map((num) => {
//     return num * 2;
// });

// console.log(result);

// console.log("\n");

// let names = ["prashant", "rahul", "amit"];

// let result = names.map((name) => {
//     return name.toUpperCase();
// });

// console.log(result);

console.log("\n");

const map = new Map();
map.set('IN',"INDIA");
map.set('USA',"UNITED STATES OF AMERICA");
map.set('FR', "FRANCE");

console.log(map);

for(const [key, value] of map){
    console.log(key,':-',value);
}
//object never allow iteration directly
// const myObject = {
//     game1:'Pubg',
//     game2:'scout'
// }
// for(const [key, value] of myObject){
//     console.log(key,':-',value);
// }