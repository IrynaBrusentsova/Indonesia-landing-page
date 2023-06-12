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


const btnUp = {
    el: document.querySelector('.btnUp'),
    show() {
      // удалим у кнопки класс btn-up_hide
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      // добавим к кнопке класс btn-up_hide
      this.el.classList.add('btn-up_hide');
    },
   
    
    addEventListener() {
      // при прокрутке содержимого страницы
      window.addEventListener('scroll', () => {
        // определяем величину прокрутки
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        // если страница прокручена больше чем на 300px, то делаем кнопку видимой, иначе скрываем
        scrollY > 300 ? this.show() : this.hide();
      });
      // при нажатии на кнопку .btn-up
      document.querySelector('.btnUp').onclick = () => {
        // переместим в начало страницы
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();