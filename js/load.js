'use strict';

(function () {

  let DEBOUNCE_INTERVAL = 500; // ms

  window.debounce = function (cb) {
    let lastTimeout = null;

    return function (...parameters) {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        cb(...parameters);
      }, DEBOUNCE_INTERVAL);
    };
  };

  const URL = `https://21.javascript.pages.academy/kekstagram/data`;
  const TIMEOUT = 10000;
  const STATUS_OK = 200;
  const filters = document.querySelector(`.img-filters`);


  window.load = window.debounce(() => {
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
      } else if (window.filter === `random`) {
        const randomUsers = users.sort(() => Math.random() - Math.random()).slice(0, 10);

        window.util.render(randomUsers);
      } else if (window.filter === `discussed`) {
        const discussedUsers = users.sort((a, b) => b.comments.length - a.comments.length);
        window.util.render(discussedUsers);
      }

      filters.classList.remove(`img-filters--inactive`);
    };

    let xhr = new XMLHttpRequest();

    xhr.responseType = `json`;

    xhr.addEventListener(`load`, function () {
      if (xhr.status === STATUS_OK) {
        onSuccess(xhr.response);
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
  });


  window.load();

})();
