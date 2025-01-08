document.addEventListener("DOMContentLoaded", () => {
    let botonBurguer = document.querySelector("div.menu > button");
    let botonCross = document.querySelector(".navbar button");
    let navbar = document.querySelector("div.navbar");
    let tituloBanner = document.querySelector("#banner .row");

    botonBurguer.addEventListener("click", () => {
        if(window.innerWidth > 769){
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

    setTimeout(() => {
        tituloBanner.style.transform = "translateY(0%)";
    }, 2000);

    tsParticles.load("particles-js", {
        particles: {
          number: {
            value: 50, // Número de hamburguesas
            density: {
              enable: true,
              value_area: 800
            }
          },
          shape: {
            type: "image", // Usamos imágenes en lugar de círculos
            image: [
              {
                src: "./img/Inicio/Banner/hamburguesa.png", // Reemplaza con la URL de tu imagen de hamburguesa
                width: 50, // Tamaño de la hamburguesa
                height: 50
              }
            ]
          },
          size: {
            value: 35, // Tamaño de las hamburguesas
            random: true, // Tamaños aleatorios
            animation: {
              enable: true,
              speed: 10, // Velocidad de la animación de tamaño
              sync: false
            }
          },
          opacity: {
            value: 0.8, // Opacidad de las hamburguesas
            random: true,
            animation: {
              enable: true,
              speed: 1,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 2, // Velocidad de movimiento
            direction: "none", // Movimiento libre
            random: true, // Movimiento aleatorio
            straight: false,
            outModes: {
              default: "bounce" // Rebote en los bordes
            },
            attract: {
              enable: true, // Las hamburguesas se atraen hacia el ratón
              rotateX: 600,
              rotateY: 1200
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse" // Reacción al ratón (repulsión)
              },
              onclick: {
                enable: true,
                mode: "push" // Añadir más hamburguesas al hacer clic
              }
            }
          }
        },
        interactivity: {
          detectsOn: "canvas", // Detecta el ratón sobre el canvas
        }
      });
    });