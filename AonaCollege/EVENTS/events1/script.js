let div1 = document.querySelector(".mydiv");
div1.innerText += "box";


//Event listener
let btn1 = document.getElementById("btn1");
let handeler1 = function () {
    console.log("button was clicked handler- 1 ");
}
btn1.addEventListener("click", function () {
    console.log("button was clicked handler- 2");
});
btn1.addEventListener("click", function () {
    console.log("button was clicked handler- 3");
});
btn1.addEventListener("click", function () {
    console.log("button was clicked handler- 4");
});


//renove evenet litener

btn1.addEventListener("click", handeler1);

btn1.removeEventListener("click", handeler1
);



div1.onmouseover = () => {
    console.log("you are inside div");
}

div1.onmouseenter = (e) => {
    console.log("Mouse entered the div");
    console.log(e);
    console.log(e.type);//click
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.clientY);
};

div1.addEventListener("mouseover", () => {
    console.log("You are inside div1");
});


let btn2 = document.getElementById("btn2");

btn2.onclick = (e) => {
    console.log(e);
    console.log(e.type);//click
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.clientY);
}



///creating toggle button

let body = document.querySelector("body")

let tgbtn = document.createElement("button");
body.append(tgbtn);
tgbtn.style.height = "40px"
tgbtn.style.width = "400px"
tgbtn.innerText = "toggle key";
tgbtn.style.color = "black";
tgbtn.style.backgroundColor = "yellow";
tgbtn.style.border = "2px solid red";
tgbtn.style.fontWeight = "bold";


let currMode = "light";


tgbtn.addEventListener("click", () => {
    if (currMode == "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "blue";


    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";

    }
    console.log(currMode);
})

//preventDefault
let link = document.querySelector("#link");

link.addEventListener("click", function(event) {
    event.preventDefault();

    console.log("Navigation stopped");
});

///stopProgation
let parent = document.querySelector("#parent");
let child = document.querySelector("#child");

parent.addEventListener("click", () => {
    console.log("Parent clicked");
});

child.addEventListener("click", (event) => {
    // event.stopPropagation();

    console.log("Button clicked");
});