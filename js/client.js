'use strict';

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
const ul = document.querySelector('.nav');

menuBtn.addEventListener('click', function () {

  ul.classList.toggle('movein');

  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});