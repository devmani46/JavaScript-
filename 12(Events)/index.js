//DOM Manipulation

//by id
let e = document.getElementById('click');
console.log(e)

//by class name
let cn = document.getElementsByClassName("container");
console.log(cn)

//by tag name
tn=document.getElementsByTagName("button")
console.log(tn)
//append child
createdElement = document.createElement("p")
createdElement.innerText = "This a created pragraph"
tn[0].appendChild(createdElement);
//replace child
createdElement2 = document.createElement("b")
createdElement2.innerText = "This a replaced bold"
tn[0].replaceChild(createdElement2, createdElement);

//change bg
cn[0].style.background = "yellow";

//add a new class
cn[1].classList.add("bg");

//remove class 
cn[1].classList.remove("bg");

//to show the html
console.log(cn[0].innerHTML)

//to show text
console.log(cn[1].innerText)

//Selecting using Query
    //returns 1st element
sel= document.querySelector(".container")
console.log(sel)
    //returns node list
sel= document.querySelectorAll(".container")
console.log(sel)

function clicked(){
    console.log("The Button was clicked")
}

//Events in JavaScript
