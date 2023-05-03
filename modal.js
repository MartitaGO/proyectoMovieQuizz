'use strict'

let modal = document.querySelector('.modal');
let start = document.querySelector('.start');
let img = document.querySelector('#images')

// Función para visualizar el modal hecho en CSS
function displayModal() {
    modal.style.display = "contents";
    start.style.display = "none";
    img.style.display = "none";
}

start.addEventListener("click", displayModal)