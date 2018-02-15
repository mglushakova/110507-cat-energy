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

function initMap() {
  var centerMobile = {lat: 59.938821, lng: 30.323040};
  var centerDesktop = {lat: 59.93917, lng: 30.31964};
  var imageMobile = {
    url: "img/map-pin.png",
    scaledSize: new google.maps.Size(59, 53)
  };
  var imageTablet = {
    url: "img/map-pin.png",
    scaledSize: new google.maps.Size(123, 106)
  };
  var markerPosition = {lat: 59.938821, lng: 30.323040};

  if(window.matchMedia('(max-width: 767px)').matches) {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: centerMobile
    });

    var marker = new google.maps.Marker({
      position: markerPosition,
      map: map,
      icon: imageMobile
    });
  } else if(window.matchMedia('(max-width: 1299px)').matches) {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: centerMobile
    });

    var marker = new google.maps.Marker({
      position: markerPosition,
      map: map,
      icon: imageTablet
    });
  } else {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: centerDesktop
    });

    var marker = new google.maps.Marker({
      position: markerPosition,
      map: map,
      icon: imageTablet
    });
  }
}
