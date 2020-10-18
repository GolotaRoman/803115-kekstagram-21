'use strict';

(function () {

  const controlSmaller = document.querySelector(`.scale__control--smaller`);
  const controlBigger = document.querySelector(`.scale__control--bigger`);
  const imgPreviev = document.querySelector(`.img-upload__preview`);
  const DEFAULT_VALUE = 100;
  const MIN_VALUE = 25;

  controlBigger.addEventListener(`click`, () => {
    increaseScale();
    transformScale();
  });

  controlSmaller.addEventListener(`click`, () => {
    decreaseScale();
    transformScale();
  });

  const increaseScale = () => {
    let value = 0;
    if (parseInt(window.variables.scaleControl.value, 10) < DEFAULT_VALUE && parseInt(window.variables.scaleControl.value, 10) >= MIN_VALUE) {
      value = (parseInt(window.variables.scaleControl.value, 10) + MIN_VALUE);
    }

    if (parseInt(window.variables.scaleControl.value, 10) < DEFAULT_VALUE) {
      window.variables.scaleControl.value = `${value}%`;
    } else {
      window.variables.scaleControl.value = `${DEFAULT_VALUE}%`;
    }
  };

  const decreaseScale = () => {
    let value = 0;

    if (parseInt(window.variables.scaleControl.value, 10) >= MIN_VALUE) {
      value = (parseInt(window.variables.scaleControl.value, 10) - MIN_VALUE);
    }

    if (parseInt(window.variables.scaleControl.value, 10) > MIN_VALUE) {
      window.variables.scaleControl.value = `${value}%`;
    } else {
      window.variables.scaleControl.value = `${MIN_VALUE}%`;
    }
  };

  const cssValue = () => {
    let intValue = parseInt(window.variables.scaleControl.value, 10) / 100;
    return `transform: scale(${intValue})`;
  };

  const transformScale = () => {
    let value = imgPreviev.style.cssText = cssValue();
    return value;
  };
})();
