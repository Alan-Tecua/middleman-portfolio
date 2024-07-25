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

let backBtn = document.getElementById("backToTop");
let navBar = document.getElementById("navBar")

window.onscroll = function() {
  scrollFunction()
};

const isActive = () => backBtn.classList.contains("active");

function scrollFunction() {
  if (document.body.scrollTop > (window.innerHeight - 80 ) || document.documentElement.scrollTop > (window.innerHeight - 80)) {
    backBtn.classList.add=("active");
  } else {
    if (isActive()) {
      backBtn.classList.remove = ("active");
    }
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.display = "none";
}

window.addEventListener('load', function () {
  document.getElementById('loading-screen').style.display = 'none';
});

window.onload = function () {
  // console.log("fix me later");
  window.cFitit = imgCarousel("fitit", "dot-fitit", 1);
  window.cCanvas = imgCarousel("canvas", "dot-canvas", 1);
  window.cWeather = imgCarousel("weatherAPI", "dot-weather", 1);
  window.cPortfolio = imgCarousel("portfolio", "dot-portfolio", 1);
  window.cDoko = imgCarousel("doko", "dot-doko", 1);
};

// Tr

// var x = 9;
// x = x>>2;
// x = x<<4;
// x = x ^ 3;
// console.log(x);



//op1
// var index = 0;
// do {
//   index++;
//   console.log(index);
// }
// while (index < 10);

//op2
// for (var index = 1; index <= 10; index++);
// console.log(index); //no

// for (var index = 0; index <= 10; index++);
// console.log(index); //no

// var index = 0;
// do {
//   console.log(++index);
// }
// while (index < 10); // yes

// var index = 0;
// do {
//   console.log(index++);
// }
// while (index < 10); // no

// var index = 1;
// do {
//   console.log(++index);
// }
// while (index <= 10); // no

//op3

// const myArray = [1,3,5,9,23]
// const myIterable = myArray[Symbol.iterator]();


// const myIterable = myArray.Iterator(); //no
// const myIterable = myArray(Symbol.iterator); //no
// const myIterable = myArray.Symbol.iterator(); // no
// const myIterable = myArray[Iterator]; //no

// console.log(myIterable.next());
// console.log(myIterable.next());
// console.log(myIterable.next());
// console.log(myIterable.next());
