
/*=============================================
=            traiff            =
=============================================*/


$(document).ready(function(){
  
  var owl_1 = $('.owl-1');
  var owl_2 = $('.owl-2');
  
  owl_1.owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items: 1,
    // autoplay: true,
    dots: false
  });
  
  owl_2.owlCarousel({
    margin:0,
    loop: true,
    nav: false,
    items: 5,
    dots: false
  });
  
  owl_2.find(".item").click(function(){
    var slide_index = owl_2.find(".item").index(this);
    owl_1.trigger('to.owl.carousel',[slide_index,300]);
  });
  
  // Custom Button
  $('.customNextBtn').click(function() {
    owl_1.trigger('next.owl.carousel',500);
  });
  $('.customPreviousBtn').click(function() {
    owl_1.trigger('prev.owl.carousel',500);
  }); 
});


// side active link


$('.nav a').on('click', function() {

  var scrollAnchor = $(this).attr('data-scroll'),
      scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;

  $('body,html').animate({
      scrollTop: scrollPoint
  }, 500);

  return false;

})


$(window).scroll(function() {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 100) {
      $('.nav').addClass('fixeds');
      $('.wrapper section').each(function(i) {
          if ($(this).position().top <= windscroll - 20) {
              $('.nav a.active').removeClass('active');
              $('.nav a').eq(i).addClass('active');
          }
      });

  } else {

      $('.nav').removeClass('fixeds');
      $('.nav a.active').removeClass('active');
      $('.nav a:first').addClass('active');
  }

}).scroll();


/*=====  End of traiff  ======*/


/*=============================================
=            FOOD SECTION CAROUSEL            =
=============================================*/

$(document).ready(function() {
  
  
  $('#my-carousel').on('initialized.owl.carousel', function() {
    $('.navigator').eq(0).addClass('active');
    console.log('initialized');
  });
  
$('#my-carousel').owlCarousel({
  loop : true,
  autoplay : false,
  // autoplayTimeout : 3000,
  nav : true,
  navText: ['&#x2190;', '&#x2192;'],
  singleItem: true,
  autoHeight: true,
  responsive:{
      0:{
      items:1
      },
      600:{
      items:1
      },
      1000:{
      items:1
      }
    }
  });
  
  $('#my-carousel').on('changed.owl.carousel', function(ev) {
    var item_index = ev.page.index;
    $('.navigator').removeClass('active').eq(item_index).addClass('active');
  });
  
  $('.navigator').on('click', function() {
    var item_no = $(this).data('item'); 
    $('#my-carousel').trigger('to.owl.carousel', [item_no, 1000, true]);
  });
});


/*=====  End of FOOD SECTION CAROUSEL  ======*/


  
  
 /*======================================
  =            Hamburger Menu            =
  ======================================*/

  $(".ham").click(function() {
    $('.rb-main-menu').slideToggle();
    $(this).toggleClass('active');
    $(this).toggleClass('rb-close');
    
  });

  /*=====  End of Hamburger Menu  ======*/

  
/*====================================
=         scroll fixed header            =
====================================*/
// $(document).ready(function() {
//   var $header = $("header"),
//       $clone = $header.before($header.clone().addClass("clone"));
  
//   $(window).on("scroll", function() {
//       var fromTop = $(window).scrollTop();
//       $("body").toggleClass("down", (fromTop > 400));
//   });
// });

$(window).scroll(function() {
  if ($(this).scrollTop() ){  
      $('header').addClass("sticky");
      // $('header').slideDown("sticky");
    }
    else{
      $('header').removeClass("sticky");
    }
  });
    
    
/*=====  End of fixed header  ======*/


$(document).ready(function(){

/*=============================================
=            filter gallery            =
=============================================*/

$('.filters ul li').click(function(){
  $('.filters ul li').removeClass('active');
  $(this).addClass('active');
  
  var data = $(this).attr('data-filter');
  $grid.isotope({
    filter: data
  })
});

var $grid = $(".grid").isotope({
  itemSelector: ".all",
  percentPosition: true,
  masonry: {
    columnWidth: ".all"
  }
})

/*=====  End of filter gallery  ======*/
 

  
  /*=============================================
  =            owl carousel HOME PAGE           =
  =============================================*/
  
  $('.owl-carousel').owlCarousel({
    loop: true,
    nav:true,
    autoplay: true,
    responsive:{
        0:{
            items:1
        }
    }
})
  
  /*=====  End of owl carousel home page  ======*/
  
  
  
/*=============================================
=            traiff            =
=============================================*/



// //in case js in turned off
// $(window).on('load', function () {
//   $("#header-scroll").removeClass("small")
// });

// $(window).scroll(function () {
// var sc = $(window).scrollTop()
// if (sc > 1) {
//   $("#header-scroll").addClass("small")
// } else {
//   $("#header-scroll").removeClass("small")
// }
// });

// //scrollspy
// $(window).on('scroll', function () {
// var sections = $('section')
// , nav = $('nav')
// , nav_height = nav.outerHeight()
// , cur_pos = $(this).scrollTop();
// sections.each(function() {
// var top = $(this).offset().top - nav_height,
//   bottom = top + $(this).outerHeight();

// if (cur_pos >= top && cur_pos <= bottom) {
// nav.find('a').removeClass('active');
// sections.removeClass('active');

// $(this).addClass('active');
// nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
// }
// });
// });

/*=====  End of traiff  ======*/


});