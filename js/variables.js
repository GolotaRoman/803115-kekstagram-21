'use strict';

(function () {
  const hashtagInput = document.querySelector(`.text__hashtags`);
  const scaleControl = document.querySelector(`.scale__control--value`);
  const imgPreviev = document.querySelector(`.img-upload__preview`);
  const DEFAULT_VALUE = 100;
  const MIN_VALUE = 25;

  window.variables = {
    hashtagInput: hashtagInput,
    scaleControl: scaleControl,
    imgPreviev: imgPreviev,
    DEFAULT_VALUE: DEFAULT_VALUE,
    MIN_VALUE: MIN_VALUE
  };
})();
