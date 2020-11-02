'use strict';

(function () {

  const URL = `https://21.javascript.pages.academy/kekstagram/data`;
  const TIMEOUT = 10000;
  const STATUS_OK = 200;
  const filters = document.querySelector(`.img-filters`);

  window.load = () => {

    const onError = (errorMessage) => {
      const node = document.createElement(`div`);
      node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
      node.style.position = `absolute`;
      node.style.left = 0;
      node.style.right = 0;
      node.style.fontSize = `30px`;

      node.textContent = errorMessage;
      document.body.insertAdjacentElement(`afterbegin`, node);
    };

    const onSuccess = (users) => {

      if (window.filter === `all`) {
        window.util.render(users);
      }

      filters.classList.remove(`img-filters--inactive`);
    };

    let xhr = new XMLHttpRequest();

    xhr.responseType = `json`;

    xhr.addEventListener(`load`, function () {
      if (xhr.status === STATUS_OK) {
        onSuccess(xhr.response);
        const resultFromServer = xhr.response;

        window.load = {
          resultFromServer
        };
      } else {
        onError(`Статус ответа: ` + xhr.status + ` ` + xhr.statusText);
      }
    });
    xhr.addEventListener(`error`, function () {
      onError(`Произошла ошибка соединения`);
    });
    xhr.addEventListener(`timeout`, function () {
      onError(`Запрос не успел выполниться за ` + xhr.timeout + `мс`);
    });

    xhr.timeout = TIMEOUT;

    xhr.open(`GET`, URL);
    xhr.send();

  };

  window.load();

})();
