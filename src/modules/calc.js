const calc = (promo, {
  club1,
  club2
}) => {
  const calcBlock = document.getElementById("card_order");
  const cardTypes = document.querySelectorAll('[name="card-type"]');
  const clubNames = document.querySelectorAll('[name="club-name"]');
  const promoInput = document.querySelector('[placeholder="Промокод"]');
  const priceTotal = document.getElementById("price-total");
  const clubs = new Map([
    ["one", club1],
    ["two", club2],
  ]);
  if (calcBlock && cardTypes && clubNames && promoInput && priceTotal) {
    const getChecked = (arr) => {
      let i;
      arr.forEach((element) => {
        if (element.checked) {
          i = element;
        }
      });
      return i;
    };

    const countSum = () => {
      const cardType = getChecked(cardTypes).value;
      const clubName = getChecked(clubNames).value;
      let total;

      clubs.forEach((element) => {
        if (element.name === clubName) {
          total = element[cardType];
        }
        if (promoInput.value.trim() === promo) {
          total -= total * 0.3;
        }

      });
      priceTotal.textContent = Math.ceil(total);

    };

    calcBlock.addEventListener("input", (event) => {
      const target = event.target;
      if (target.matches("input") || target.matches('[placeholder="Промокод"]')) {
        countSum();
      }
    });

    countSum();
  } else {
    return;
  }

};

export default calc;