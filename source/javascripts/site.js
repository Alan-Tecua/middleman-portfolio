// fitit
let slideIndex1 = 1;

  // Next/previous controls
function plusSlides1(n) {
    showSlides1(slideIndex1 += n);
}

  // Thumbnail image controls
function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
    let i;
    let slides = document.getElementsByClassName("fitit");
    let dots = document.getElementsByClassName("dot-fitit");
    if (n > slides.length) {slideIndex1 = 1}
    if (n < 1) {slideIndex1 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex1-1].style.display = "block";
    dots[slideIndex1-1].className += " active";
}


// canvas
let slideIndex2 = 1;
  // Next/previous controls
function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}
  // Thumbnail image controls
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("canvas");
    let dots = document.getElementsByClassName("dot-canvas");
    if (n > slides.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex2-1].style.display = "block";
    dots[slideIndex2-1].className += " active";
}

// weather
let slideIndex3 = 1;
  // Next/previous controls
function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}
  // Thumbnail image controls
function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
    let i;
    let slides = document.getElementsByClassName("weatherAPI");
    let dots = document.getElementsByClassName("dot-weather");
    if (n > slides.length) {slideIndex3 = 1}
    if (n < 1) {slideIndex3 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex3-1].style.display = "block";
    dots[slideIndex3-1].className += " active";
}

// show the images on loading site
window.onload = function() {
  console.log("hello from JS");
  showSlides1(slideIndex1);
  showSlides2(slideIndex2);
  showSlides3(slideIndex3);
}
