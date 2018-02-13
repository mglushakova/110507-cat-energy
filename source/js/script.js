var toggleButton = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav");

menu.classList.remove("main-nav--opened");
menu.classList.add("main-nav--closed");

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

if(window.matchMedia('(max-width: 768px)').matches) {
  if ( exampleButtonBefore && exampleButtonAfter ) {
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
  }
}

ymaps.ready(function () {
  var myMap = new ymaps.Map("map", {
      center: [59.938631, 30.323055],
      zoom: 16
    }, {
      searchControlProvider: "yandex#search"
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: "Собственный значок метки",
      balloonContent: "Это красивая метка"
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: "default#image",
      // Своё изображение иконки метки.
      iconImageHref: "../img/map-pin.png",
      // Размеры метки.
      iconImageSize: [59, 53],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-20, -60]
    });

  myMap.geoObjects
    .add(myPlacemark);
});
