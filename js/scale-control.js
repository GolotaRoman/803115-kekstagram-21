'use strict';

(function () {

  const controlSmaller = document.querySelector(`.scale__control--smaller`);
  const controlBigger = document.querySelector(`.scale__control--bigger`);

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
    if (parseInt(window.variables.scaleControl.value, 10) < window.variables.DEFAULT_VALUE && parseInt(window.variables.scaleControl.value, 10) >= window.variables.MIN_VALUE) {
      value = (parseInt(window.variables.scaleControl.value, 10) + window.variables.MIN_VALUE);
    }

    if (parseInt(window.variables.scaleControl.value, 10) < window.variables.DEFAULT_VALUE) {
      window.variables.scaleControl.value = `${value}%`;
    } else {
      window.variables.scaleControl.value = `${window.variables.DEFAULT_VALUE}%`;
    }
  };

  const decreaseScale = () => {
    let value = 0;

    if (parseInt(window.variables.scaleControl.value, 10) >= window.variables.MIN_VALUE) {
      value = (parseInt(window.variables.scaleControl.value, 10) - window.variables.MIN_VALUE);
    }

    if (parseInt(window.variables.scaleControl.value, 10) > window.variables.MIN_VALUE) {
      window.variables.scaleControl.value = `${value}%`;
    } else {
      window.variables.scaleControl.value = `${window.variables.MIN_VALUE}%`;
    }
  };

  const cssValue = () => {
    let intValue = parseInt(window.variables.scaleControl.value, 10) / 100;
    return `transform: scale(${intValue})`;
  };

  const transformScale = () => {
    let value = window.variables.imgPreviev.style.cssText = cssValue();
    return value;
  };
})();
