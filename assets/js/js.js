'use strict';

new Swiper('.section__slider', {
    pagination: {
        // класс из html. Теперь появились точки внизу слайдера, которые могут перекинуть тебе на нужный слайд
        el: '.swiper-pagination',
        clickable: true,
    }
});

new Swiper('.section__slider2', {
    pagination: {
        // класс из html. Теперь появились точки внизу слайдера, которые могут перекинуть тебе на нужный слайд
        el: '.swiper-pagination',
        clickable: true,
    }
});

let tel = document.querySelector('.header_nav__list__ContactsBasket__ContactsBlock__BlockImg__Img')
let block = document.querySelector('.header_nav__list__ContactsBasket__ContactsBlock__BlockImg')
document.querySelector('.section').style.display = 'flex' // swiper почему то воспринимает только такой вариант прописание стиля "flex"

let animi = setInterval(function() {
    tel.addEventListener('mouseover', event => {
        for (let i of tel.querySelectorAll('path')) {
            i.style.fill = '#E5E5E5'
        }
        block.style.background = '#6E9C9F'
    })
}, 50)


let animi2 = setInterval(function() {
    tel.addEventListener('mouseout', event => {

        for (let i of tel.querySelectorAll('path')) {
            i.style.fill = '#6E9C9F'
        }
        block.style.background = '#F1EADC'
    })
}, 50)

