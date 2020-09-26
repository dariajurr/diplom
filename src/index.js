"use strict";

import btnToTop from './modules/btnToTop';
import SliderCarousel from './modules/carousel';
import dropdown from './modules/dropdown';
import fixedMenu from './modules/fixedMenu';
import popup from './modules/popup';
import popupMenu from './modules/popupMenu';
import sendForm from './modules/sendForm';
import slider from './modules/slider';

//выпадашка клуб
dropdown();

// popup
popup("div#free_visit_form", ".free-visit", "", ".overlay", ".close_icon");
popup("div#callback_form", ".callback-btn", "", ".overlay", ".close_icon");
popup("#gift", ".fixed-gift", true, ".overlay", ".close_icon", ".close-btn");

//sendForm
sendForm();

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