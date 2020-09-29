"use strict";

import btnToTop from './modules/btnToTop';
import SliderCarousel from './modules/carousel';
import dropdown from './modules/dropdown';
import fixedMenu from './modules/fixedMenu';
import popup from './modules/popup';
import popupMenu from './modules/popupMenu';
//import sendForm from './modules/sendForm';
import send from './modules/send';
import slider from './modules/slider';
import calc from './modules/calc';
import mask from './modules/mask';

//выпадашка клуб
dropdown();

// popup
popup("#free_visit_form", ".free-visit", false, ".overlay", ".close_icon");
popup("#callback_form", ".callback-btn", false, ".overlay", ".close_icon");
popup("#gift", ".fixed-gift", true, ".overlay", ".close_icon", ".close-btn");
popup("#thanks", false, false, ".overlay", ".close_icon", ".close-btn");

calc('ТЕЛО2020', {
  club1: {
    name: 'mozaika',
    1: 1999,
    6: 9900,
    9: 13900,
    12: 19900
  },
  club2: {
    name: 'schelkovo',
    1: 2999,
    6: 14900,
    9: 21900,
    12: 24900
  }
});
//sendForm
//sendForm();
send();


//popup menu
popupMenu();

//кнопка наверх
btnToTop();

//прилипающее меню
fixedMenu();

//карусель 
const carousel = new SliderCarousel({
  main: "#services .wrapper",
  wrap: ".services-slider",
  next: "#slider-arrow-right",
  prev: "#slider-arrow-left",
  slidesToShow: 5,
  infinity: true,
  responsive: [{
      breakpoint: 1280,
      slidesToShow: 4,
    },
    {
      breakpoint: 1024,
      slidesToShow: 3,
    },
    {
      breakpoint: 768,
      slidesToShow: 2,
    },
    {
      breakpoint: 578,
      slidesToShow: 1,
    },
  ],
});
carousel.init();

//слайдер
slider(".main-slider", ".main-slider .slide", false, 3000);
slider(".gallery-slider", ".gallery-slider .slide", ".slider-dots", 1500);

//калькулятор



//маска телефона
mask();