//Async 
async function hello(){
    console.log("hello");
}
let h1 = hello();


//Async Await
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Wheather data");
            resolve(200);
        },2000);
    })
}

async function getWheatherData(){
    await api();//1st execute
    await api(); //2nd execute
}
getWheatherData()

//another example
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Get the data",dataId);
            resolve("data success");
        },2000);
    })
}

// async function getting(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);
// }

// getting()

//Another way to execute the code
//IIFE
(async function (){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
})()