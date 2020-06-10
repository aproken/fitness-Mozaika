  //slider-carousel
  export class SliderCarousel {
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


//Фотогалерея
export const gallerySlider = () => {
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
  
  let currentSlide = 0,
    interval;

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

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  }

  startSlide();

  const stopSlide = () => {
    clearInterval(interval);
  }

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
  wrapperGalery.addEventListener('mouseover', (e) => {
    if (e.target.matches('.my-slider__prev, .fa-chevron-left, .my-slider__next, .fa-chevron-right') || e.target.matches('.dot')) {
      stopSlide();
    }
  })
  wrapperGalery.addEventListener('mouseout', (e) => {
    if (e.target.matches('.my-slider__prev, .fa-chevron-left, .my-slider__next, .fa-chevron-right') || e.target.matches('.dot')) {
      startSlide();
    }
  })

}

//main slider
export const mainSlider = () => {
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