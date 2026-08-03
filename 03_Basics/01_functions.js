// function greet() {
//     console.log("Hello, World!");
// }

// greet();


// function greet(name) { // parameterized function
//     console.log("Hello, " + name);
// }

// greet("Alice");
// greet("Bob");


// function add(a, b) { // function with return value
//     return a + b;
// }

// let result = add(5, 3);
// console.log(result);

// const multiply = function(a,  b) {//function expression
//     return a * b;
//     //after return statement, no code will be executed
// };

// console.log(multiply(4, 5));

// function loginUserMessage(username){
//     if(username === undefined){
//         return "Please provide a username.";
//     }
//     return `Welcome back, ${username}!`;
// }
// console.log(loginUserMessage()); // username is undefined
// console.log(loginUserMessage("Alice"));



// function loginUserMessage1(username){
//     if(!username){
//         return "Please provide a username.";
//     }
//     return `Welcome back, ${username}!`;
// }

// console.log(loginUserMessage1()); // username is undefined


// function greet(name = "Guest") {
//     console.log("Hello, " + name);
// }

// greet();
// greet("John");


function calculateCarPrice(...num1){
return num1 ;
}

console.log(calculateCarPrice(100,300,500,900,100)); 


function calculateCarPrice1(val1, val2,...num1){
return num1 ;
}

console.log(calculateCarPrice1(100,300,500,900,100)); 


//Passing object into function
const user1 = {
    name: "Alice",
    age: 25,
    email: "alice@example.com"
};

function handleObject(anyObject) {
    console.log(`Name: ${anyObject.name}, Age: ${anyObject.age}, Email: ${anyObject.email}`);
}

//handleObject(user1);
handleObject({
    name: "Bob",
    age: 30,
    email: "bob@example.com"    
})



const myNewArray = [1, 2, 3, 4, 5];

function returnSecondElement(getArray) {
    return getArray[1];
}

//console.log(returnSecondElement(myNewArray)); // Output: 2

console.log(returnSecondElement([10, 20, 30, 40, 50])); // Output: 20