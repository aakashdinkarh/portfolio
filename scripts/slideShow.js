var slideIndex = [0, 0, 0];
showSlide(slideIndex[0], 0);
showSlide(slideIndex[1], 1);
showSlide(slideIndex[2], 2);

function changeSlide(n, i) {
  slideIndex[i] += n;
  showSlide(slideIndex[i], i);
}
function currentSlide(n, i) {
  slideIndex[i] = n;
  showSlide(slideIndex[i], i);
}
function showSlide(n, i) {
  let slideshows = $(".slideshow-container");
  let slides = slideshows[i].getElementsByClassName("mySlide");
  let dots = slideshows[i].querySelectorAll(".dots span");
  let last = slides.length - 1;

  if (n > last) {
    slideIndex[i] = 0;
  }
  if (n < 0) {
    slideIndex[i] = last;
  }

  $(slides).hide();

  $(dots).removeClass(" active");
  $(slides).removeClass("fade");

  $(slides).eq(slideIndex[i]).show();
  $(slides).eq(slideIndex[i]).addClass(" fade");
  dots[slideIndex[i]].className += " active";
}
