const marvelHeroes = ["Iron Man", "Spider-Man", "Thor"];
const dcHeroes = ["Batman", "Superman", "Wonder Woman"];

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes); // ["Iron Man", "Spider-Man", "Thor", ["Batman", "Superman", "Wonder Woman"]]
// console.log(marvelHeroes[3][0]); // "Batman" - accessing the first element of the nested array

// const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes); // ["Iron Man", "Spider-Man", "Thor", "Batman", "Superman", "Wonder Woman"] 


// const all_new_heroes = [...marvelHeroes, ...dcHeroes];
// console.log(all_new_heroes); // ["Iron Man", "Spider-Man", "Thor", "Batman", "Superman", "Wonder Woman"] - using the spread operator to merge the two arrays


const anotherArray=[1,2,3,[2,2,3,2,[3,6,78,1],4,7,5,3,2,1],4,5,6,7,8,9]
const flatArray = anotherArray.flat(Infinity);

console.log(flatArray); // [1, 2, 3, 2, 2, 3, 2, 3, 6, 78, 1, 4, 7, 5, 3, 2, 1, 4, 5, 6, 7, 8, 9]

console.log(Array.isArray("Prashant")); // false
console.log(Array.from("Prashant")); // ["P", "r", "a", "s", "h", "a", "n", "t"] - converts a string into an array of characters


console.log(Array.from({name:"Prashant", age: 25})); // [undefined, undefined] - converts an object into an array of its values (in this case, the values are undefined because the object does not have numeric keys)


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3)); // [100, 200, 300] - creates a new array with the provided values
