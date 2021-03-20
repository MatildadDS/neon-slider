// VARIABLES

const imgs = document.querySelectorAll('.slides-cont img');
const next = document.querySelector('.right');
const prev = document.querySelector('.left');
const circles = document.querySelector('.circle');

let index = 0;

// FUNCTIONS

next.addEventListener('click', nextSlide);

function nextSlide(){

    if (index < 5) {

        imgs[index].classList.remove('activ');
        index++;
        imgs[index].classList.add('activ');
    }
    else if (index === 5) {

        imgs[index].classList.remove('activ');
        index = 0;
        imgs[index].classList.add('activ');
    }

    for (i = 0; i < circles.lenght; i++) {

        if (circles[i].getAttribute('data-clic') - 1 === index) {
            circles[i].classListadd('activ-circle');
        } else {
            circles[i].classList.remove('activ-circle');
        }
    }
}

prev.addEventListener('click', prevSlide);

function prevSlide(){

    if (index > 0) {

        imgs[index].classList.remove('activ');
        index--;
        imgs[index].classList.add('activ');
    }
    else if (index === 0) {

        imgs[index].classList.remove('activ');
        index = 5;
        imgs[index].classList.add('activ');
    }

    for (i = 0; i < circles.lenght; i++) {

        if (circles[i].getAttribute('data-clic') - 1 === index) {
            circles[i].classListadd('activ-circle');
        } else {
            circles[i].classList.remove('activ-circle');
        }
    }
}

// Directional keys

document.addEventListener('keydown', keyPressed);

function keyPressed(e){

    if (e.keyCode === 37) {
        prevSlide();
    }
    else if (e.keyCode === 39) {
        nextSlide();
    }
}

// Circles

circles.forEach(circle => {

    circle.addEventListener('click', function () {

        for (i = 0; i < circles.length; i++) {
            circles[i].classList.remove('activ-circle');
        }
        this.classList.add('activ-circle');

        imgs[index].classList.remove('activ');
        index = this.getAttribute('data-clic') - 1;
        imgs[index].classList.add('activ');
    })

})

