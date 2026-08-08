const myObject ={
    js: "javaScript",
    cpp: "c++",
    rb: "ruby",
    swift: "aift by apple"
}
// for(const key in myObject){
//     console.log(myObject[key]);
// }

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for in loop for array

let fruits = ["Apple", "Banana", "Mango"];

for (let index in fruits) {
    console.log(index, fruits[index]);
}

// for of loop on map
let myMap = new Map();

myMap.set("name", "Prashant");
myMap.set("age", 21);
myMap.set("course", "CSE");

for (let [key, value] of myMap) {
    console.log(key, value);
}

//for each loop
let numbers = [10, 20, 30, 40];

numbers.forEach(function(num) {
    console.log(num);
});


