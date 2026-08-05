//Immediately Invoked Function Expression (IIFE) 
 //example of IIFE
(function() {
    console.log("This is an IIFE");
})();

//IIFE with parameters
(function(name) {
    console.log("Hello " + name);
})("John");

//IIFE with return value
var result = (function(a, b) {
    return a + b;
})(5, 10);

console.log(result); // Output: 15

( ()=>{
    console.log("This is an arrow function IIFE");
})();

((name)=>{
    console.log(`My name is ${name}`);
})("Alice");// output: My name is Alice


