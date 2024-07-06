// doko
let slideIndex4 = 1;

  // Next/previous controls
function plusSlides4(n) {
    showSlides4(slideIndex4 += n);
}

  // Thumbnail image controls
function currentSlide4(n) {
    showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
    let i;
    let slides = document.getElementsByClassName("doko");
    let dots = document.getElementsByClassName("dot-doko");
    if (n > slides.length) {slideIndex4 = 1}
    if (n < 1) {slideIndex4 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex4-1].style.display = "block";
    dots[slideIndex4-1].className += " active";
}

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


// old portfolio
let slideIndexOp = 1;
  // Next/previous controls
function plusSlidesOp(n) {
    showSlidesOp(slideIndexOp += n);
}
  // Thumbnail image controls
function currentSlideOp(n) {
    showSlidesOp(slideIndexOp = n);
}

function showSlidesOp(n) {
    let i;
    let slides = document.getElementsByClassName("portfolio");
    let dots = document.getElementsByClassName("dot-portfolio");
    if (n > slides.length) {slideIndexOp = 1}
    if (n < 1) {slideIndexOp = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexOp-1].style.display = "block";
    dots[slideIndexOp-1].className += " active";
}

//updated carousel
function imgCarousel(slideClass, dotClass, index) {
  let slideIndex = index || 1;
  function showSlides(n) {
    let i;
    let s = document.getElementsByClassName(slideClass);
    let d = document.getElementsByClassName(dotClass)
    if (n > s.length) {slideIndex = 1}
    if (n < 1) {slideIndex = s.length}
    for (i = 0; i< d.length; i++) {
      s[i].style.display = "none";
    }
    for (i = 0; i < d.length; i++) {
      d[1].className = d[i].className.replace(" active","")
    }
    s[slideIndex - 1].style.display="block";
    d[slideIndex - 1].className +=" active"

  }
}

// show the images on loading site
window.onload = function() {
  console.log("fix me later");
  showSlides1(slideIndex1);
  showSlides2(slideIndex2);
  showSlides3(slideIndex3);
  showSlides4(slideIndex4);
  showSlidesOp(slideIndexOp);
}
