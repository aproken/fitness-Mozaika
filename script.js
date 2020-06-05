'use strict';


window.addEventListener('DOMContentLoaded', () => {

  //Выпадающее меню Выбор клуба
  const clubСhoice = () => {
    const dropMenu = document.querySelector('.clubs-list ul');

    dropMenu.parentNode.addEventListener('click', () => {
      dropMenu.style.display = 'block';
    });
  }

  clubСhoice();



});
