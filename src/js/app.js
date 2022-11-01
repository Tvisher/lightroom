'use strict';
import * as baseFunction from './modules/functions.js';
import './vendors/vendors.js';
import Swiper, {
    Navigation,
    Pagination,
    Autoplay,
    EffectFade,
} from 'swiper';

import AOS from 'aos';
import IMask from 'imask';

// Проверка поддержки webP
baseFunction.testWebP();

window.addEventListener('load', (e) => {
    document.body.style.opacity = 1;
});





// Маска на номера телефона
document.querySelectorAll('input[type="tel"]').forEach(input => {
    const mask = IMask(input, {
        mask: '+{7}(000) 000-00-00'
    });
});

// Инит и опции библиотеки анимаций
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'load', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 25, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 1200, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

//логика работы меню бургер
document.body.addEventListener('click', (e) => {
    const target = e.target;

    // Закрыть меню по клику вне меню 
    if (!target.closest('[data-mega-menu]') && document.querySelector('[data-mega-menu]').classList.contains('show')) {
        document.querySelector('[data-mega-menu]').classList.remove('show');
    }
    // Закрыть форму по клику вне формы
    if (!target.closest('[data-fixed-form]') && document.querySelector('[data-fixed-form]').classList.contains('show')) {
        document.querySelector('[data-fixed-form]').classList.remove('show');
    }

    // Открыть меню
    if (target.closest('[data-open-menu]')) {
        document.querySelector('[data-mega-menu]').classList.add('show');
    }
    // Закрыть меню
    if (target.closest('[data-close-menu]')) {
        document.querySelector('[data-mega-menu]').classList.remove('show');
    }

    // Открыть форму
    if (target.closest('[data-open-fixed-form]')) {
        document.querySelector('[data-fixed-form]').classList.add('show');
    }
    // Закрыть форму
    if (target.closest('[data-close-fixed-form]')) {
        document.querySelector('[data-fixed-form]').classList.remove('show');
    }

});



//Аккардеон секции faq
$("[data-toggle-elem]").click(function () {
    $(this).parent().toggleClass('open')
    $(this).parent().find("[data-toggle-content]").slideToggle("slow");
});

// Скрол к началу страницы из футера 
$("#toTop").click(function () {
    $("body,html").animate({
        scrollTop: 0,
    },
        {
            duration: 800,
            easing: "swing"
        });
    return false;
});


