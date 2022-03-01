'use strict';

let buttons = document.querySelectorAll(".show-modal")
let modal = document.querySelector(".modal")
let overlay = document.querySelector(".overlay")
let close = document.querySelector(".close-modal")

buttons.forEach(function (i) {
    i.addEventListener("click", function () {
        modal.classList.toggle("hidden")
        overlay.classList.toggle("hidden")
    })
})

close.addEventListener("click", function () {
    modal.classList.toggle("hidden")
    overlay.classList.toggle("hidden")
})