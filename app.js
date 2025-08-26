const body= document.querySelector("body");
const btn = document.querySelector(".btn")

const red = document.querySelector(".red")
const green = document.querySelector(".green")
const blue = document.querySelector(".blue")
const yellow = document.querySelector(".yellow")
const sky = document.querySelector(".sky")
// sky.style.backgroundColor="black";

const  card = document.querySelector("li");
// card.style.backgroundColor = "black"

if(red.addEventListener("click",()=>{
    body.style.backgroundColor= "#ff4757";
})){}

else if(green.addEventListener("click",()=>{
    body.style.backgroundColor= "#2ed573";
})){}

else if (blue.addEventListener("click",()=>{
    body.style.backgroundColor= "#3742fa";
})){}
else if (yellow.addEventListener("click",()=>{
    body.style.backgroundColor= "#eccc68";
})){}
else if((sky.addEventListener("click",()=>{
    body.style.backgroundColor= "#a4b0be";
}))){}
else if ((btn.addEventListener("click",()=>{
    body.style.backgroundColor= "#f1f2f6";
}))){}