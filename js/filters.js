'use strict';

(function () {
  window.filter = `all`;
  const randomFilter = document.querySelector(`#filter-random`);
  const discussed = document.querySelector(`#filter-discussed`);
  const defaultFilter = document.querySelector(`#filter-default`);

  const removePictures = () => {
    const length = document.querySelectorAll(`.picture`).length;
    for (let i = 0; i < length; i++) {
      document.querySelector(`.picture`).remove();
    }
    window.load();
    document.querySelector(`.img-filters__button--active`).classList.remove(`img-filters__button--active`);
  };

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
