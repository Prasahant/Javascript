// const user = {
//     username: "Prashant",
//       welcomeMsg: function(){
//         console.log(`Welcome back, ${this.username}!`);
//         console.log(this);//this refers to the object that is calling the function
//     }          
// }

// user.welcomeMsg();

// user.username = "Alice";
// user.welcomeMsg();

//console.log(this);//this refers to the global object in non-strict mode and undefined in strict mode.{}


// function chai(){
//     let username = "Prashant";
//     console.log(this.username)
// }

// chai();//undefined because this refers to the global object in non-strict mode and undefined in strict mode.{}


// const chai =()=> function(){
//     let username = "Prashant";
//     console.log(this.username);
// }
// chai()//undefined 


// const chai =()=> function(){
//     let username = "Prashant";
//     console.log(this);
// }
// chai()//{} because this refers to the global object in non-strict mode and undefined in strict mode.{}


//array Functions 
const addTwo =(num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(5, 3));//8


const addTwo1 =(num1, num2) => num1 + num2;
//console.log(addTwo1(5, 9));//14

const addTwo2 =(num1, num2) =>( num1 + num2);

//console.log(addTwo2(56, 9));//65

const username = (user) => (`Welcome back, ${user}!`);
console.log(username("Prashant"));//Welcome back, Prashant!//return a string with the value of the parameter user inserted into it. The parentheses around the string are optional, but they can be used to make the code more readable.

const username1 = (user1) => ({ username: "Rahul" });
console.log(username1("Prashant"));//{ username: 'Rahul' }// return an object with a property username and value Rahul. The parameter user1 is not used in the function body, so it has no effect on the returned object.


const myArray = [1, 2, 3, 4, 5];
myArray.forEach((num) => {
    console.log(num * 2);
});//2,4,6,8,10 