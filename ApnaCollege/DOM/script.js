console.log("Hello World");
// alert("apna college");
//accessing idElements elements through javascript
let heading = document.getElementById("header");
console.dir(heading);

//accessing class elements through javascript
let paragraphs = document.getElementsByClassName("para");
console.dir(paragraphs);
console.log(paragraphs);

//accessing elements by tag name
let parahs  = document.getElementsByTagName("p");
console.dir(parahs)
console.log(parahs)

//querySelector
//to accessing first element of id
let headings = document.querySelector("#header");
console.log(headings);

//to accessing first element of class
let para = document.querySelector(".para");
console.log(para);

//to accessing first element of tag
let par = document.querySelector("p");
console.log(par);

//You can also select nested elements
let text = document.querySelector(".container p");
console.log(text);

//querySelectorAll

const boxes = document.querySelectorAll("div");
console.log(boxes);



// Properties of DOM
// tag name
let firstEl = document.querySelector("#myId")
console.log(firstEl);
console.log(firstEl.tagName) // BUTTON  


//Inner child or first child
//to access <p>ram</p> as the first child of the inner <div>, use firstElementChild.
let container = document.querySelector(".container");

let ram = container.lastElementChild.firstElementChild.textContent; // extract the content of <p>ram</p>
console.log(ram);

console.log(container.children);//Access only HTML elements

console.log(container.childNodes);//Access elements + text + comments

console.log(container.firstChild);//firstChild → first node (can be text, comment, or element)