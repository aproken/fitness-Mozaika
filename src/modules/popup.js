//Popup
export const showPopup = (elemId) => {
  const elem = document.querySelector(elemId);
  elem.style.display = 'block';
} 

export const closePopup = () => {
  const popup = document.querySelectorAll('.popup');
  popup.forEach(item => item.style.display = 'none');
}

export const popup = () => {
  const links = document.querySelectorAll('[data-popup]');

  links.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

      const itemId = e.currentTarget.dataset.popup;
      showPopup(itemId);

    })
  })

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