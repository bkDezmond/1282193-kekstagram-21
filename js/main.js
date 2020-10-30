"use strict";
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 1;
const MAX_COMMENTS = 5;

let NAMES = [`Игорь`, `Андрей`, `Илья`, `Анна`, `Ирина`, `Ольга`];
let getRandomName = () => {
  let randomIndex = Math.floor(Math.random() * NAMES.length);
  return NAMES[randomIndex];
};

let MESSAGES = [`Всё отлично!`, `В целом всё неплохо. Но не всё.`, `Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.`, `Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.`, `Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.`, `Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`];
let getRandomMessage = () => {
  let randomIndex = Math.floor(Math.random() * MESSAGES.length);
  return MESSAGES[randomIndex];
};

let AVATAR_NUMBERS = [1, 2, 3, 4, 5, 6];

let getRandomAvatar = () => {
  let randomIndex = Math.floor(Math.random() * AVATAR_NUMBERS.length);
  let avatarSrc = `img/avatar-` + AVATAR_NUMBERS[randomIndex] + `.svg`;
  return avatarSrc;
};


let getSomeComment = () => {
  return {
    avatar: getRandomAvatar(),
    message: getRandomMessage(),
    name: getRandomName(),
  };
};

let getRandomNumber = () => {
  return Math.floor(Math.random() * (MAX_COMMENTS - MIN_COMMENTS)) + MIN_COMMENTS;
};

let getRandomComments = () => {
  const randomComments = [];
  const randomCount = getRandomNumber();
  for (let i = 0; i < randomCount; i++) {
    const comment = getSomeComment();
    randomComments.push(comment);
  }
  return randomComments;
};

let getRandomLikes = () => {
  return Math.floor(Math.random() * (MAX_LIKES - MIN_LIKES)) + MIN_LIKES;
};

let getSomePhoto = (url) => {
  return {
    url,
    description: `description`,
    likes: getRandomLikes(),
    comments: getRandomComments(),
  };
};

let generateRandomPhotos = () => {
  const photos = [];
  for (let i = 1; i < 26; i++) {
    photos.push(getSomePhoto(`photos/${i}.jpg`));
  }
  return photos;
};

let photos = generateRandomPhotos();

let pictureElements = document.querySelector(`.pictures`);
let similarPictureTemplate = document.querySelector(`#picture`).content;

// функция создания DOM

let renderTemplateContent = (photo) => {
  let pictureTemplate = similarPictureTemplate.cloneNode(true);
  let pictureComments = pictureTemplate.querySelector(`.picture__comments`);
  let pictureLikes = pictureTemplate.querySelector(`.picture__likes`);
  let pictureImages = pictureTemplate.querySelector(`.picture__img`);
  pictureComments.textContent = photo.comments.length;
  pictureLikes.textContent = photo.likes;
  pictureImages.src = photo.url;
  return pictureTemplate;
};

// функция заполнения DOM

let fragment = document.createDocumentFragment();
for (let i = 0; i < photos.length; i++) {
  fragment.appendChild(renderTemplateContent(photos[i]));
}
pictureElements.appendChild(fragment);

