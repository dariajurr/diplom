const calc = (price = 100) => {
  const calcBlock = document.getElementById("card_order");
  const cardTypes = document.querySelectorAll('[name="card-type"]');
  const clubNames = document.querySelectorAll('[name="club-name"]');
  const promo = document.querySelector('[placeholder="Промокод"]');
  const priceTotal = document.getElementById('price-total');

  const countSum = () => {
    let total = 0;
    let timeValue = 1999;
    let count = 0;

    total = timeValue;
    const changeNumbers = () => {
      if (total > count) {
        count += 1;
        priceTotal.textContent = count;
      } else {
        clearInterval(interval);
      }
    };
    let interval = setInterval(changeNumbers, 1);
  };

  calcBlock.addEventListener("change", (event) => {
    const target = event.target;
    if (target.matches("select") || target.matches("input")) {
      countSum();
    }
  });

};

export default calc;