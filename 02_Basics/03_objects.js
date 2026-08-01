// singleton definition:- means only one instance (one object) of something exists throughout your application.
 

const mySymbol = Symbol("mySymbol");

const user1 = {
    name: "Prashant",
    [mySymbol]: "mysymbol",
    "full name": "Prashant Kumar",
    age: 21,
    location: "India",
    email: "prashant@example.com",
    isLoggedIn: false,
    LastLogin:["Monday", "Tuesday", "Wednesday"]
};

// console.log(user1["email"]); // accessing the property using bracket notation

// //another method to access the property is using dot notation

// console.log(user1.name); // accessing the property using dot notation

// console.log(user1["full name"]); // this will give an error because of the space in the property name.
// //  To access such properties, you must use bracket notation.    
// console.log(user1["full name"]); // accessing the property using bracket notation

// console.log(user1[mySymbol]); // accessing the property using symbol(mysymbol)

// //update

// user1.email = "newemail@example.com";
// console.log(user1.email); // accessing the updated property using dot notation(newemail@example.com)

// Object.freeze(user1); // this will freeze the object and you can't update the properties of the object.

// user1.email = "anotheremail@example.com"; // this will not update the email property because the object is frozen.
// console.log(user1.email); // accessing the email property using dot notation(newemail@example.com)

// console.log(user1)


/*******function***** */

user1.greetings = function() {
    console.log(`Hello ${this.name} welcome to the application`);
}

console.log(user1.greetings()); // calling the function using dot notation

//this keyword refers to the object that is calling the function. In this case, it refers to the user1 object.

