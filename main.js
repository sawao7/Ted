$(function(){
  $('.slide_movie').slick({
    autoplay:true,
    dots:true,
    infinite: true,
    // arrows:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow: '<img src="前への矢印画像のパス" class="slide-arrow prev-arrow">',
    // nextArrow: '<img src="次への矢印画像のパス" class="slide-arrow next-arrow">',
    // prevArrow: '<button class="slide-arrow prev-arrow"><</button>',
    // nextArrow: '<button class="slide-arrow next-arrow">></button>',
    autoplaySpeed:5000
  });

});
