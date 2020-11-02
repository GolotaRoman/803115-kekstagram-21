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
    if (window.filter === `all`) {
      window.util.render(users);
    } else if (window.filter === `random`) {
      const randomUsers = users.sort(() => Math.random() - Math.random()).slice(0, 10);

      window.util.render(randomUsers);
    } else if (window.filter === `discussed`) {
      const discussedUsers = users.sort((a, b) => b.comments.length - a.comments.length);
      window.util.render(discussedUsers);
    }
  };

  const removePictures = window.debounce(() => {
    const length = document.querySelectorAll(`.picture`).length;
    for (let i = 0; i < length; i++) {
      document.querySelector(`.picture`).remove();
    }
    renderPictures(window.load.resultFromServer);
    document.querySelector(`.img-filters__button--active`).classList.remove(`img-filters__button--active`);
  });

  randomFilter.addEventListener(`click`, function () {
    window.filter = `random`;
    removePictures();
    randomFilter.classList.add(`img-filters__button--active`);
  });

  discussed.addEventListener(`click`, function () {

    window.filter = `discussed`;
    removePictures();
    discussed.classList.add(`img-filters__button--active`);
  });

  defaultFilter.addEventListener(`click`, function () {
    window.filter = `all`;
    removePictures();
    defaultFilter.classList.add(`img-filters__button--active`);
  });
})();
