'use strict';

(function () {

  const randomUsersTemplate = document.querySelector(`#picture`).content.querySelector(`.picture`);
  const similarElement = document.querySelector(`.pictures`);
  const fragment = document.createDocumentFragment();

  const randomInteger = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  const render = (users) => {
    for (let i = 0; i < users.length; i++) {
      const generatedUser = users[i];
      randomUsersTemplate.querySelector(`.picture__img`).src = generatedUser.url;
      randomUsersTemplate.querySelector(`.picture__comments`).textContent = generatedUser.comments.length;
      randomUsersTemplate.querySelector(`.picture__likes`).textContent = generatedUser.likes;

      const userELement = randomUsersTemplate.cloneNode(true);
      fragment.appendChild(userELement);

      similarElement.appendChild(fragment);
    }
  };
  window.util = {
    randomInteger,
    render
  };
})();
