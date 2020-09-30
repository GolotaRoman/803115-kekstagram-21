`use strict`;

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

const PICTURES_QUANTITY = 25;
const similarElement = document.querySelector(`.pictures`);
const randomUsersTemplate = document.querySelector(`#picture`).content.querySelector(`.picture`);

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const randomUser = (i = 0) => {
  let user = {
    url: `photos/` + i + `.jpg`,
    description: `Some description`,
    likes: randomInteger(15,200),
    comments: {
      avatar: `img/avatar-6.svg`,
      message: COMMENT_MESSAGES[randomInteger(0, COMMENT_MESSAGES.length)],
      name: NAMES[randomInteger(0, NAMES.length - 1)]
    }
  };
  return user;
};

let fragment = document.createDocumentFragment();
for (let i = 1; i <= PICTURES_QUANTITY; i++) {


  let generatedUser = randomUser(i);
  randomUsersTemplate.querySelector(`.picture__img`).src = generatedUser.url;
  randomUsersTemplate.querySelector(`.picture__comments`).textContent = generatedUser.comments.message;
  randomUsersTemplate.querySelector(`.picture__likes`).textContent = generatedUser.likes;

  let userELement = randomUsersTemplate.cloneNode(true);

  fragment.appendChild(userELement);
}

similarElement.appendChild(fragment);
