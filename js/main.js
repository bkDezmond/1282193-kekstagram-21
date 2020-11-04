"use strict";

let getRandomNumber = (minNumber, maxNumber) => {
  return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
};

let NAMES = [`Игорь`, `Андрей`, `Илья`, `Анна`, `Ирина`, `Ольга`];
let getRandomName = () => {
  let randomIndex = getRandomNumber(0, NAMES.length);
  return NAMES[randomIndex];
};

let MESSAGES = [`Всё отлично!`, `В целом всё неплохо. Но не всё.`, `Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.`, `Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.`, `Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.`, `Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`];
let getRandomMessage = () => {
  let randomIndex = getRandomNumber(0, MESSAGES.length);
  return MESSAGES[randomIndex];
};

let AVATAR_NUMBERS = [1, 2, 3, 4, 5, 6];

let getRandomAvatar = () => {
  let randomIndex = getRandomNumber(0, AVATAR_NUMBERS.length);
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

let getRandomComments = () => {
  const randomComments = [];
  const randomCount = getRandomNumber(1, 5);
  for (let i = 0; i < randomCount; i++) {
    const comment = getSomeComment();
    randomComments.push(comment);
  }
  return randomComments;
};

let getSomePhoto = (url) => {
  return {
    url,
    description: `description`,
    likes: getRandomNumber(15, 200),
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

let picturesElements = document.querySelector(`.pictures`);
let similarPictureTemplate = document.querySelector(`#picture`).content;

// функция создания DOM

let generatePhotoElement = (photo) => {
  let pictureTemplate = similarPictureTemplate.cloneNode(true);
  let pictureCommentsCount = pictureTemplate.querySelector(`.picture__comments`);
  let pictureLikesCount = pictureTemplate.querySelector(`.picture__likes`);
  let pictureImagesCount = pictureTemplate.querySelector(`.picture__img`);
  pictureCommentsCount.textContent = photo.comments.length;
  pictureLikesCount.textContent = photo.likes;
  pictureImagesCount.src = photo.url;
  return pictureTemplate;
};

// функция заполнения DOM

let fragment = document.createDocumentFragment();
for (let i = 0; i < photos.length; i++) {
  fragment.appendChild(generatePhotoElement(photos[i]));
}
picturesElements.appendChild(fragment);
