'use strict';

(function () {
  const randomInteger = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };


  window.util = {
    randomInteger: randomInteger,
  };
})();
