const body= document.querySelector("body");
const btn = document.querySelector(".btn")
const card = document.querySelectorAll("li")

card.forEach(function(value){
    // console.log(value);
    value.addEventListener('click',function(){
        let colourClass = this.classList.value;
        let color;
        switch(colourClass){
            case 'red': color="#eb4d4b"
            break;
            case 'green': color="#2ed573 "
            break;
            case 'blue': color="#3742fa "
            break;
            case 'yellow': color="#eccc68 "
            break;
            case 'pink': color="#e056fd "
            break;
            default: color="#95afc0"
        }
        console.log(colourClass);
        body.style.backgroundColor = color;
    });

    // console.log(value);
});

btn.addEventListener("click",()=>{
    body.style.backgroundColor = '#95afc0';
})