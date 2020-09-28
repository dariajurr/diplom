const popup = (
  selectorOpen,
  selectorBlock,
  selectorOpenNone,
  ...selectorsClose
) => {
  const elem = document.querySelector(selectorOpen);
  if (elem) {
    document.body.addEventListener("click", (event) => {
      const target = event.target;
      if (target.closest(selectorBlock) && !target.closest('[type="submit"]')) {
        if (selectorOpenNone) {
          target.style.display = "none";
        }
        elem.style.display = "block";
      }
      selectorsClose.forEach((selector) => {
        if (target.matches(selector)) {
          elem.style.display = "none";
          return;
        }
      });
    });
  }
};


export default popup;