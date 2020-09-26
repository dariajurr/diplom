const btnToTop = () => {
  let btn = document.getElementById("totop");
  btn.style.opacity = "0";

  const showBtnToTop = () => {
    if (window.pageYOffset > 541) {
      btn.style.opacity = "1";
    } else {
      btn.style.opacity = "0";
    }
  };

  window.addEventListener("scroll", function () {
    showBtnToTop();
  });
};

export default btnToTop;