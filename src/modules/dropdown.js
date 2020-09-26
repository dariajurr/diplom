const dropdown = () => {
  const clubList = document.querySelector(".clubs-list ul");

  document.body.addEventListener("click", (event) => {
    const target = event.target;

    if (target.closest(".club-select") && clubList.style.display === "none") {
      clubList.style.display = "block";
    } else {
      clubList.style.display = "none";
    }
  });
};

export default dropdown;