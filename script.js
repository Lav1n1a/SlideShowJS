var slide = document.querySelector('.slideshow');
var images = [
    './fundo.jpg',
    './fundo2.jpg',
    './fundo3.jpg',
    './fundo4.jpg',
    './fundo5.jpg',
    './fundo6.jpg',
];

var time = 3500;
var count = 0;

function moveSlideShow() {
    slide.src = images[count];

    if(count < images.length - 1){
        count++;
    }else {
        count = 0;
    }

    setTimeout("moveSlideShow()", time);
}

window.onload = moveSlideShow;

