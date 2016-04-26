$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    // Most important owl features
    items: 4,
    itemsCustom: false,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [980, 2],
    itemsTablet: [768, 2],
    itemsTabletSmall: false,
    itemsMobile: [479, 1],
    singleItem: false,
    itemsScaleUp: false,

    //Basic Speeds
    slideSpeed: 200,
    paginationSpeed: 800,
    rewindSpeed: 1000,

    //Autoplay
    autoPlay: true,
    stopOnHover: false,

    // Navigation
    navigation: false,
    navigationText: ["prev", "next"],
    rewindNav: true,
    scrollPerPage: false,

    //Pagination
    pagination: true,
    paginationNumbers: false,

    // Responsive 
    responsive: true,
    responsiveRefreshRate: 200,
    responsiveBaseWidth: window,

    // CSS Styles
    baseClass: "owl-carousel",
    theme: "owl-theme",
    //Auto height
    autoHeight: false,
  });

  $('#special_mall').owlCarousel({
    // Most important owl features
    items: 1,
    itemsCustom: false,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [980, 1],
    itemsTablet: [768, 1],
    itemsTabletSmall: false,
    itemsMobile: [479, 1],
    singleItem: false,
    itemsScaleUp: false,

    //Basic Speeds
    slideSpeed: 300,
    paginationSpeed: 800,
    rewindSpeed: 1000,

    //Autoplay
    autoPlay: true,
    stopOnHover: false,

    // Navigation
    navigation: true,
    navigationText: ["prev", "next"],
    rewindNav: true,
    scrollPerPage: false,

    //Pagination
    pagination: true,
    paginationNumbers: false,

    // Responsive 
    responsive: true,
    responsiveRefreshRate: 200,
    responsiveBaseWidth: window,

    //Auto height
    autoHeight: false,
  });

  $('#used_market').owlCarousel({
    // Most important owl features
    items: 1,
    itemsCustom: false,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [980, 1],
    itemsTablet: [768, 1],
    itemsTabletSmall: false,
    itemsMobile: [479, 1],
    singleItem: false,
    itemsScaleUp: false,

    //Basic Speeds
    slideSpeed: 300,
    paginationSpeed: 800,
    rewindSpeed: 1000,

    //Autoplay
    autoPlay: true,
    stopOnHover: false,

    // Navigation
    navigation: true,
    navigationText: ["prev", "next"],
    rewindNav: true,
    scrollPerPage: false,

    //Pagination
    pagination: true,
    paginationNumbers: false,

    // Responsive 
    responsive: true,
    responsiveRefreshRate: 200,
    responsiveBaseWidth: window,

    //Auto height
    autoHeight: false,
  });
  $(window).load(function () {
    $(".section-main-content").each(function (index, element) {
      console.log($(element).height());
      $(element).find(".nopadding").css("min-height", $(element).height());
    });
  });
});