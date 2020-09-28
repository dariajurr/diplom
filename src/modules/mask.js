const mask = () => {
  document.body.addEventListener('click', (event) => {
    const target = event.target;

    if (target.matches('[type = "tel"]') && !/^\+\d*$/.test(target.value)) {
      target.value = '+7';
    }
  });

  document.body.addEventListener('input', (event) => {
    const target = event.target;
    if (target.matches('[type = "tel"]')) {
      if (!/\d/.test(target) || target.value.length > 11) {

        target.value = target.value.substring(0, 12);
      }
    }
    if (target.name === "name") {
      target.value = target.value.replace(/[^а-я\s]/ig, "");
    }
  });

};

export default mask;