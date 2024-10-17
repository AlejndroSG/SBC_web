document.addEventListener("DOMContentLoaded", () => {
    let botonBurguer = document.querySelector("div.menu > button");
    let botonCross = document.querySelector(".navbar button");
    let navbar = document.querySelector("div.navbar");
    console.log(navbar.innerWidt);

    botonBurguer.addEventListener("click", () => {
        if(window.innerWidth > 500){
            navbar.style.left = "80%";
            navbar.style.width = "20%";
            botonCross.style.color = "white";
        }else{
            navbar.style.left = "0%";
            navbar.style.width = "100vw"
            botonCross.style.color = "white";
        }
        
        navbar.addEventListener("mouseleave",()=>{
            navbar.style.left = "100%";
        })
    })
    botonCross.addEventListener("click", () =>{
        navbar.style.left = "100%";
    })
})