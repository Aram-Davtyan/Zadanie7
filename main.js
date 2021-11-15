$(document).ready(function () {

      $('.slider').slick({
          dots: true,
          speed: 400,
          slidesToShow: 4,
          slidesToScroll: 4,


          responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 7,
                slidesToScroll: 7,
              }
            }
            ]

      });
  });
