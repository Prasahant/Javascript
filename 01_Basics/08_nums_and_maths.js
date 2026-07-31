const score=400
console.log(score);

const balance= new Number(1000)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber= 123.123456979
console.log(otherNumber.toPrecision(5));// 123.12

const hundreds= 100000000;
console.log(hundreds.toLocaleString('en-IN'));// 10,00,00,000


//++++++++++++++++++++++++++++ Maths++++++
console.log(Math.abs(-5));// 5
console.log(Math.round(4.7));// 5
console.log(Math.floor(4.7));// 4
console.log(Math.ceil(4.1));// 5

console.log(Math.min(1,2,3,4,5));// 1
console.log(Math.max(1,2,3,4,5));// 5

console.log(Math.random());// 0 to 1
console.log(Math.random()*10);// 0 to 10
console.log(Math.floor(Math.random() * 10) + 1);// 1 to 10


const min =10
const max = 28

console.log(Math.floor(Math.random() * (max - min + 1)) + min);// 10 to 28
