const popupMenu = () => {
  const menu = document.querySelector(".popup-menu");

  document.body.addEventListener("click", (event) => {
    const target = event.target;

    if (target.matches("div .menu-button img")) {
      menu.style.display = "flex";
    }
    if (target.matches('[src="images/delete.png"]') || target.matches("[href]")) {
      menu.style.display = "none";
    }
  });
};

export default popupMenu;