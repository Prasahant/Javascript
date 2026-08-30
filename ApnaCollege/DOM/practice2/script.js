//You have three <div class="box"> elements. Add different text to each using JavaScript.
let divs = document.querySelectorAll("div");
let index = 1;

for (div of divs) {
    div.innerText += " div " + index;
    let ulist = document.createElement("ul");
    let olist = document.createElement("ol");
    
    for(let i =0; i<5; i++){
        let list = document.createElement("li");
        list.innerText += "fruits";
        olist.append(list);
    }
    ulist.append(olist);
    div.prepend(ulist);

    index++;
}


let body = document.querySelector("body");
let tgbtn = document.createElement("button");
tgbtn.setAttribute("class","btn1")
tgbtn.innerText = "Click me"
tgbtn.style.backgroundColor = "red";
tgbtn.style.color="white";
body.append(tgbtn)

tgbtn.classList.toggle("active");


