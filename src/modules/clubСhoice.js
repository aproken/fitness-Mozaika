//Выпадающее меню Выбор клуба
export const clubСhoice = () => {
  const dropMenu = document.querySelector('.clubs-list ul');
  dropMenu.style.display = 'none';

  dropMenu.parentNode.addEventListener('click', () => {
    if (dropMenu.style.display === 'none') {  
      dropMenu.style.display = 'block';
    } else {
      dropMenu.style.display = 'none';
    }
  })
}