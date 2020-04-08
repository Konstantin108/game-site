'use strict';

const miniScreen1 = document.querySelector('.product-card__screen_mini-screen1');
const miniScreen2 = document.querySelector('.product-card__screen_mini-screen2');
const miniScreen3 = document.querySelector('.product-card__screen_mini-screen3');
const miniScreen4 = document.querySelector('.product-card__screen_mini-screen4');
const selectedScreen = document.querySelector('.product-card__selected-screen');

let selectScreen1 = function getSelectScreen1() {
    if (selectedScreen.classList.contains('product-card__selected-screen_screen1')) {

    } else {
        selectedScreen.classList.add('product-card__selected-screen_screen1');
        selectedScreen.classList.remove('product-card__selected-screen_screen2');
        selectedScreen.classList.remove('product-card__selected-screen_screen3');
        selectedScreen.classList.remove('product-card__selected-screen_screen4');
    }
};

miniScreen1.addEventListener('click', selectScreen1);

let selectScreen2 = function getSelectScreen2() {
    if (selectedScreen.classList.contains('product-card__selected-screen_screen2')) {

    } else {
        selectedScreen.classList.add('product-card__selected-screen_screen2');
        selectedScreen.classList.remove('product-card__selected-screen_screen1');
        selectedScreen.classList.remove('product-card__selected-screen_screen3');
        selectedScreen.classList.remove('product-card__selected-screen_screen4');
    }
};

miniScreen2.addEventListener('click', selectScreen2);

let selectScreen3 = function getSelectScreen3() {
    if (selectedScreen.classList.contains('product-card__selected-screen_screen3')) {

    } else {
        selectedScreen.classList.add('product-card__selected-screen_screen3');
        selectedScreen.classList.remove('product-card__selected-screen_screen1');
        selectedScreen.classList.remove('product-card__selected-screen_screen2');
        selectedScreen.classList.remove('product-card__selected-screen_screen4');
    }
};

miniScreen3.addEventListener('click', selectScreen3);

let selectScreen4 = function getSelectScreen4() {
    if (selectedScreen.classList.contains('product-card__selected-screen_screen4')) {

    } else {
        selectedScreen.classList.add('product-card__selected-screen_screen4');
        selectedScreen.classList.remove('product-card__selected-screen_screen1');
        selectedScreen.classList.remove('product-card__selected-screen_screen2');
        selectedScreen.classList.remove('product-card__selected-screen_screen3');
    }
};

miniScreen4.addEventListener('click', selectScreen4);

