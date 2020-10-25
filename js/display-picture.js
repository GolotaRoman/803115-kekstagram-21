'use strict';

(function () {
  const similarElement = document.querySelector(`.pictures`);
  const randomUsersTemplate = document.querySelector(`#picture`).content.querySelector(`.picture`);

  const fragment = document.createDocumentFragment();

  const onSuccess = (users) => {
    // eslint-disable-next-line no-empty
    for (let i = 0; i < users.length; i++) {
      const generatedUser = users[i];
      randomUsersTemplate.querySelector(`.picture__img`).src = generatedUser.url;
      randomUsersTemplate.querySelector(`.picture__comments`).textContent = generatedUser.comments.length;
      randomUsersTemplate.querySelector(`.picture__likes`).textContent = generatedUser.likes;

      const userELement = randomUsersTemplate.cloneNode(true);
      fragment.appendChild(userELement);
    }
    similarElement.appendChild(fragment);
  };

  // eslint-disable-next-line no-console
  window.load(onSuccess, console.error);
})();
