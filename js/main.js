'use strict';

// const COMMENT_MESSAGES =
// [
//   `Всё отлично!`,
//   `В целом всё неплохо. Но не всё.`,
//   `Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.`,
//   `Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.`,
//   `Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.`,
//   `Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`
// ];

// const NAMES =
// [
//   `Иван`,
//   `Пётр`,
//   `Анна`,
//   `Василий`,
//   `Роман`,
//   `Екатерина`
// ];

// const MIN_PICTURE_NUMBER = 0;
// const MAX_PICTURE_NUMBER = 6;
// const MIN_LIKES = 15;
// const MAX_LIKES = 200;
// const MIN_COMMENTS = 1;
// const MAX_COMMENTS = 5;
// const PICTURES_QUANTITY = 25;
// const similarElement = document.querySelector(`.pictures`);
// const randomUsersTemplate = document.querySelector(`#picture`).content.querySelector(`.picture`);

// const commentsGenerator = (minComments, maxComments) => {
//   const comments = [];
//   for (let i = 0; i < window.util.randomInteger(minComments, maxComments); i++) {

//     const comment = {
//       avatar: `img/avatar` + window.util.randomInteger(MIN_PICTURE_NUMBER, MAX_PICTURE_NUMBER) + `.svg`,
//       message: COMMENT_MESSAGES[window.util.randomInteger(0, COMMENT_MESSAGES.length - 1)],
//       name: NAMES[window.util.randomInteger(0, NAMES.length - 1)]
//     };
//     comments.push(comment);
//   }
//   return comments;
// };

// const randomUser = (i = 0) => {
//   const user = {
//     url: `photos/` + i + `.jpg`,
//     description: `Some description`,
//     likes: window.util.randomInteger(MIN_LIKES, MAX_LIKES),
//     comments: commentsGenerator(MIN_COMMENTS, MAX_COMMENTS)
//   };
//   return user;
// };

// const fragment = document.createDocumentFragment();
// for (let i = 1; i <= PICTURES_QUANTITY; i++) {


//   const generatedUser = window.moch.randomUser(i);
//   randomUsersTemplate.querySelector(`.picture__img`).src = generatedUser.url;
//   randomUsersTemplate.querySelector(`.picture__comments`).textContent = generatedUser.comments.length;
//   randomUsersTemplate.querySelector(`.picture__likes`).textContent = generatedUser.likes;

//   const userELement = randomUsersTemplate.cloneNode(true);

//   fragment.appendChild(userELement);
// }

// similarElement.appendChild(fragment);

// const buttonOpen = document.querySelector(`#upload-file`);
// const buttonClose = document.querySelector(`.img-upload__cancel`);
// const uploadOverlay = document.querySelector(`.img-upload__overlay`);
// const controlSmaller = document.querySelector(`.scale__control--smaller`);
// const controlBigger = document.querySelector(`.scale__control--bigger`);
// const scaleControl = document.querySelector(`.scale__control--value`);
// const imgPreviev = document.querySelector(`.img-upload__preview`);
// const levelEffectSlider = document.querySelector(`.img-upload__effect-level`);
// const effectsList = document.querySelector(`.effects__list`);
// const textDescription = document.querySelector(`.text__description`);
// const DEFAULT_VALUE = 100;
// const MIN_VALUE = 25;
// const filtersMaxValues = {
//   chrome: 1,
//   sepia: 1,
//   marvin: `100%`,
//   phobos: `3px`,
//   heat: 3
// };

// const openPopup = () => {
//   uploadOverlay.classList.remove(`hidden`);
//   document.querySelector(`body`).className = (`.modal-open`);

//   scaleControl.value = `${DEFAULT_VALUE}%`;
//   document.addEventListener(`keydown`, onPopupEscPress);

//   imgPreviev.className = `effects__preview--none`;
//   levelEffectSlider.classList.add(`hidden`);
// };

// const closePopup = () => {
//   uploadOverlay.classList.add(`hidden`);
//   document.querySelector(`body`).className = (``);
//   buttonOpen.value = ``;

//   document.removeEventListener(`keydown`, onPopupEscPress);
// };

// const onPopupEscPress = (evt) => {
//   if (evt.key === `Escape` && evt.target !== hashtagInput && evt.target !== textDescription) {
//     evt.preventDefault();
//     closePopup();
//   }
// };

// buttonOpen.addEventListener(`change`, () => {
//   openPopup();
// });

// buttonClose.addEventListener(`click`, () => {
//   closePopup();
// });

// controlBigger.addEventListener(`click`, () => {
//   increaseScale();
//   transformScale();
// });

// controlSmaller.addEventListener(`click`, () => {
//   decreaseScale();
//   transformScale();
// });

// const increaseScale = () => {
//   let value = 0;
//   if (parseInt(window.variables.scaleControl.value, 10) < window.variables.DEFAULT_VALUE && parseInt(window.variables.scaleControl.value, 10) >= window.variables.MIN_VALUE) {
//     value = (parseInt(window.variables.scaleControl.value, 10) + window.variables.MIN_VALUE);
//   }

//   if (parseInt(window.variables.scaleControl.value, 10) < window.variables.DEFAULT_VALUE) {
//     window.variables.scaleControl.value = `${value}%`;
//   } else {
//     window.variables.scaleControl.value = `${window.variables.DEFAULT_VALUE}%`;
//   }
// };

// const decreaseScale = () => {
//   let value = 0;

//   if (parseInt(window.variables.scaleControl.value, 10) >= window.variables.MIN_VALUE) {
//     value = (parseInt(window.variables.scaleControl.value, 10) - window.variables.MIN_VALUE);
//   }

//   if (parseInt(window.variables.scaleControl.value, 10) > window.variables.MIN_VALUE) {
//     window.variables.scaleControl.value = `${value}%`;
//   } else {
//     window.variables.scaleControl.value = `${window.variables.MIN_VALUE}%`;
//   }
// };

// const cssValue = () => {
//   let intValue = parseInt(window.variables.scaleControl.value, 10) / 100;
//   return `transform: scale(${intValue})`;
// };

// const transformScale = () => {
//   let value = window.variables.imgPreviev.style.cssText = cssValue();
//   return value;
// };

// const getDefaultValueEffectLine = (evt) => {
//   window.variables.imgPreviev.className = `effects__preview--${evt.target.value}`;
//   levelEffectSlider.classList.remove(`hidden`);
//   effectLevelPin.style.left = `${effectLevelWidth}px`;
//   effectLevelDepth.style.width = `${effectLevelWidth}px`;
//   window.variables.scaleControl.value = `${window.variables.DEFAULT_VALUE}%`;
// };

// effectsList.addEventListener(`change`, (evt) => {
//   switch (evt.target.value) {

//     case `none`:
//       window.variables.imgPreviev.className = `effects__preview--${evt.target.value}`;
//       levelEffectSlider.classList.add(`hidden`);
//       window.variables.imgPreviev.style.cssText = ``;
//       window.variables.scaleControl.value = `${window.variables.DEFAULT_VALUE}%`;
//       break;

//     case `chrome`:
//       window.variables.imgPreviev.style.cssText = `filter: grayscale(${filtersMaxValues.chrome})`;
//       getDefaultValueEffectLine(evt);
//       break;

//     case `sepia`:
//       window.variables.imgPreviev.style.cssText = `filter: sepia(${filtersMaxValues.sepia})`;
//       getDefaultValueEffectLine(evt);
//       break;

//     case `marvin`:
//       window.variables.imgPreviev.style.cssText = `filter: invert(${filtersMaxValues.marvin})`;
//       getDefaultValueEffectLine(evt);
//       break;

//     case `phobos`:
//       window.variables.imgPreviev.style.cssText = `filter: blur(${filtersMaxValues.phobos})`;
//       getDefaultValueEffectLine(evt);
//       break;

//     case `heat`:
//       window.variables.imgPreviev.style.cssText = `filter: brightness(${filtersMaxValues.heat})`;
//       getDefaultValueEffectLine(evt);
//       break;
//   }
// });

// const effectLevelPin = document.querySelector(`.effect-level__pin`);
// const effectLevelValue = document.querySelector(`.effect-level__value`);
// const effectLevelLine = document.querySelector(`.effect-level__line`);
// const effectLevelDepth = document.querySelector(`.effect-level__depth`);
// const effectLevelWidth = 450;

// effectLevelLine.addEventListener(`mousedown`, (evt) => {
//   effectLevelPin.style.left = `${evt.offsetX}px`;
//   effectLevelDepth.style.width = `${evt.offsetX}px`;
//   effectLevelValue.value = Math.round(parseInt(effectLevelPin.style.left, 10) / (effectLevelWidth / window.variables.DEFAULT_VALUE));
//   applyingEffect();
// });

// const applyingEffect = () => {
//   let effectValue = ``;
//   switch (window.variables.imgPreviev.className) {

//     case `effects__preview--chrome`:
//       effectValue = effectLevelValue.value / 100;
//       window.variables.imgPreviev.style.cssText = `filter: grayscale(${effectValue})`;
//       break;

//     case `effects__preview--sepia`:
//       effectValue = effectLevelValue.value / 100;
//       window.variables.imgPreviev.style.cssText = `filter: sepia(${effectValue})`;
//       break;

//     case `effects__preview--marvin`:
//       effectValue = `${effectLevelValue.value}%`;
//       window.variables.imgPreviev.style.cssText = `filter: invert(${effectValue})`;
//       break;

//     case `effects__preview--phobos`:
//       effectValue = Math.floor(effectLevelValue.value / 33);
//       window.variables.imgPreviev.style.cssText = `filter: blur(${effectValue}px)`;
//       break;

//     case `effects__preview--heat`:
//       effectValue = Math.floor(effectLevelValue.value / 33);
//       window.variables.imgPreviev.style.cssText = `filter: brightness(${effectValue})`;
//       break;
//   }
// };

// const hashtagInput = document.querySelector(`.text__hashtags`);
// const MAX_HASHTAGSQUANTITY = 5;
// const MIN_HASHTAGLENGTH = 2;
// const MAX_HASHTTAGLENGTH = 20;
// const submitButton = document.querySelector(`.img-upload__submit`);

// submitButton.addEventListener(`click`, () => {
//   const hashtagValue = document.querySelector(`.text__hashtags`).value;
//   const hashtagSeparation = /\s*\s\s*/;
//   const permissibleStems = /^#[A-Za-zА-Яа-я0-9]+$/i;
//   const hashArr = hashtagValue.split(hashtagSeparation);
//   let count = 0;
//   let errors = 0;

//   if (hashArr.length > MAX_HASHTAGSQUANTITY) {
//     errors++;
//     window.variables.hashtagInput.setCustomValidity(`Максимальное количество хэштэгов 5`);
//   }

//   for (let i = 0; i < hashArr.length; i++) {
//     if (hashArr[i][0] !== `#`) {
//       errors++;
//       window.variables.hashtagInput.setCustomValidity(`Хэштег должен начинаться с символа #`);
//     } else if (hashArr[i].length < MIN_HASHTAGLENGTH) {
//       errors++;
//       window.variables.hashtagInput.setCustomValidity(`Хэштег не может состоять только из символа #`);
//     } else if (!permissibleStems.test(hashArr[i])) {
//       errors++;
//       window.variables.hashtagInput.setCustomValidity(`Введен запрещенный символ`);
//     } else if (hashArr[i].length > MAX_HASHTTAGLENGTH) {
//       errors++;
//       window.variables.hashtagInput.setCustomValidity(`Хэштег не может состоять более чем из 20 символов`);
//     }
//   }

//   for (let i = 0; i < hashArr.length; i++) {
//     for (let j = 0; j < hashArr.length; j++) {
//       if (hashArr[j].includes(hashArr[j])) {
//         count++;
//       }
//     }
//   }

//   if (hashArr.length !== count) {
//     errors++;
//     window.variables.hashtagInput.setCustomValidity(`Не может быть два и более одинаковых хэш-тэгов`);
//   }

//   if (errors === 0 || hashtagValue === ``) {
//     window.variables.hashtagInput.setCustomValidity(``);
//   }
// });

