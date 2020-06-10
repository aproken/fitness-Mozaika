// Меню
export const toggleMenu = () => {
  const topMenu = document.querySelector('.top-menu'),
    patchMenu = document.querySelector('.patch-menu'),
    btnMenu = document.querySelector('.menu-button img'),
    popupMenu = document.querySelector('.popup-menu'),
    btnCloseMenu = document.querySelector('.close-menu-btn img'),
    head = document.querySelector('.head');
  
  const closeMenu = () => {
    popupMenu.style.display = 'none';
  }
    
  popupMenu.addEventListener('click', (e) => {
    if (e.target == btnCloseMenu || e.target.tagName == 'A') {
      closeMenu();
    }
  })
  
  btnMenu.addEventListener('click', () => {
    popupMenu.style.display = 'block';
  })

  window.addEventListener('scroll', () => {
    let flag = (pageYOffset > head.offsetHeight);
    if (flag) {
      const size = topMenu.offsetHeight;

      topMenu.style.position = 'fixed';
      patchMenu.style.height = size + 'px';
    } else {
      topMenu.style.position = 'static';
      patchMenu.style.height = 0;
    }
  })
}