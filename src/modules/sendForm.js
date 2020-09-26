const sendForm = () => {
  const errorMessage = "Что-то пошло не так";
  const loadMessage = "Загрузка...";
  const successMessage = "Спасибо! Мы скоро с вами свяжемся!";
  //const statusMessage = document.createElement("div");
  //statusMessage.style.cssText = "font-size: 2rem; color: #fff;";

  document.body.addEventListener("input", (event) => {
    if (event.target.matches("[name='phone']")) {
      event.target.value = event.target.value.replace(/^(8|\+7)(\d{11})/, "");
    }
    if (
      event.target.name === "user_name" ||
      event.target.name === "user_message"
    ) {
      event.target.value = event.target.value.replace(/[^а-я\s]/i, "");
    }
  });

  document.body.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    form.textContent = loadMessage;
    form.style.cssText = "font-size: 2rem; color: #fff; margin: auto;";
    //statusMessage.textContent = loadMessage;

    postData(formData)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("status network not 200");
        }
        form.textContent = successMessage;
        form.reset();
      })
      .catch((error) => {
        form.textContent = errorMessage;
        console.log(error);
      });
  });

  const postData = (formData) => {
    return fetch("./server.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    });
  };
};

export default sendForm;