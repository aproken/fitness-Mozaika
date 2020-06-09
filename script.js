'use strict';

  //slider-carousel
class SliderCarousel {
  constructor({
    main, 
    wrap, 
    next,
    prev,
    infinity = false,
    position = 0,
    slidesToShow = 4,
    responsive = []
  }) {
    if (!main || !wrap) {
      console.warn('slider-carousel: Необходимо 2 свойства, main и wrap!');
    }
    this.main = document.querySelector(main);
    this.wrap = this.main.querySelector(wrap);
    this.slides = this.main.querySelector(wrap).children;
    this.next = this.main.querySelector(next);
    this.prev = this.main.querySelector(prev);
    this.slidesToShow = slidesToShow;
    this.options = {
      position,
      widthSlide: Math.floor(100 / this.slidesToShow),
      infinity,
      maxPosition: this.slides.length - this.slidesToShow
    }
    this.responsive = responsive
  }

  init() {
    this.addMyClass();
    this.addMyStyle();

    if (this.prev && this.next) {
      this.controlSlider();
    } 
    if (this.responsive) {
      this.responseInit();
    }
  }

  addMyClass() {
    this.main.classList.add('my-slider');
    this.wrap.classList.add('my-slider__wrap');

    for (const item of this.slides) {
      item.classList.add('my-slider__item');
    }
  }

  addMyStyle() {
    let style = document.getElementById('sliderCarousel-style');

    if (!style) {
      style = document.createElement('style');
      style.id = 'sliderCarousel-style';
    }

    style.textContent = `
      .my-slider {
        overFlow: hidden !important;
        padding-left: 0;
        padding-right: 0;s
      }
      .my-slider__wrap {
        display: flex !important;
        justify-content: space-between;
        align-items: flex-start !important;
        transition: transform 0.5s !important;
        will-change: transform !important;
        padding: 0;
      }
      .my-slider__item {
        flex: 0 0 ${this.options.widthSlide}% !important;
        margin: 0 !important;
      }
    `;
    document.head.appendChild(style);
  }

  controlSlider() {
    this.prev.addEventListener('click', this.prevSlider.bind(this));
    this.next.addEventListener('click', this.nextSlider.bind(this));
  }

  prevSlider() {
    if (this.options.infinity || this.options.position > 0) {
      --this.options.position;
      if (this.options.position < 0) {
        this.options.position = this.options.maxPosition;
      }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`
    }
  }

  nextSlider() {
    if (this.options.infinity || this.options.position < this.options.maxPosition) {
      ++this.options.position;
      if (this.options.position > this.options.maxPosition) {
        this.options.position = 0
      }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`
    }
  }

  // addArow() {
  //   const btnControl = document.querySelector('.control');
  //   btnControl.style = `
  //     display: flex;
  //     flex-direction: row;
  //     justify-content: space-between;
  //   `;

  //   this.prev = document.createElement('button');
  //   this.next = document.createElement('button');

  //   this.prev.className = 'my-slider__prev';
  //   this.next.className = 'my-slider__next';

  //   this.prev.innerHTML = '<i class="fa fa-chevron-left" aria-hidden="true"></i>';
  //   this.next.innerHTML = '<i class="fa fa-chevron-right" aria-hidden="true"></i>';

  //   btnControl.appendChild(this.prev);
  //   btnControl.appendChild(this.next);

    
  //   const style = document.createElement('style');
  //   style.textContent = `
  //     .my-slider__prev,
  //     .my-slider__next {
  //       width: 30px;
  //       height: 30px;
  //       margin: -204px 0 0 0;
  //       padding: 0;
  //       background-color: #ffd11a;
  //       border: transparent;
  //       border-radius: 50%;
  //       cursor: pointer;
  //       z-index: 99
  //     }
  //     .my-slider__prev:hover,
  //     .my-slider__prev:focus,
  //     .my-slider__next:hover,
  //     .my-slider__next:focus {
  //       background-color: #ffd11a;
  //       border: transparent;
  //       border-radius: 50%;
  //       outline: transparent
  //     }
  //   `;

  //   document.head.appendChild(style);
  // }

  responseInit() {
    const slidesToShowDefault = this.slidesToShow;
    const allResponse = this.responsive.map(item => item.breakpoint);
    const maxResponse = Math.max( ...allResponse);

    const checkResponse = () => {
      const widthWindow = document.documentElement.clientWidth;

      if (widthWindow < maxResponse) {
        for(let i = 0; i < allResponse.length; i++) {
          if (widthWindow < allResponse[i]) {
            this.slidesToShow = this.responsive[i].slidesToShow;
            this.options.widthSlide = Math.floor(100 / this.slidesToShow); 
            this.addMyStyle();
          } 
          // else {
            //this.slidesToShow = slidesToShowDefault;
            //this.options.widthSlide = Math.floor(100 / this.slidesToShow); 
            //this.addMyStyle();
          // }
        }
      }
    }

    checkResponse();

    window.addEventListener('resize', checkResponse);
  }

}

//Выпадающее меню Выбор клуба
const clubСhoice = () => {
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

// Меню
const toggleMenu = () => {
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

//main slider
const mainSlider = () => {
  const slider = document.querySelector('.main-slider'),
    slide = slider.querySelectorAll('.slide');

  let currentSlide = 0;

  const showSlide = (index) => {
    slide.forEach((item) => {
      item.style.display = 'none';
    })
    slide[index].style.display = 'flex';
  }

  const autoPlaySlide = () => {
    currentSlide++;
    
    if (currentSlide >= slide.length){
      currentSlide = 0
    }

  showSlide(currentSlide);
}

setInterval(autoPlaySlide, 4000);
}


// Превращаем форму в JSON
const formToJSON = (form) => {
  const groupByName = (elements) => {
    let data = {};

    elements.forEach( item => {
      if (item.name in data) {
        data[item.name].push(item)
      } else {
        data[item.name] = [item]
      }
    })
    return data;
  }

  let group_fields = groupByName([...form.elements]);

  const data = Object.entries(group_fields)
    .filter(([name, group_item]) => {
      return name != ""; 
    })
    .map(([name, group_item]) => {
    let type = group_item[0].type
    
    //если радиобаттон - ищем в группе 
    if (type == 'radio') {
      let checked = group_item.filter( i => i.checked )
      if (checked){
        return [name, checked[0].value]
      } 
    }

    // иначе считаем что это простой input
    return [name, group_item[0].value]
  })

  return Object.fromEntries(data);
}

//Калькулятор
// Прайс для кард
const clubPrice = {
  mozaika: {
    1: 1999,
    6: 9900,
    9: 13900,
    12: 9900,
  },
  schelkovo: {
    1: 2999,
    6: 14990,
    9: 21990,
    12: 14990,
    '12d': 24990,
  },
}

// подсчет цены 
const calcPromoPrice = (data) => {
  const club_name = data['club-name'],
        card_type = data['card-type'],
        price = clubPrice[club_name][card_type],
        hasPromo = data['promo'] === 'ТЕЛО2019';
  if (hasPromo){
    return price * 0.7;
  } else {
    return price;
  }
}

const calc = () => {
  const form = document.querySelector('#card_order'),
        totalMessage = form.querySelector('#price-total');

  const render = () => {
    if (!totalMessage) {
      return;
    }
    const data = formToJSON(form);
    totalMessage.textContent = calcPromoPrice(data);
  }

  form.addEventListener('input', render);
  

  // обработчик отправки формы
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = formToJSON(form);
    console.log("Отправка формы", data);
  })

  render()
}

const gallerySlider = () => {
  const slider = document.querySelector('.gallery-slider'),
    slide = slider.querySelectorAll('.slide'),
    wrapperGalery = document.querySelector('.wrapper__galery'),
    parentDots = document.querySelector('.dots'),
    dot = [];
  
  wrapperGalery.style.width = '946px';

  slide.forEach(() => {
    let dotItem = document.createElement('li');
    dotItem.classList.add('dot');
    parentDots.append(dotItem);
    dot.push(dotItem);
  })

  const clearDotActive = () => {
    dot.forEach((item) => {
      item.classList.remove('dot-active')
    })
  }
  
  let currentSlide = 0;

  const showSlide = (index) => {
    slide.forEach((item) => {
      item.style.display = 'none';
    })
    slide[index].style.display = 'flex';
    clearDotActive();
    dot[index].classList.add('dot-active');
  }

  const nextSlide = () => {
    currentSlide++;
    if (currentSlide >= slide.length){
      currentSlide = 0;
    }
  }

  const prevSlide = () => {
    currentSlide--;
    if (currentSlide < 0){
      currentSlide = slide.length - 1 ;
    }
  }

  const autoPlaySlide = () => {
    nextSlide();
    showSlide(currentSlide);
  }

  setInterval(autoPlaySlide, 5000);

  wrapperGalery.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;

    if (!target.matches('.my-slider__prev, .fa-chevron-left, .my-slider__next, .fa-chevron-right, .dot')) {
      return;
    }

    if (target.matches('.fa-chevron-right, .my-slider__next')) {
      nextSlide();
      showSlide(currentSlide);

    } else if (target.matches('.fa-chevron-left, .my-slider__prev')) {
      prevSlide();
      showSlide(currentSlide);

    } else if (target.matches('.dot')) {
      dot.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
      })
      showSlide(currentSlide);
    }
    
  })
}

window.addEventListener('DOMContentLoaded', () => {

  clubСhoice();
  popup();
  scroll();
  toggleMenu();
  mainSlider();
  calc();
  gallerySlider();

});
