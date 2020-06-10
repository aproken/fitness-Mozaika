//scroll
export const scroll = () => {
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