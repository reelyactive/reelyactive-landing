/**
 * Copyright reelyActive 2018-2019
 * We believe in an open Internet of Things
 */


const SLIDE_PERIOD_MILLISECONDS = 2400;
const INITIAL_SLIDE_INDEX = 0;


let questions = document.getElementById('questions');
let questionSlides = questions.getElementsByClassName('slideshow-slide');


function slideshow(slides, currentIndex, period) {
  for(let slideIndex = 0; slideIndex < slides.length; slideIndex++) {
    slides[slideIndex].style.display = 'none'; 
  }
  slides[currentIndex].style.display = 'block';

  let nextIndex = (currentIndex + 1) % slides.length;
  setTimeout(slideshow, period, slides, nextIndex, period);
}


// Start the slideshow
slideshow(questionSlides, INITIAL_SLIDE_INDEX, SLIDE_PERIOD_MILLISECONDS);
