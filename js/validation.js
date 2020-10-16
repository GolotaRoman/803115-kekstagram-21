'use strict';

(function () {
  const MAX_HASHTAGSQUANTITY = 5;
  const MIN_HASHTAGLENGTH = 2;
  const MAX_HASHTTAGLENGTH = 20;
  const submitButton = document.querySelector(`.img-upload__submit`);

  submitButton.addEventListener(`click`, () => {
    const hashtagValue = document.querySelector(`.text__hashtags`).value;
    const hashtagSeparation = /\s*\s\s*/;
    const permissibleStems = /^#[A-Za-zА-Яа-я0-9]+$/i;
    const hashArr = hashtagValue.split(hashtagSeparation);
    let count = 0;
    let errors = 0;

    if (hashArr.length > MAX_HASHTAGSQUANTITY) {
      errors++;
      window.variables.hashtagInput.setCustomValidity(`Максимальное количество хэштэгов 5`);
    }

    for (let i = 0; i < hashArr.length; i++) {
      if (hashArr[i][0] !== `#`) {
        errors++;
        window.variables.hashtagInput.setCustomValidity(`Хэштег должен начинаться с символа #`);
      } else if (hashArr[i].length < MIN_HASHTAGLENGTH) {
        errors++;
        window.variables.hashtagInput.setCustomValidity(`Хэштег не может состоять только из символа #`);
      } else if (!permissibleStems.test(hashArr[i])) {
        errors++;
        window.variables.hashtagInput.setCustomValidity(`Введен запрещенный символ`);
      } else if (hashArr[i].length > MAX_HASHTTAGLENGTH) {
        errors++;
        window.variables.hashtagInput.setCustomValidity(`Хэштег не может состоять более чем из 20 символов`);
      }
    }

    for (let i = 0; i < hashArr.length; i++) {
      for (let j = 0; j < hashArr.length; j++) {
        if (hashArr[j].includes(hashArr[j])) {
          count++;
        }
      }
    }

    if (hashArr.length !== count) {
      errors++;
      window.variables.hashtagInput.setCustomValidity(`Не может быть два и более одинаковых хэш-тэгов`);
    }

    if (errors === 0 || hashtagValue === ``) {
      window.variables.hashtagInput.setCustomValidity(``);
    }
  });
})();
