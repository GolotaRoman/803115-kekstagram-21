'use strict';

(function () {

  const randomUsersTemplate = document.querySelector(`#picture`).content.querySelector(`.picture`);
  const similarElement = document.querySelector(`.pictures`);
  const fragment = document.createDocumentFragment();
  const bigPicture = document.querySelector(`.big-picture`);
  const bigPictureImg = document.querySelector(`.big-picture__img`);
  const body = document.querySelector(`body`);
  const likes = document.querySelector(`.likes-count`);
  const description = document.querySelector(`.social__caption`);
  const commentsCount = document.querySelector(`.comments-count`);
  const socialComments = document.querySelector(`.social__comments`);

  const randomInteger = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  const returnNumber = (data) => {
    const result = parseInt(data.match(/\d+/), 10);
    return result;
  };

  const render = (users) => {
    for (let i = 0; i < users.length; i++) {
      const generatedUser = users[i];
      randomUsersTemplate.querySelector(`.picture__img`).src = generatedUser.url;
      randomUsersTemplate.querySelector(`.picture__comments`).textContent = generatedUser.comments.length;
      randomUsersTemplate.querySelector(`.picture__likes`).textContent = generatedUser.likes;

      const userElement = randomUsersTemplate.cloneNode(true);
      userElement.addEventListener(`click`, function () {
        bigPictureImg.children[0].src = generatedUser.url;

        likes.textContent = generatedUser.likes;
        description.textContent = generatedUser.description;
        commentsCount.textContent = generatedUser.comments.length;
        bigPicture.classList.remove(`hidden`);
        body.classList.add(`modal-open`);

        const userComments = generatedUser.comments;

        for (let j = 0; j <= socialComments.children.length; j++) {
          let comment = document.querySelector(`.social__comment`);
          socialComments.removeChild(comment);
        }

        for (let j = 0; j < userComments.length; j++) {

          const blockLi = document.createElement(`li`);
          blockLi.classList.add(`social__comment`);
          const blockImg = document.createElement(`img`);
          blockImg.classList.add(`social__picture`);
          blockImg.src = userComments[j].avatar;
          blockImg.alt = userComments[j].name;
          blockImg.width = `35`;
          blockImg.height = `35`;
          blockLi.appendChild(blockImg);
          const blockP = document.createElement(`p`);
          blockP.classList.add(`social__text`);
          blockP.textContent = userComments[j].message;
          blockLi.appendChild(blockP);
          socialComments.appendChild(blockLi);

        }

      });
      fragment.appendChild(userElement);

    }
    similarElement.appendChild(fragment);
  };

  window.util = {
    randomInteger,
    render,
    returnNumber
  };

})();
