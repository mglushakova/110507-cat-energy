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
