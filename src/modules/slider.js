const slider = (sliderSelector, slideSelector, dotsSelector, time) => {
  const slider = document.querySelector(sliderSelector);
  const slide = document.querySelectorAll(slideSelector);
  const dots = document.querySelector(dotsSelector);
  let dot;
  if (!!dots) {
    for (let i = 0; i < slide.length; i++) {
      const liDot = document.createElement("li");
      const liDotBtn = document.createElement("button");
      liDot.classList.add("dot");
      if (i === 0) {
        liDot.classList.add("slick-active");
      }
      dots.append(liDot);
      liDot.append(liDotBtn);
    }
    dot = document.querySelectorAll(".dot");
  } else {
    dot = "";
  }

  let carrentSlide = 0;
  let interval;

  const prevSlide = (elem, index, strClass) => {
    if (elem) {
      elem[index].classList.remove(strClass);
    }
  };
  const nextSlide = (elem, index, strClass) => {
    if (elem) {
      elem[index].classList.add(strClass);
    }
  };

  const autuPlaySlide = () => {
    prevSlide(slide, carrentSlide, "slide-active");
    prevSlide(dot, carrentSlide, "slick-active");
    carrentSlide++;
    if (carrentSlide >= slide.length) {
      carrentSlide = 0;
    }
    nextSlide(slide, carrentSlide, "slide-active");
    nextSlide(dot, carrentSlide, "slick-active");
  };

  const startSlide = (time = 1500) => {
    interval = setInterval(autuPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  slider.addEventListener("click", (event) => {
    event.preventDefault();
    let target = event.target;

    if (!target.closest(".slider-arrow, .dot")) {
      return;
    }
    prevSlide(slide, carrentSlide, "slide-active");
    prevSlide(dot, carrentSlide, "slick-active");

    if (target.closest("#arrow-right")) {
      carrentSlide++;
    } else if (target.closest("#arrow-left")) {
      carrentSlide--;
    } else if (target.closest(".dot")) {
      dot.forEach((elem, index) => {
        if (elem === target.closest(".dot")) {
          carrentSlide = index;
        }
      });
    }
    if (carrentSlide >= slide.length) {
      carrentSlide = 0;
    }
    if (carrentSlide < 0) {
      carrentSlide = slide.length - 1;
    }
    nextSlide(slide, carrentSlide, "slide-active");
    nextSlide(dot, carrentSlide, "slick-active");
  });

  slider.addEventListener("mouseover", (event) => {
    if (event.target.closest(".slider-arrow, .dot")) {
      stopSlide();
    }
  });
  slider.addEventListener("mouseout", (event) => {
    if (event.target.closest(".slider-arrow, .dot")) {
      startSlide();
    }
  });
  startSlide(time);
};

export default slider;