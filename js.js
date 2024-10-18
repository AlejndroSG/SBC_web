document.addEventListener("DOMContentLoaded", () => {
    let botonBurguer = document.querySelector("div.menu > button");
    let botonCross = document.querySelector(".navbar button");
    let navbar = document.querySelector("div.navbar");
    let header = document.querySelector("header");
    let logo = document.querySelector("div.brand img");

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
    window.addEventListener("scroll", () =>{
        const scrollPosition = window.scrollY;
        if (scrollPosition > 0) {
          header.style.backgroundColor = "transparent";
          botonBurguer.style.color = "white";
          logo.setAttribute("src", "./img/Inicio/Logo_Blanco_SCB.png");
        } else {
          botonBurguer.style.color = "black";
          header.style.backgroundColor = "red";
          logo.setAttribute("src", "./img/Inicio/Logo_Negro_SCB.png");
        }
      })
})