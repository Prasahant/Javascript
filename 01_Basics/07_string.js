// const name="Prashant";
// const age=21;

// //console.log(name+age+" is a good boy");


// console.log(`My name is ${name.toUpperCase()} and I am ${age} years old.`);// this is the better way to concatenate string and variable in js. This is called template literals.

// const gameName= new String("Cricket");
// // console.log(gameName[0]); // C
// // console.log(gameName.length); // 7
// console.log(gameName.__proto__); // String {constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, bold: ƒ, …}
// console.log(gameName.charAt(4)); // i

// console.log(gameName.indexOf("c")); // 4

// console.log(gameName.substring(0, 3)); // Cri

// const anotherString = gameName.slice(-7,-4)
// console.log(anotherString);// Cri


const newstring = "   Hello World!   ";
console.log(newstring.trimStart()); // "Hello World!   "


const url = "https://stunning-yodel-jjg77q6j6qg5cgwv.github98dev/";
console.log(url.replace("98", ".")); // "https://stunning-yodel-jjg77q6j6qg5cgwv.github.dev/"

console.log(url.includes("example")); // true

let str = "HelloWorld!";
console.log(str.split("-")); // ["HelloWorld!"]