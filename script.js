const menuIcon = document.querySelector(".icon");
const menu = document.querySelector(".menu");
const dropdown = document.querySelector(".dropdown");
const dropdown1 = document.querySelector(".dropdown-1");
const slide = document.querySelectorAll(".slide");
const right = document.querySelector("bx-chevron-right");
const left = document.querySelector("bx-chevron-left");

menuIcon.addEventListener('click', ()=>{
    menuIcon.classList.toggle("bx-menu");
    menuIcon.classList.toggle("bx-x");
    menu.classList.toggle("active");
});

dropdown.addEventListener('click', ()=>{
    dropdown1.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', ()=>{
    slide[0].classList.add("active");
});

