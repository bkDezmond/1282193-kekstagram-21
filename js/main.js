"use strict";
const MIN_LIKES = 15;
const MAX_LIKES = 200;


let names = [`Игорь`, `Андрей`, `Илья`, `Анна`, `Ирина`, `Ольга`];
for (let i = 0; i < names.length; i++) {
  names = names[i];
}

let messages = [`Всё отлично!`, `В целом всё неплохо. Но не всё.`, `Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.`, `Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.`, `Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.`, `Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`];
for (let i = 0; i < messages.length; i++) {
  messages = messages[i];
}

let comments = {
  avatar: `img/avatar-6.svg`,
  message: messages,
  name: names
};

let getRandomLikes = function () {
  return Math.floor(Math.random() * (MAX_LIKES - MIN_LIKES)) + MIN_LIKES;
};

// и вот дальше я не могу понять как создать массив с объектами
let generatePhotosArray = function () {
  const posts = [];
  for (let i = 0; i <= 25; i++) {
    return posts;
  }
};

// let template = document.querySelector(`#picture`);
