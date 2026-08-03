
// if(true){
//     let a=10; 
//     const b=20;
//     var c=30;
//     console.log("Inner: ",a);//10
//     console.log("Inner: ",b);//20
//     console.log("Inner: ",c);//30

// }
// console.log(a);//ReferenceError: a is not defined beacause a is block scoped
// console.log(b);//ReferenceError: b is not defined beacause b is block scoped. 
// console.log(c);//30 because c is function scoped and not block scoped.









// //Global Scope: Provide default values for parameters.
// let name = "Prashant";

// function greet() {
//     console.log(name);
// }

// greet();
// console.log(name);

// //Function Scope: Provide default values for parameters.
// function greet1() {
//     let name = "John";
//     console.log(name);
// }

// greet1();
// console.log(name);

//Block Scope: Provide default values for parameters.
// if (true) {
//     let name = "Alice";
//     console.log("inner ",name);
// }
// console.log("outer ",name);

//window scope: Provide default values for parameters.

// let age = 21;
// const city = "Delhi";

// console.log(window.age);
// console.log(window.city);


//nested Scopes: Provide default values for parameters.

function one(){
    const username = "Prashant";
    function two(){
        const age = 21;
        console.log(username);
        
    }
    //console.log(age);//ReferenceError: age is not defined because age is function scoped and not block scoped.
    two();
}
//one();    


if(true){

    const username="prashant";
    
    if(username=="prashant"){
        const city = "Delhi";
        console.log(username + " " + city);
    }   
    //console.log(city);//ReferenceError: city is not defined because city is block scoped and not function scoped.
}

//console.log(username);//ReferenceError: username is not defined because username is block scoped and not function scoped.

//++++++++++++++++++++interesting+++++++++++++++++++
function addone(num){
    return num + 1;
}

console.log(addone(5));//6

//console.log(addtwo(5));//ReferenceError: addtwo is not defined because addtwo is function expression and not function declaration.
const addtwo = function(num){
    return num + 2;
}
console.log(addtwo(5));//7


