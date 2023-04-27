'use strict'
// find humburger
const humburger = document.querySelector('.header-humburger');
console.log (humburger);

// find menu
const menu = document.querySelector('.header-grid-menu');
console.log (menu);

humburger.addEventListener('click', function (){
    menu.classList.toggle('active');
})