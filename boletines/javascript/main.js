/* console.log("dasds");


let container = document.querySelector(".container");

console.log(container); */

/*
let links = document.querySelectorAll("a")

links.forEach(function (link) {
    console.log(link);
})


 */


/* let celdas = document.querySelectorAll("td")

celdas.forEach(function (td) {
    td.addEventListener('click', function () {
        console.log();

    })
}) */

//animacion de entrada y salida

let close = document.querySelectorAll(".close")

close.forEach(element => {
    console.log(element);
    element.addEventListener("click", (e) => {
        e.preventDefault()
        /* console.log(":)"); */
        let content = document.querySelector('.content')

        //quitar clases
        content.classList.remove("fadeInDown")
        content.classList.remove("animated")

        //agregar otra
        content.classList.add("fadeOutUp")
        content.classList.add("animated")

        setTimeout(() => {
            location.href = "/"
        }, 600)
        return false
    })
});

/* let iconos = document.querySelectorAll("span");

iconos.forEach(icono => {
    icono.classList.remove("glyphicon-star-empty")
    icono.classList.add("glyphicon-star")
}) */


