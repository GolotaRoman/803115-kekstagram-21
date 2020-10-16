'use strict';

(function () {

  const levelEffectSlider = document.querySelector(`.img-upload__effect-level`);
  const effectsList = document.querySelector(`.effects__list`);
  const filtersMaxValues = {
    chrome: 1,
    sepia: 1,
    marvin: `100%`,
    phobos: `3px`,
    heat: 3
  };

  const getDefaultValueEffectLine = (evt) => {
    window.variables.imgPreviev.className = `effects__preview--${evt.target.value}`;
    levelEffectSlider.classList.remove(`hidden`);
    effectLevelPin.style.left = `${effectLevelWidth}px`;
    effectLevelDepth.style.width = `${effectLevelWidth}px`;
    window.variables.scaleControl.value = `${window.variables.DEFAULT_VALUE}%`;
  };

  effectsList.addEventListener(`change`, (evt) => {
    switch (evt.target.value) {

      case `none`:
        window.variables.imgPreviev.className = `effects__preview--${evt.target.value}`;
        levelEffectSlider.classList.add(`hidden`);
        window.variables.imgPreviev.style.cssText = ``;
        window.variables.scaleControl.value = `${window.variables.DEFAULT_VALUE}%`;
        break;

      case `chrome`:
        window.variables.imgPreviev.style.cssText = `filter: grayscale(${filtersMaxValues.chrome})`;
        getDefaultValueEffectLine(evt);
        break;

      case `sepia`:
        window.variables.imgPreviev.style.cssText = `filter: sepia(${filtersMaxValues.sepia})`;
        getDefaultValueEffectLine(evt);
        break;

      case `marvin`:
        window.variables.imgPreviev.style.cssText = `filter: invert(${filtersMaxValues.marvin})`;
        getDefaultValueEffectLine(evt);
        break;

      case `phobos`:
        window.variables.imgPreviev.style.cssText = `filter: blur(${filtersMaxValues.phobos})`;
        getDefaultValueEffectLine(evt);
        break;

      case `heat`:
        window.variables.imgPreviev.style.cssText = `filter: brightness(${filtersMaxValues.heat})`;
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
    effectLevelValue.value = Math.round(parseInt(effectLevelPin.style.left, 10) / (effectLevelWidth / window.variables.DEFAULT_VALUE));
    applyingEffect();
  });

  const applyingEffect = () => {
    let effectValue = ``;
    switch (window.variables.imgPreviev.className) {

      case `effects__preview--chrome`:
        effectValue = effectLevelValue.value / 100;
        window.variables.imgPreviev.style.cssText = `filter: grayscale(${effectValue})`;
        break;

      case `effects__preview--sepia`:
        effectValue = effectLevelValue.value / 100;
        window.variables.imgPreviev.style.cssText = `filter: sepia(${effectValue})`;
        break;

      case `effects__preview--marvin`:
        effectValue = `${effectLevelValue.value}%`;
        window.variables.imgPreviev.style.cssText = `filter: invert(${effectValue})`;
        break;

      case `effects__preview--phobos`:
        effectValue = Math.floor(effectLevelValue.value / 33);
        window.variables.imgPreviev.style.cssText = `filter: blur(${effectValue}px)`;
        break;

      case `effects__preview--heat`:
        effectValue = Math.floor(effectLevelValue.value / 33);
        window.variables.imgPreviev.style.cssText = `filter: brightness(${effectValue})`;
        break;
    }
  };
})();
