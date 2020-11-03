'use strict';

(function () {

  let DEBOUNCE_INTERVAL = 500;

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

  window.filter = `all`;
  const randomFilter = document.querySelector(`#filter-random`);
  const discussed = document.querySelector(`#filter-discussed`);
  const defaultFilter = document.querySelector(`#filter-default`);

  const renderPictures = (users) => {
    switch (window.filter) {

      case `all`:
        window.util.render(users);
        break;

      case `random`:
        const randomUsers = users.sort(() => Math.random() - Math.random()).slice(0, 10);
        window.util.render(randomUsers);
        break;

      case `discussed`:
        const discussedUsers = users.sort((a, b) => b.comments.length - a.comments.length);
        window.util.render(discussedUsers);
        break;
    }
  };

  const removePictures = window.debounce((targetFilter) => {
    const length = document.querySelectorAll(`.picture`).length;
    for (let i = 0; i < length; i++) {
      document.querySelector(`.picture`).remove();
    }
    renderPictures(window.resultFromServer);
    document.querySelector(`.img-filters__button--active`).classList.remove(`img-filters__button--active`);
    targetFilter.classList.add(`img-filters__button--active`);
  });

  randomFilter.addEventListener(`click`, function (evt) {
    window.filter = `random`;
    removePictures(evt.target);
  });

  discussed.addEventListener(`click`, function (evt) {

    window.filter = `discussed`;
    removePictures(evt.target);
  });

  defaultFilter.addEventListener(`click`, function (evt) {
    window.filter = `all`;
    removePictures(evt.target);
  });
})();
