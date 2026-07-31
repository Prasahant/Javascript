// //array
// const arr = [1, 2, 3, 4, 5];
// console.log(arr[0]);

// let fruits = ["Apple", "Banana", "Orange"];

// console.log(fruits.length); // 3
// //************arrays methods**********

// arr.push(4);
// console.log(arr); // [1, 2, 3, 4, 5, 4]
// arr.pop();

// console.log(arr); // [1, 2, 3, 4, 5]
// arr.shift();

// console.log(arr);// [2, 3, 4, 5]
// console.log(arr.unshift(1));// [1, 2, 3, 4, 5] insert at the start of the array


// console.log(fruits.includes("Apple"));

// console.log(fruits.indexOf("Banana"));

// const newarr = arr.join();
// console.log(arr)
// console.log(newarr);
// console.log(typeof newarr);

let newArr = [1,2,3,4,5]
const arr1 = newArr.slice(1, 3);
console.log(arr1); //[2, 3] it creates a new array with the elements from index 1 to index 3 (not including index 3) of the original array.

const arr2 = newArr.splice(1, 2);
console.log(arr2);//[2, 3] it removes 2 elements from index 1 of the original array and returns them as a new array.

console.log(newArr)// [1, 4, 5] the original array is modified and now contains only the elements that were not removed.


