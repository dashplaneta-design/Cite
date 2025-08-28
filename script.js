let cat= document.querySelector(".burger");
let dog=document.querySelector("ul");
cat.addEventListener("click",run)

function run(){
    cat.classList.toggle("active");
    dog.classList.toggle("show")
}
