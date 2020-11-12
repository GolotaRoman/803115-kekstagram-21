'use strict';

(function () {

  const closeBigPicture = document.querySelector(`.big-picture__cancel`);
  window.bigPicture = document.querySelector(`.big-picture`);
  // const bigPictureImg = document.querySelector(`.big-picture__img`);
  const body = document.querySelector(`body`);

  closeBigPicture.addEventListener(`click`, function () {
    window.bigPicture.classList.add(`hidden`);
    body.classList.remove(`modal-open`);
  });

})();
