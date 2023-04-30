var slide = document.querySelectorAll('.slides .slide');
var current = 0;

function next() {
    slide[current].className = 'slide';
    current = (current + 1) % slide.length;
    slide[current].className = 'slide opening';
}

var slideshow = setInterval(next, 3700);
