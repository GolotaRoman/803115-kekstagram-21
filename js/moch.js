'use strict';

(function () {

  const COMMENT_MESSAGES =
[
  `Всё отлично!`,
  `В целом всё неплохо. Но не всё.`,
  `Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.`,
  `Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.`,
  `Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.`,
  `Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`
];

  const NAMES =
[
  `Иван`,
  `Пётр`,
  `Анна`,
  `Василий`,
  `Роман`,
  `Екатерина`
];

  const MIN_PICTURE_NUMBER = 0;
  const MAX_PICTURE_NUMBER = 6;
  const MIN_LIKES = 15;
  const MAX_LIKES = 200;
  const MIN_COMMENTS = 1;
  const MAX_COMMENTS = 5;

  const commentsGenerator = (minComments, maxComments) => {
    const comments = [];
    for (let i = 0; i < window.util.randomInteger(minComments, maxComments); i++) {

      const comment = {
        avatar: `img/avatar` + window.util.randomInteger(MIN_PICTURE_NUMBER, MAX_PICTURE_NUMBER) + `.svg`,
        message: COMMENT_MESSAGES[window.util.randomInteger(0, COMMENT_MESSAGES.length - 1)],
        name: NAMES[window.util.randomInteger(0, NAMES.length - 1)]
      };
      comments.push(comment);
    }
    return comments;
  };

  const randomUser = (i = 0) => {
    const user = {
      url: `photos/` + i + `.jpg`,
      description: `Some description`,
      likes: window.util.randomInteger(MIN_LIKES, MAX_LIKES),
      comments: commentsGenerator(MIN_COMMENTS, MAX_COMMENTS)
    };
    return user;
  };

  window.moch = {
    randomUser
  };
})();
