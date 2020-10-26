'use strict';

(function () {
  const similarElement = document.querySelector(`.pictures`);
  const randomUsersTemplate = document.querySelector(`#picture`).content.querySelector(`.picture`);

  const fragment = document.createDocumentFragment();

  const onSuccess = (users) => {

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

  const errorNotification = function (errorMessage) {
    const node = document.createElement(`div`);
    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
    node.style.position = `absolute`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `30px`;

    node.textContent = errorMessage;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };

  window.load(onSuccess, errorNotification);
})();
