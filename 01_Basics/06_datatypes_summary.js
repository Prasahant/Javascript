//premetive data types in JavaScript
let name = "Alice";      // String
console.log(typeof name); 
let age = 25;            // Number
console.log(typeof age);
let isStudent = true;    // Boolean
console.log(typeof isStudent);
let score;               // Undefined
console.log(typeof score);
let value = null;        // Null
console.log(typeof value);
let id = Symbol("id");   // Symbol
console.log(typeof id);
let big = 9007199254740991n; // BigInt
console.log(typeof big);

//non-premetive data types in JavaScript
let person = {
  name: "John",
  age: 30
};
console.log(person);
console.log(typeof person);


const colors = ["Red", "Green", "Blue"];
console.log(colors);
console.log(typeof colors);




function greet() {
  console.log("Hello!");
}
greet();
console.log(typeof greet);
