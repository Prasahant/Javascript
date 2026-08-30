let div = document.querySelector("div");
console.log(div)
console.log(div.innerHTML)//it will print all html tag inside div including text
console.log(div.innerText)//it will print the all text inside the div section

let heading = document.querySelector("h1");
heading.innerText = "new Heading";
heading.innerHTML= "<i>new Heading</i>"


//text content
let h2 = document.querySelector("h2");
console.log(h2.innerText)
console.log(h2.textContent)// give visible and invisible text content both


/*Create a new button element.
    Give it a text "click me", background color of red & text color of White 
    Insert the button as the first element inside a body tag*/

    let bdy = document.querySelector("body");
    let btn = document.createElement("button");
    btn.innerText = "Click me!";
    bdy.prepend(btn)
    btn.style.backgroundColor = "red";
    btn.style.color="white";
    btn.style.fontWeight = "bold"
    btn.style.textDecoration = "underline"


//2
let para = document.querySelector("p");
para.classList.add("new_class");

para.classList.remove("new_class");
