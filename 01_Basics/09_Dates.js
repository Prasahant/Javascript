// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString()); 
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);// object

// let myCreatedDate = new Date(2023,1,23)
// console.log(myCreatedDate.toDateString());

// console.log(myCreatedDate.getFullYear());

// console.log(myCreatedDate.getMonth());// 0 to 11


// let anotherDate = new Date('2023-02-23 04:30:00')
// console.log(anotherDate.toLocaleString());

// let anotherDate2 = new Date(2023,23,5,30,0)
// console.log(anotherDate2.toLocaleString());

// let anotherDate3 = new Date("02-12-24")
// console.log(anotherDate3.toLocaleString());


// let mytimeStamp = Date.now();
// console.log(mytimeStamp);

// console.log(Math.floor(Date.now() / 1000));// seconds since 1970

let newDate = new Date();
// console.log(newDate.getDate());// 1 to 31
// console.log(newDate.getDay());// 0 to 6 (Sun to Sat)
// console.log(newDate.getMonth());// 0 to 11
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());

// console.log(`Date: ${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`);

const day=newDate.toLocaleString('default', { 
    weekday: 'long', 
    timeZone: 'Asia/Kolkata',
 })
 console.log(day)
