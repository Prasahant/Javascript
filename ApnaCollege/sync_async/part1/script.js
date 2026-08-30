// Asynchronous 

// console.log("Start");

// setTimeout(() => {
//     console.log("Task completed");
// }, 2000);

// console.log("End");

// //callback

// //Synchronous call back
// function sum(a,b){
//     console.log(a+b);
// }

// function result(a,b,sumCallback){
//     sum(a,b);
// }
// result(5,3, sum)

// //Asynchronous call back

// const hello = ()=>{
//     console.log("hello");
// };
// setTimeout(hello,3000);

// //calback hell (nesting of callbacks)
// function getData(dataId, getNextData){
//     setTimeout(()=>{
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
            
//         }
//     },2000);
// }
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4,()=>{
//                 getData(5);
//             });
//         });
//     });
// });


// //Promises
// let promise = new Promise((resolve, reject)=>{
//     console.log("i am promise");
// })


// let promise2 = new Promise((resolve, reject) => {
//     let success = true;
//     if (success) {
//         resolve("Operation successful");
//     } else {
//         reject("Operation failed");
//     }
// });

// //handling promise by return 
// function getData1(dataId, getNextData1){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//         console.log("data", dataId);
//         resolve("Successful")
//         if(getNextData1){
//             getNextData1();
            
//         }
//     },10000);
//     })
// }

// // uses then and catch
// let promise4 = new Promise((resolve, reject) => {

//     let success = true;

//     if (success) {
//         resolve("Data received");
//     } else {
//         reject("Error occurred");
//     }

// });

// promise4
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(()=>{
//         console.log("finally block runs")
//     });

// more function of Asynchronous
// function getPromise(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Data recieved");
//             resolve("Success")
//         },4000);
//     });
// };
// console.log("fetching data.....");
// let p1 = getPromise();
// p1
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
//     .finally(()=>{
//         console.log("finnaly always execute")
//     });


//promise chaining
function getPromise(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("First Data recieved");
            resolve("Success")
        },4000);
    });
};

function getPromise2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Sceond Data recieved");
            resolve("Success")
        },4000);
    });
};

console.log("fetching data1......");
let p1 = getPromise();
p1
    .then((res)=>{
        console.log(res);
        console.log("fetching data2......");
        let p2 = getPromise2();
        p2.then((res)=>{
            console.log(res);

        });
    });

//handling callback with promise chaining
function getData5(dataId, getNextData5){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        console.log("data", dataId);
        resolve("Successful")
        if(getNextData5){
            getNextData5();
            
        }
    },9000);
    });
}

// getData5(1).then((res)=>{
//     console.log(res);
//     getData5(2).then((res)=>{
//         console.log(res);
//     });
// })
//

//another option
getData5(5)
    .then((res)=>{
        return getData5(7);
    })
    .then((res)=>{
        return getData5(8);
    })
    .then((res)=>{
        console.log(res);
    })