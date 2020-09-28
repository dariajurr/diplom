const send = () => {
  const errorMessage = "Произошла ошибка. Попробуйте перезагрузить страницу или оставить заявку позже";
  const loadMessage = "Отправка...";
  //const successMessage = "Спасибо! Мы скоро с вами свяжемся!";
  const statusMessage = document.createElement("div");
  const popupSuccess = document.getElementById('thanks');
  const error = popupSuccess.querySelector('p');
  const errorHeader = popupSuccess.querySelector('h4');
  statusMessage.style.cssText = "color: #c84b4b; line-height: 40px;";


  document.body.addEventListener("submit", (event) => {
    event.preventDefault();
    const target = event.target;

    if (target.closest('[method="post"]')) {
      target.append(statusMessage);
      const formCheck = target.querySelector('[type="checkbox"]');
      const formClub = target.querySelectorAll('[name="club-name"]');
      const formPhone = target.querySelector('[type = "tel"]');


      if (formCheck && !formCheck.checked) {
        statusMessage.textContent = "Необходимо согласие на обработку данных";
        return;
      }
      if (formClub.length > 0) {
        let i = null;
        for (let club of formClub) {
          if (club.checked) {
            i = club;
          }
        }
        if (!i) {
          statusMessage.textContent = "Необходимо выбрать клуб";
          return;
        }
      }

      if (formPhone.value.length < 12) {
        statusMessage.textContent = "Введите корректный номер телефона";
        return;
      }


      const request = new XMLHttpRequest();
      request.addEventListener('readystatechange', () => {
        statusMessage.textContent = loadMessage;
        if (request.readyState !== 4) {
          return;
        }
        if (request.status === 200) {
          statusMessage.textContent = '';
        } else {
          statusMessage.textContent = '';
          errorHeader.textContent = "Ошибка!";
          error.textContent = errorMessage;
        }
        popupSuccess.style.display = 'block';
        if (target.closest('.popup')) {
          target.closest('.popup').style.display = 'none';
        }
        target.reset();

      });
      request.open('POST', './server.php');
      request.setRequestHeader('Content-type', 'application/json');
      const formData = new FormData(target);
      let body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });

      request.send(JSON.stringify(body));
    }



  });
};

export default send;