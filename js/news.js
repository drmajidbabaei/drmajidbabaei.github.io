$(document).ready(function () {
  $("#news-slider").owlCarousel({
    items: 1,
    itemsDesktop: [500, 3],
    itemsDesktopSmall: [500, 2],
    itemsMobile: [600, 1],
    navigation: true,
    navigationText: ["", ""],
    pagination: true,
    autoPlay: true,
  });
});
