'use strict';
import {formCallback, formFooter} from './modules/form'
import {calc} from './modules/calc'
import {clubСhoice} from './modules/clubСhoice'
import {toggleMenu} from './modules/menu'
import {gallerySlider, mainSlider, SliderCarousel} from './modules/slider'
import {popup} from './modules/popup'
import {scroll} from './modules/scroll'


window.addEventListener('DOMContentLoaded', () => {

  clubСhoice();
  popup();
  scroll();
  toggleMenu();
  mainSlider();
  calc();
  gallerySlider();
  formCallback(document.getElementById('form1'));
  formCallback(document.getElementById('form2'));
  formCallback(document.getElementById('banner-form'));
  formCallback(document.getElementById('card_order'));
  formFooter(document.getElementById('footer_form'));
});

window.SliderCarousel = SliderCarousel;