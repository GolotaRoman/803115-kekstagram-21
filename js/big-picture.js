'use strict';
(function () {
  // function delayedStart(data) {

  //   const socialComments = document.querySelector(`.social__comments`);
  //   const bigPicture = document.querySelector(`.big-picture`);
  //   const bigPictureImg = document.querySelector(`.big-picture__img`);
  //   const likes = document.querySelector(`.likes-count`);
  //   const commentsCount = document.querySelector(`.comments-count`);
  //   // const resultServer = window.resultFromServer[0];
  //   const description = document.querySelector(`.social__caption`);
  //   const socialCommentCounter = document.querySelector(`.social__comment-count`);
  //   const commentsLoader = document.querySelector(`.comments-loader`);
  //   const body = document.querySelector(`body`);

  //   bigPicture.classList.remove(`hidden`);
  //   socialCommentCounter.classList.add(`hidden`);
  //   body.classList.add(`modal-open`);
  //   commentsLoader.classList.add(`hidden`);
  //   bigPictureImg.children[0].src = data.url;
  //   likes.textContent = data.likes;
  //   commentsCount.textContent = data.comments.length;
  //   description.textContent = data.description;

  //   for (let i = 0; i <= socialComments.children.length; i++) {
  //     let comment = document.querySelector(`.social__comment`);
  //     socialComments.removeChild(comment);
  //   }

  //   for (let i = 0; i <= data.comments.length; i++) {
  //     const blockLi = document.createElement(`li`);
  //     blockLi.classList.add(`social__comment`);
  //     const blockImg = document.createElement(`img`);
  //     blockImg.classList.add(`social__picture`);
  //     blockImg.src = data.comments[i].avatar;
  //     blockImg.alt = data.comments[i].name;
  //     blockImg.width = `35`;
  //     blockImg.height = `35`;
  //     blockLi.appendChild(blockImg);
  //     const blockP = document.createElement(`p`);
  //     blockP.classList.add(`social__text`);
  //     blockP.textContent = data.comments[i].message;
  //     blockLi.appendChild(blockP);
  //     socialComments.appendChild(blockLi);
  //   }

  // }

  // window.bigPicture = {
  //   delayedStart
  // };

  // setTimeout(window.bigPicture.delayedStart(window.resultFromServer[0]), 1000);
})();
