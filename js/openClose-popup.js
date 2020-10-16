'use strict';

(function () {
  const buttonOpen = document.querySelector(`#upload-file`);
  const buttonClose = document.querySelector(`.img-upload__cancel`);
  const uploadOverlay = document.querySelector(`.img-upload__overlay`);
  const scaleControl = document.querySelector(`.scale__control--value`);
  const imgPreviev = document.querySelector(`.img-upload__preview`);
  const levelEffectSlider = document.querySelector(`.img-upload__effect-level`);
  const textDescription = document.querySelector(`.text__description`);


  const openPopup = () => {
    uploadOverlay.classList.remove(`hidden`);
    document.querySelector(`body`).className = (`.modal-open`);

    scaleControl.value = `${window.variables.DEFAULT_VALUE}%`;
    document.addEventListener(`keydown`, onPopupEscPress);

    imgPreviev.className = `effects__preview--none`;
    levelEffectSlider.classList.add(`hidden`);
  };

  const closePopup = () => {
    uploadOverlay.classList.add(`hidden`);
    document.querySelector(`body`).className = (``);
    buttonOpen.value = ``;

    document.removeEventListener(`keydown`, onPopupEscPress);
  };

  const onPopupEscPress = (evt) => {
    if (evt.key === `Escape` && evt.target !== window.variables.hashtagInput && evt.target !== textDescription) {
      evt.preventDefault();
      closePopup();
    }
  };

  buttonOpen.addEventListener(`change`, () => {
    openPopup();
  });

  buttonClose.addEventListener(`click`, () => {
    closePopup();
  });

})();
