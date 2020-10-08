'use strict';

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
const PICTURES_QUANTITY = 25;
const similarElement = document.querySelector(`.pictures`);
const randomUsersTemplate = document.querySelector(`#picture`).content.querySelector(`.picture`);

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const commentsGenerator = (minComments, maxComments) => {
  const comments = [];
  for (let i = 0; i < randomInteger(minComments, maxComments); i++) {

    const comment = {
      avatar: `img/avatar` + randomInteger(MIN_PICTURE_NUMBER, MAX_PICTURE_NUMBER) + `.svg`,
      message: COMMENT_MESSAGES[randomInteger(0, COMMENT_MESSAGES.length - 1)],
      name: NAMES[randomInteger(0, NAMES.length - 1)]
    };
    comments.push(comment);
  }
  return comments;
};

const randomUser = (i = 0) => {
  const user = {
    url: `photos/` + i + `.jpg`,
    description: `Some description`,
    likes: randomInteger(MIN_LIKES, MAX_LIKES),
    comments: commentsGenerator(MIN_COMMENTS, MAX_COMMENTS)
  };
  return user;
};

const fragment = document.createDocumentFragment();
for (let i = 1; i <= PICTURES_QUANTITY; i++) {


  const generatedUser = randomUser(i);
  randomUsersTemplate.querySelector(`.picture__img`).src = generatedUser.url;
  randomUsersTemplate.querySelector(`.picture__comments`).textContent = generatedUser.comments.length;
  randomUsersTemplate.querySelector(`.picture__likes`).textContent = generatedUser.likes;

  const userELement = randomUsersTemplate.cloneNode(true);

  fragment.appendChild(userELement);
}

similarElement.appendChild(fragment);

const buttonOpen = document.querySelector(`#upload-file`);
const buttonClose = document.querySelector(`.img-upload__cancel`);
const uploadOverlay = document.querySelector(`.img-upload__overlay`);
const controlSmaller = document.querySelector(`.scale__control--smaller`);
const controlBigger = document.querySelector(`.scale__control--bigger`);
const scaleControl = document.querySelector(`.scale__control--value`);
const imgPreviev = document.querySelector(`.img-upload__preview`);
const levelEffectSlider = document.querySelector(`.img-upload__effect-level`);
const effectsList = document.querySelector(`.effects__list`);
const textDescription = document.querySelector(`.text__description`);
const DEFAULT_VALUE = 100;
const MIN_VALUE = 25;

const openPopup = () => {
  uploadOverlay.classList.remove(`hidden`);
  document.querySelector(`body`).className = (`.modal-open`);

  scaleControl.value = `${DEFAULT_VALUE}%`;
  document.addEventListener(`keydown`, onPopupEscPress);

  imgPreviev.className = `effects__preview--none`;
  levelEffectSlider.classList.add(`hidden`);
};

const closePopup = () => {
  uploadOverlay.classList.add(`hidden`);
  document.querySelector(`body`).className = (``);
  buttonOpen.value = ``;

  document.removeEventListener(`keydown`, onPopupEscPress);
};

const onPopupEscPress = (evt) => {
  if (evt.key === `Escape` && evt.target !== hashtagInput && evt.target !== textDescription) {
    evt.preventDefault();
    closePopup();
  }
};

buttonOpen.addEventListener(`change`, () => {
  openPopup();
});

buttonClose.addEventListener(`click`, () => {
  closePopup();
});

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
  if (parseInt(scaleControl.value, 10) < DEFAULT_VALUE && parseInt(scaleControl.value, 10) >= MIN_VALUE) {
    value = (parseInt(scaleControl.value, 10) + MIN_VALUE);
  }

  if (parseInt(scaleControl.value, 10) < DEFAULT_VALUE) {
    scaleControl.value = `${value}%`;
  } else {
    scaleControl.value = `${DEFAULT_VALUE}%`;
  }
};

const decreaseScale = () => {
  let value = 0;

  if (parseInt(scaleControl.value, 10) >= MIN_VALUE) {
    value = (parseInt(scaleControl.value, 10) - MIN_VALUE);
  }

  if (parseInt(scaleControl.value, 10) > MIN_VALUE) {
    scaleControl.value = `${value}%`;
  } else {
    scaleControl.value = `${MIN_VALUE}%`;
  }
};

const cssValue = () => {
  let intValue = parseInt(scaleControl.value, 10) / 100;
  return `transform: scale(${intValue})`;
};

const transformScale = () => {
  let value = imgPreviev.style.cssText = cssValue();
  return value;
};

const repeatedСode = (evt) => {
  imgPreviev.className = `effects__preview--${evt.target.value}`;
  levelEffectSlider.classList.remove(`hidden`);
  effectLevelPin.style.left = `${effectLevelWidth}px`;
  effectLevelDepth.style.width = `${effectLevelWidth}px`;
  scaleControl.value = `${DEFAULT_VALUE}%`;
};

effectsList.addEventListener(`change`, (evt) => {
  switch (evt.target.value) {

    case `none`:
      imgPreviev.className = `effects__preview--${evt.target.value}`;
      levelEffectSlider.classList.add(`hidden`);
      imgPreviev.style.cssText = ``;
      scaleControl.value = `${DEFAULT_VALUE}%`;
      break;

    case `chrome`:
      imgPreviev.style.cssText = `filter: grayscale(${1})`;
      repeatedСode(evt);
      break;

    case `sepia`:
      imgPreviev.style.cssText = `filter: sepia(${1})`;
      repeatedСode(evt);
      break;

    case `marvin`:
      imgPreviev.style.cssText = `filter: invert(${100}%)`;
      repeatedСode(evt);
      break;

    case `phobos`:
      imgPreviev.style.cssText = `filter: blur(${3}px)`;
      repeatedСode(evt);
      break;

    case `heat`:
      imgPreviev.style.cssText = `filter: brightness(${3})`;
      repeatedСode(evt);
      break;
  }
});

const effectLevelPin = document.querySelector(`.effect-level__pin`);
const effectLevelValue = document.querySelector(`.effect-level__value`);
const effectLevelLine = document.querySelector(`.effect-level__line`);
const effectLevelDepth = document.querySelector(`.effect-level__depth`);
const effectLevelWidth = 450;

effectLevelLine.addEventListener(`mousedown`, (evt) => {
  effectLevelPin.style.left = `${evt.offsetX}px`;
  effectLevelDepth.style.width = `${evt.offsetX}px`;
  effectLevelValue.value = Math.round(parseInt(effectLevelPin.style.left, 10) / (effectLevelWidth / DEFAULT_VALUE));
  applyingEffect();
});

const applyingEffect = () => {
  let effectValue = ``;
  switch (imgPreviev.className) {

    case `effects__preview--chrome`:
      effectValue = effectLevelValue.value / 100;
      imgPreviev.style.cssText = `filter: grayscale(${effectValue})`;
      break;

    case `effects__preview--sepia`:
      effectValue = effectLevelValue.value / 100;
      imgPreviev.style.cssText = `filter: sepia(${effectValue})`;
      break;

    case `effects__preview--marvin`:
      effectValue = `${effectLevelValue.value}%`;
      imgPreviev.style.cssText = `filter: invert(${effectValue})`;
      break;

    case `effects__preview--phobos`:
      effectValue = Math.floor(effectLevelValue.value / 33);
      imgPreviev.style.cssText = `filter: blur(${effectValue}px)`;
      break;

    case `effects__preview--heat`:
      effectValue = Math.floor(effectLevelValue.value / 33);
      imgPreviev.style.cssText = `filter: brightness(${effectValue})`;
      break;
  }
};

const hashtagInput = document.querySelector(`.text__hashtags`);
const MAX_HASHTAGSQUANTITY = 5;
const MIN_HASHTAGLENGTH = 2;
const MAX_HASHTTAGLENGTH = 20;
const submitButton = document.querySelector(`.img-upload__submit`);

submitButton.addEventListener(`click`, () => {
  const hashtagValue = document.querySelector(`.text__hashtags`).value;
  const hashtagSeparation = /\s*\s\s*/;
  const permissibleStems = /^#[A-Za-zА-Яа-я0-9]+$/i;
  const hashArr = hashtagValue.split(hashtagSeparation);
  let count = 0;
  let errors = 0;

  if (hashArr.length > MAX_HASHTAGSQUANTITY) {
    errors++;
    hashtagInput.setCustomValidity(`Максимальное количество хэштэгов 5`);
  }

  for (let i = 0; i < hashArr.length; i++) {
    if (hashArr[i][0] !== `#`) {
      errors++;
      hashtagInput.setCustomValidity(`Хэштег должен начинаться с символа #`);
    } else if (hashArr[i].length < MIN_HASHTAGLENGTH) {
      errors++;
      hashtagInput.setCustomValidity(`Хэштег не может состоять только из символа #`);
    } else if (!permissibleStems.test(hashArr[i])) {
      errors++;
      hashtagInput.setCustomValidity(`Введен запрещенный символ`);
    } else if (hashArr[i].length > MAX_HASHTTAGLENGTH) {
      errors++;
      hashtagInput.setCustomValidity(`Хэштег не может состоять более чем из 20 символов`);
    }
  }

  for (let i = 0; i < hashArr.length; i++) {
    for (let j = 0; j < hashArr.length; j++) {
      if (hashArr[j].includes(hashArr[j])) {
        count++;
      }
    }
  }

  if (hashArr.length !== count) {
    errors++;
    hashtagInput.setCustomValidity(`Не может быть два и более одинаковых хэш-тэгов`);
  }

  if (errors === 0 || hashtagValue === ``) {
    hashtagInput.setCustomValidity(``);
  }
});
