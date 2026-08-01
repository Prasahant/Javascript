// const username = {}// empty object ({})
// const instaUser = new Object();

// console.log(instaUser); // this will give an empty object because we have not added any properties to it yet.({})

// instaUser.id="123abc";
// instaUser.username = "Prashant";
// instaUser.email = "prashant@example.com";

// //console.log(instaUser);

// const regularUser = {
//     city: "Aurangabad",
//     fullname:{
//         userFullname: {
//             firstName: "Prashant",
//             lastName: "Kumar"
//         }
//     }
// };

// console.log(regularUser.fullname.userFullname.firstName); // Output: Prashant

// //adding two objects

// const obj1={
//     1:"Prashant"
// }
// const obj2={
//     2:"Kumar"
// }
// const obj3 = Object.assign(obj1, obj2); // this will add the properties of obj2 to obj1 and return the new object.

// console.log(obj3); // Output: { '1': 'Prashant', '2': 'Kumar' }

// //Another Method to add two objects is using the spread operator(...)

// const obj4 = {...obj1, ...obj2}; // this will add the properties of obj2 to obj1 and return the new object.

// console.log(obj4); // Output: { '1': 'Prashant', '2': 'Kumar' }

//getting user data from database

const databaseUser = [
    {
        name: "Prashant",
        age: 21,
        location: "India"
        
    },
    {
        name: "Kumar",
        age: 22,
        location: "India"
    },
    {
        name: "John",
        age: 25,
        location: "USA"
    }
]

console.log(databaseUser[0].name); // Output: Prashant

console.log(Object.keys(databaseUser[0])); // Output: [ 'name', 'age', 'location' ]

console.log(Object.values(databaseUser[0])); // Output: [ 'Prashant', 21, 'India' ]

console.log(Object.entries(databaseUser[1])); // Output: [ [ 'name', 'Kumar' ], [ 'age', 22 ], [ 'location', 'India' ] ]

const newUser = {
    name: "Alice",
    age: 30,
    location: "Canada"
}
console.log(newUser.hasOwnProperty("name")); // Output: true

databaseUser.push(newUser); // this will add the newUser object to the databaseUser array.

console.log(databaseUser); 


//destructuring of objects
const course = {
    courseName: "JavaScript",
    courseDuration: "3 months",
    courseInstructor: "Prashant"
}

const {courseInstructor: instructor} = course;
console.log(instructor); // Output: Prashant


