"use-strict"

let image = document.querySelector('.sliderWrapper img');
let leftArrow = document.querySelector('.leftArrow');
let rightArrow = document.querySelector('.rightArrow');

let base = './assets/images/';
let images = ['fox', 'cat', 'parrot', 'rabbit', 'dog', 'swan', 'horse', 'butterfly'];
let count = 0;

leftArrow.addEventListener('click', function () {
    resetValues();
    count -= 1;

    if (count < 0) {
        count = images.length - 1;
    }

    animateImage();
    image.setAttribute('src', `${base}${images[count]}.jpg`);

});

rightArrow.addEventListener('click', function () {
    resetValues();
    count += 1;

    if (count > images.length - 1) {
        count = 0;
    }
    animateImage();
    image.setAttribute('src', `${base}${images[count]}.jpg`);

})

function animateImage() {
    resetValues();

    setTimeout(function () {
        image.style.transition = 'opacity 1s';
        image.style.opacity = 1;
    }, 300);
}

function resetValues() {
    image.style.opacity = 0;
    image.style.transition = '';
}
