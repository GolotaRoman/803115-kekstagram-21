'use strict';

(function () {

  const URL = `https://21.javascript.pages.academy/kekstagram/data`;
  const TIMEOUT = 10000;
  const STATUS_OK = 200;
  const filters = document.querySelector(`.img-filters`);

  const Success = (users) => {

    if (window.filter === `all`) {
      window.util.render(users);
      delayedStart(users[0]);
    }

    window.resultFromServer = users;

    filters.classList.remove(`img-filters--inactive`);
  };

  const Error = (errorMessage) => {
    const node = document.createElement(`div`);
    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
    node.style.position = `absolute`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `30px`;

    node.textContent = errorMessage;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };

  const load = (onSuccess, onError) => {

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

  };

  load(Success, Error);

  // 3.2

  const delayedStart = (data) => {

    const socialComments = document.querySelector(`.social__comments`);
    const bigPicture = document.querySelector(`.big-picture`);
    const bigPictureImg = document.querySelector(`.big-picture__img`);
    const likes = document.querySelector(`.likes-count`);
    const commentsCount = document.querySelector(`.comments-count`);
    const description = document.querySelector(`.social__caption`);
    const socialCommentCounter = document.querySelector(`.social__comment-count`);
    const commentsLoader = document.querySelector(`.comments-loader`);
    const body = document.querySelector(`body`);

    bigPicture.classList.remove(`hidden`);
    socialCommentCounter.classList.add(`hidden`);
    body.classList.add(`modal-open`);
    commentsLoader.classList.add(`hidden`);
    bigPictureImg.children[0].src = data.url;
    likes.textContent = data.likes;
    commentsCount.textContent = data.comments.length;
    description.textContent = data.description;

    for (let i = 0; i <= socialComments.children.length; i++) {
      let comment = document.querySelector(`.social__comment`);
      socialComments.removeChild(comment);
    }

    for (let i = 0; i <= data.comments.length; i++) {
      const blockLi = document.createElement(`li`);
      blockLi.classList.add(`social__comment`);
      const blockImg = document.createElement(`img`);
      blockImg.classList.add(`social__picture`);
      blockImg.src = data.comments[i].avatar;
      blockImg.alt = data.comments[i].name;
      blockImg.width = `35`;
      blockImg.height = `35`;
      blockLi.appendChild(blockImg);
      const blockP = document.createElement(`p`);
      blockP.classList.add(`social__text`);
      blockP.textContent = data.comments[i].message;
      blockLi.appendChild(blockP);
      socialComments.appendChild(blockLi);
    }
  };
})();
