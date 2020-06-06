'use strict';


window.addEventListener('DOMContentLoaded', () => {

  //Выпадающее меню Выбор клуба
  const clubСhoice = () => {
    const dropMenu = document.querySelector('.clubs-list ul');

    dropMenu.parentNode.addEventListener('click', () => {
      if (dropMenu.style.display === 'none') {  
        dropMenu.style.display = 'block';
      } else {
        dropMenu.style.display = 'none';
      }
    })
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
      overlay = document.querySelectorAll('.overlay'),
      btnOk = document.querySelectorAll('.close-btn');
    
    btnClose.forEach( item => item.addEventListener('click', closePopup));

    overlay.forEach( item => item.addEventListener('click', closePopup));

    btnOk.forEach( item => item.addEventListener('click', closePopup));

    const btnGift = document.querySelector('.fixed-gift');
    if (btnGift){
      btnGift.addEventListener('click', () => btnGift.style.display = 'none');
    }

  }

  popup();

  //scroll
  const scroll = () => {
    const totop = document.getElementById('totop');
    totop.style.display = 'none';

    totop.addEventListener('click', (e) => {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    }) 

    window.addEventListener('scroll', () => {
      let flag = (pageYOffset < document.documentElement.clientHeight);
      totop.style.display = flag ? 'none' : 'block';
    });

    //плавный скрол пунктов меню
    const links = document.querySelectorAll('.scroll');

      links.forEach(item => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
        
        
          const blockID = e.target.getAttribute('href').substr(1);
    
          document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        })
      })
  }

  scroll();

  


});
