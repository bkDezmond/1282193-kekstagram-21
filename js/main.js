"use strict";
const MIN_LIKES = 15;
const MAX_LIKES = 200;

let names = [`Игорь`, `Андрей`, `Илья`, `Анна`, `Ирина`, `Ольга`];
let getRandomName = function () {
  let randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

let messages = [`Всё отлично!`, `В целом всё неплохо. Но не всё.`, `Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.`, `Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.`, `Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.`, `Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`];
let getRandomMessage = function () {
  let randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};

let avatarNumbers = [1, 2, 3, 4, 5, 6];

let getRandomAvatar = function () {
  let randomIndex = Math.floor(Math.random() * avatarNumbers.length);
  let avatarSrc = `img/avatar-` + avatarNumbers[randomIndex] + `.svg`;
  return avatarSrc;
};

let getSomeComment = function () {
  return {
    avatar: getRandomAvatar(),
    message: getRandomMessage(),
    name: getRandomName(),
  };
};

const comments = [
  getSomeComment(),
  getSomeComment(),
];

let getRandomComments = function () {
  const randomComments = [];
  for (let i = 0; i < comments.length; i++) {
    randomComments.push(comments[i]);
  }
  return randomComments;
};
let randomComments = getRandomComments();

let getRandomLikes = function () {
  return Math.floor(Math.random() * (MAX_LIKES - MIN_LIKES)) + MIN_LIKES;
};

let getSomePhoto = function (url) {
  return {
    url,
    description: `description`,
    likes: getRandomLikes(),
    comments: randomComments,
  };
};

let generateRandomPhotos = function () {
  const photos = [];
  for (let i = 0; i < 25; i++) {
    photos.push(getSomePhoto(`photos/${i}.jpg`));
  }
  return photos;
};

let photos = generateRandomPhotos();


// console.log(photos);

let pictureList = document.querySelector(`.picture`);
let similarPictureTemplate = document.querySelector(`#picture`).content;
let pictureComments = similarPictureTemplate.querySelector(`.picture__comments`);
let pictureLikes = similarPictureTemplate.querySelector(`.picture__likes`);
let pictureImages = similarPictureTemplate.querySelector(`.picture__img`);

// функция создания DOM

let renderTemplateContent = function () {
  let pictureTemplate = similarPictureTemplate.cloneNode(true);
  pictureComments.textContent = Number(getSomePhoto.randomComments);
  pictureLikes.textContent = Number(getSomePhoto.likes);
  return pictureTemplate;
};

// функция заполнения DOM

let fragment = document.createDocumentFragment();
for (let i = 0; i < photos.length; i++) {
  fragment.appendChild(renderTemplateContent(getSomePhoto[i]));
}
pictureList.appendChild(fragment);
