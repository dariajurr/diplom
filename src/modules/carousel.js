class SliderCarousel {
  constructor({
    main,
    wrap,
    next,
    prev,
    infinity = false,
    position = 0,
    slidesToShow = 4,
    responsive = [],
  }) {
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slidesToShow = slidesToShow;
    this.options = {
      position,
      infinity,
      widthSlides: Math.floor(100 / slidesToShow),
      maxPosition: this.slides.length - this.slidesToShow,
    };
    this.responsive = responsive;
  }

  addCarouselClass() {
    this.main.classList.add("carousel-slider");
    this.wrap.classList.add("carousel-slider__wrap");
    for (const slide of this.slides) {
      slide.classList.add("carousel-slider__item");
    }
  }

  addCarouselStyle() {
    let style = document.getElementById("sliderCarousel-style");
    if (!style) {
      style = document.createElement("style");
      style.id = "sliderCarousel-style";
    }
    style.textContent = `
    .carousel-slider{
      overflow: hidden;      
      padding: 0;
      position: relative; 
      
    }
    .carousel-slider__wrap {      
      transition: transform 0.5s;
      will-change: transform;      
      padding: 0;
    }
    .carousel-slider__item{
      flex: 0 0 ${this.options.widthSlides}%; 
      margin: 0 !important;      
    }
    `;
    document.head.append(style);
  }

  controlSlider() {
    this.prev.addEventListener("click", this.prevSlider.bind(this));
    this.next.addEventListener("click", this.nextSlider.bind(this));
  }

  prevSlider() {
    if (this.options.infinity || this.options.position > 0) {
      --this.options.position;
      if (this.options.position < 0) {
        this.options.position = this.options.maxPosition;
      }
      this.wrap.style.transform = `translateX(-${
        this.options.position * this.options.widthSlides
      }%)`;
    }
  }

  nextSlider() {
    if (this.options.infinity || this.options.position < this.maxPosition) {
      ++this.options.position;
      if (this.options.position > this.options.maxPosition) {
        this.options.position = 0;
      }
      this.wrap.style.transform = `translateX(-${
        this.options.position * this.options.widthSlides
      }%)`;
    }
  }

  responsInit() {
    const slidesToShowDafault = this.slidesToShow;
    const allRespone = this.responsive.map((item) => item.breakpoint);
    const maxResponse = Math.max(...allRespone);

    const checkResponse = () => {
      const widthWindow = document.documentElement.clientWidth;
      if (widthWindow < maxResponse) {
        allRespone.forEach((elem, index) => {
          if (widthWindow < allRespone[index]) {
            this.slidesToShow = this.responsive[index].slidesToShow;
            this.options.widthSlides = Math.floor(100 / this.slidesToShow);
            this.addCarouselStyle();
          }
        });
      } else {
        this.slidesToShow = slidesToShowDafault;
        this.options.widthSlides = Math.floor(100 / this.slidesToShow);
        this.addCarouselStyle();
      }
    };
    checkResponse();
    window.addEventListener("resize", checkResponse);
  }

  init() {
    this.addCarouselClass();
    this.addCarouselStyle();

    this.controlSlider();

    if (this.responsive) {
      this.responsInit();
    }
  }
}

export default SliderCarousel;