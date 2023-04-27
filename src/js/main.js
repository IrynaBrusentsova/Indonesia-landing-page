'use strict'
// find humburger
const humburger = document.querySelector('.header-humburger');
// find menu
const menu = document.querySelector('.header-grid-menu');
console.log (menu);
// find menu
const body =  document.querySelector('body');

humburger.addEventListener('click', function (){
    menu.classList.toggle('active');
    body.classList.toggle('lock');
})