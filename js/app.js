const scrolls = document.querySelectorAll('.scroll');
console.log(scrolls)
let counter = 0;

scrolls.forEach((slide, index) => {
    slide.style.top = `${index * 100}%`;
})

// slider js

const slides = document.querySelectorAll('.slide');
console.log(slides)

slides.forEach((slide, index) => {
    slide.style.top = `${index * 100}%`;
})

const goPrev = () => {
    counter--
    slideImage()
    console.log("prev")
}

const goNext = () => {
    counter++
    slideImage()
}

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateY(-${counter * 100}%)`;
    })
}

/// right to left slide

const rLslides = document.querySelectorAll('.rl-slide');
let rlCounter = 0;
rLslides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
})

const rLslideImage = () => {
    rLslides.forEach((slide) => {
        slide.style.transform = `translateX(-${rlCounter * 100}%)`;
    })
}

const rlNext = () => {
    if (rLslides.length+1 > rlCounter) {
        rlCounter++;
        rLslideImage();
    }
}
const rlPrev = () => {
    if (rlCounter >= 0) {
        rlCounter--;
        rLslideImage();
    }
}





