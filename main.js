const mySlide = document.querySelectorAll(".myslide")
const dot = document.querySelectorAll(".dot");
let counter = 1;
slideFun(counter);

let timer = setInterval(autoSlide, 4500);
function autoSlide() {
  counter += 1;
  slideFun(counter);
}
function plusSlides(n) {
  counter += n;
  slideFun(counter);
  resetTimer();
}
function currentSlide(n) {
  counter = n;
  slideFun(counter);
  resetTimer();
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 4500);
}

function slideFun(n) {
  let i;
  for (i = 0; i < mySlide.length; i++) {
    mySlide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  if (n > mySlide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = mySlide.length;
  }
  mySlide[counter - 1].style.display = "block";
  dot[counter - 1].className += " active";
}
