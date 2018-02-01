var toggleButton = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav");

toggleButton.addEventListener("click", function(event) {
  event.preventDefault();

  if (menu.classList.contains("main-nav--closed")) {
    menu.classList.remove("main-nav--closed");
    menu.classList.add("main-nav--opened");
  } else {
    menu.classList.add("main-nav--closed");
    menu.classList.remove("main-nav--opened");
  }
});

var exampleImageBefore = document.querySelector(".example__image--fat");
var exampleImageAfter = document.querySelector(".example__image--slim");
var exampleButtonBefore = document.querySelector(".example__button--fat");
var exampleButtonAfter = document.querySelector(".example__button--slim");

exampleButtonBefore.addEventListener("click", function() {
  exampleImageBefore.classList.add("example__image--active");
  exampleImageAfter.classList.remove("example__image--active");

  exampleButtonBefore.classList.add("example__button--active");
  exampleButtonAfter.classList.remove("example__button--active");
});

exampleButtonAfter.addEventListener("click", function() {
  exampleImageAfter.classList.add("example__image--active");
  exampleImageBefore.classList.remove("example__image--active");

  exampleButtonAfter.classList.add("example__button--active");
  exampleButtonBefore.classList.remove("example__button--active");
});
