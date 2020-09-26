const fixedMenu = () => {

  const topMenu = document.querySelector(".top-menu");
  const fixedTopMenu = () => {
    if (window.pageYOffset > 187) {
      topMenu.style.position = "fixed";
    } else {
      topMenu.style.position = "";
    }
  };

  window.addEventListener("scroll", function () {
    if (document.documentElement.clientWidth < 768) {
      fixedTopMenu();
    }
  });
};

export default fixedMenu;