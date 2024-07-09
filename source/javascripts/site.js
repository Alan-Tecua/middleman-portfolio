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
      d[i].className = d[i].className.replace(" active","")
    }
    s[slideIndex - 1].style.display="block";
    d[slideIndex - 1].className +=" active"
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  showSlides(slideIndex);
  return {
    plusSlides: plusSlides,
    currentSlide: currentSlide
  };

}

window.onload = function () {
  // console.log("fix me later");
  window.cFitit = imgCarousel("fitit", "dot-fitit", 1);
  window.cCanvas = imgCarousel("canvas", "dot-canvas", 1);
  window.cWeather = imgCarousel("weatherAPI", "dot-weather", 1);
  window.cPortfolio = imgCarousel("portfolio", "dot-portfolio", 1);
  window.cDoko = imgCarousel("doko", "dot-doko", 1);
};
