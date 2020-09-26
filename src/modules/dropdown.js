"use strict";
const dropdown = () => {
  const clubList = document.querySelector(".clubs-list ul");

  document.body.addEventListener("click", (event) => {
    const target = event.target;
    if (target.closest(".club-select") && clubList.style.display !== "block") {
      clubList.style.display = "block";
    } else {
      clubList.style.display = "none";
    }
  });
};

export default dropdown;