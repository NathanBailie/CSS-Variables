"use-strict"

let image = document.querySelector('.sliderWrapper img');
let leftArrow = document.querySelector('.leftArrow');
let rightArrow = document.querySelector('.rightArrow');

let base = './assets/images/';
let images = ['fox', 'cat', 'parrot', 'rabbit', 'dog', 'horse', 'butterfly'];
let count = 0;

leftArrow.addEventListener('click', function () {
    count -= 1;
    if (count < 0) {
        count = images.length - 1;
    }
    image.setAttribute('src', `${base}${images[count]}.jpg`)
});

rightArrow.addEventListener('click', function () {
    count += 1;
    if (count > images.length - 1) {
        count = 0;
    }
    image.setAttribute('src', `${base}${images[count]}.jpg`)
})