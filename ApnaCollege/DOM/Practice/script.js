let h2 = document.querySelector("h2");
h2.innerText = h2.innerText+" from apna college students";
console.log(h2)

let divs = document.querySelectorAll(".class-name");
// divs[0].innerText += " - First div";
// divs[1].innerText += " - Second div";
// divs[2].innerText += " - Third div";

//for each div get unique value
let index = 1;
for(div of divs){
    div.innerText+="new unique div "+ index;
    index++;
}



//create button
let newbtn = document.createElement("button");
newbtn.innerText = "Click me!";
console.log(newbtn)
div.after(newbtn)
newbtn.style.backgroundColor = "yellow";
newbtn.style.color = "red"

let newbtn2 = document.createElement("button");
newbtn2.innerText = "Click me!";
// div.append(newbtn2)
 div.prepend(newbtn2)
div.before(newbtn)


let new_heading = document.createElement("h1");
new_heading.innerHTML = "<i>Hi I am Prashant</i>"
document.querySelector("h2").prepend(new_heading);

newbtn2.remove();// delete the 



//appendChild
// let box = document.querySelector(".box");
// let newPara = document.createElement("p");
// newPara.innerText = "New Paragraph";
// box.appendChild(newPara);


let innerBox = document.querySelector(".inner-box");
let newPara = document.createElement("p");
newPara.innerText = "This is a new paragraph";
innerBox.appendChild(newPara);

//remove child
// let box = document.querySelector("#box");
// let para = document.querySelector("#para1");

// box.removeChild(para);

