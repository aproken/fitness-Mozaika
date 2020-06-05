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


  //Popup
  const popup = () => {
    const links = document.querySelectorAll('[data-popup]');

    links.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();

        const itemId = e.currentTarget.dataset.popup;
        showPopup(itemId);

      })
    })

    const showPopup = (elemId) => {
      const elem = document.querySelector(elemId);
      elem.style.display = 'block';
    } 
    
    const closePopup = () => {
      const popup = document.querySelectorAll('.popup');
      popup.forEach(item => item.style.display = 'none');
    }

    const btnClose = document.querySelectorAll('.close_icon'),
      overlay = document.querySelectorAll('.overlay');
    
    btnClose.forEach( item => item.addEventListener('click', closePopup));

    overlay.forEach( item => item.addEventListener('click', closePopup));

    const btnGift = document.querySelector('.fixed-gift');
    btnGift.addEventListener('click', () => btnGift.style.display = 'none');
    
  }


  popup();

});
