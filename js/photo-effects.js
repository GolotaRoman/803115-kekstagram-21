'use strict';

(function () {

  const levelEffectSlider = document.querySelector(`.img-upload__effect-level`);
  const effectsList = document.querySelector(`.effects__list`);
  const imgPreviev = document.querySelector(`.img-upload__preview`);
  const DEFAULT_VALUE = 100;
  const filtersMaxValues = {
    chrome: 1,
    sepia: 1,
    marvin: `100%`,
    phobos: `3px`,
    heat: 3
  };

  const getDefaultValueEffectLine = (evt) => {
    imgPreviev.className = `effects__preview--${evt.target.value}`;
    levelEffectSlider.classList.remove(`hidden`);
    effectLevelPin.style.left = `${effectLevelWidth}px`;
    effectLevelDepth.style.width = `${effectLevelWidth}px`;
    window.variables.scaleControl.value = `${DEFAULT_VALUE}%`;
  };

  effectsList.addEventListener(`change`, (evt) => {
    switch (evt.target.value) {

      case `none`:
        imgPreviev.className = `effects__preview--${evt.target.value}`;
        levelEffectSlider.classList.add(`hidden`);
        imgPreviev.style.cssText = ``;
        window.variables.scaleControl.value = `${DEFAULT_VALUE}%`;
        break;

      case `chrome`:
        imgPreviev.style.cssText = `filter: grayscale(${filtersMaxValues.chrome})`;
        getDefaultValueEffectLine(evt);
        break;

      case `sepia`:
        imgPreviev.style.cssText = `filter: sepia(${filtersMaxValues.sepia})`;
        getDefaultValueEffectLine(evt);
        break;

      case `marvin`:
        imgPreviev.style.cssText = `filter: invert(${filtersMaxValues.marvin})`;
        getDefaultValueEffectLine(evt);
        break;

      case `phobos`:
        imgPreviev.style.cssText = `filter: blur(${filtersMaxValues.phobos})`;
        getDefaultValueEffectLine(evt);
        break;

      case `heat`:
        imgPreviev.style.cssText = `filter: brightness(${filtersMaxValues.heat})`;
        getDefaultValueEffectLine(evt);
        break;
    }
  });

  const effectLevelPin = document.querySelector(`.effect-level__pin`);
  const effectLevelValue = document.querySelector(`.effect-level__value`);
  const effectLevelLine = document.querySelector(`.effect-level__line`);
  const effectLevelDepth = document.querySelector(`.effect-level__depth`);
  const effectLevelWidth = 450;

  effectLevelLine.addEventListener(`mousedown`, (evt) => {
    effectLevelPin.style.left = `${evt.offsetX}px`;
    effectLevelDepth.style.width = `${evt.offsetX}px`;
    effectLevelValue.value = Math.round(parseInt(effectLevelPin.style.left, 10) / (effectLevelWidth / DEFAULT_VALUE));
    applyingEffect();
  });

  const applyingEffect = () => {
    let effectValue = ``;
    switch (imgPreviev.className) {

      case `effects__preview--chrome`:
        effectValue = effectLevelValue.value / 100;
        imgPreviev.style.cssText = `filter: grayscale(${effectValue})`;
        break;

      case `effects__preview--sepia`:
        effectValue = effectLevelValue.value / 100;
        imgPreviev.style.cssText = `filter: sepia(${effectValue})`;
        break;

      case `effects__preview--marvin`:
        effectValue = `${effectLevelValue.value}%`;
        imgPreviev.style.cssText = `filter: invert(${effectValue})`;
        break;

      case `effects__preview--phobos`:
        effectValue = Math.floor(effectLevelValue.value / 33);
        imgPreviev.style.cssText = `filter: blur(${effectValue}px)`;
        break;

      case `effects__preview--heat`:
        effectValue = Math.floor(effectLevelValue.value / 33);
        imgPreviev.style.cssText = `filter: brightness(${effectValue})`;
        break;
    }
  };
})();
