(function ($) {
  "use strict";

  var review = $('.player_info_item');
  if (review.length) {
    review.owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      autoplay: true,
      margin: 40,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      navText: [
        '<img src="img/icon/left.svg" alt="">',
        '<img src="img/icon/right.svg" alt="">'

      ],
      responsive: {
        0: {
          margin: 15,
        },
        600: {
          margin: 10,
        },
        1000: {
          margin: 10,
        }
      }
    });
  }
  $('.popup-youtube, .popup-vimeo').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });



  var review = $('.textimonial_iner');
  if (review.length) {
    review.owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: false,
      responsive: {
        0: {
          margin: 15,
        },
        600: {
          margin: 10,
        },
        1000: {
          margin: 10,
        }
      }
    });
  }
  $(document).ready(function() {
    $('select').niceSelect();
  });
  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
  });

//   $(document).ready(function(){

//     var owl_1 = $('#owl-1');
//     var owl_2 = $('#owl-2');

//     owl_1.owlCarousel({
//       loop:true,
//       margin:10,
//       nav:false,
//       items: 1,
//       dots: false,
//       navText: false,
//       autoplay: true,
      
//     });
//  owl_2.find(".item").click(function(){
//     var slide_index = owl_2.find(".item").index(this);
//     owl_1.trigger('to.owl.carousel',[slide_index,300]);
//   });

//     owl_2.owlCarousel({
//       margin:50,
//       nav: true,
//       items: 3,
//       dots: false,
//       center: true,
//       loop:true,
//       navText: false,
//       autoplay: true,
//       center: true
//     });
    
//   });
 

$('.counter').counterUp({
  time: 2000
});

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 300,
    infinite: true,
    asNavFor: '.slider-nav-thumbnails',
    autoplay:true,
    pauseOnFocus: true,
    dots: true,
  });
 
  $('.slider-nav-thumbnails').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
    focusOnSelect: true,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
        }
      }
    ]
  });
 
  //remove active class from all thumbnail slides
  $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
 
  //set active class to first thumbnail slides
  $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');
 
  // On before slide change match active thumbnail to current slide
  $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
    $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
 });
 
 //UPDATED 
   
 $('.slider').on('afterChange', function(event, slick, currentSlide){   
   $('.content').hide();
   $('.content[data-id=' + (currentSlide + 1) + ']').show();
 }); 

 $('.gallery_img').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});


      //   Video  English / Hindi
 $(document).ready(function () {
        $('#tabs a').click(function(){
          var t = $(this).attr('id');
            if($(this).hasClass('inactive')){ //this is the start of our condition 
                $('#tabs a').addClass('inactive');           
                $(this).removeClass('inactive');

                $('.tabhide').hide();
                $('#'+ t + 'C').fadeIn('slow');
            }
        });
});
  
        
/*---------------------
 Video-lacture carousel
---------------------*/
  
    var review = jQuery('.video-lacture-carousel');
    review.owlCarousel({
    loop:true,
    nav:true,
        margin:0,
    dots:false,
    center:true,
    autoplay:true,
    responsive:{
      0:{
        items:1
      },
      320:{
        items:1
      },
      640:{
        items:2
      },
      768:{
        items:3
      },
      1000:{
        items:3
      }
    }
  });


/*---------------------
 purchased-courses carousel
---------------------*/
  
    var review = jQuery('.purchased-courses-carousel');
    review.owlCarousel({
    loop:true,
    nav:true,
    margin:20,
    dots:true,
    center:true,
    autoplay:true,
    responsive:{
      0:{
        items:1
      },
      320:{
        items:1
      },
      640:{
        items:2
      },
      768:{
        items:3
      },
      1000:{
        items:3
      }
    }
  });



/*---------------------
 popular-courses carousel
---------------------*/
  
    var review = jQuery('.popular-courses-carousel');
    review.owlCarousel({
    loop:true,
    nav:false,
    margin:20,
    dots:true,
    center:true,
    autoplay:true,
    responsive:{
      0:{
        items:1
      },
      320:{
        items:1
      },
      640:{
        items:2
      },
      768:{
        items:3
      },
      1000:{
        items:3
      }
    }
  });

// courses Create Function
$(function () {

    var Accordion = function (el, multiple) {
        this.el = el || {};
        //More Than One Menu Open
        this.multiple = multiple || false;

        var dropdownlink = this.el.find('.dropdownlink');
        dropdownlink.on('click', {
            el: this.el,
            multiple: this.multiple
        },
            this.dropdown
        );
    };

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el,
            $this = $(this),
            //ul submenuItems
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            //Show Only one Menu at the same time
            $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
        }

    };


    //Set Object
    var accordion = new Accordion($('.accordion-menu'), false);
});

//====FAQ
let faqLabel=document.querySelectorAll(".faq-label");

faqLabel.forEach(item=>item.onclick=()=>{
   //selektuje Answer
   item.nextElementSibling.classList.toggle('active1');
   
   
   let labelIcon=item.lastElementChild;
   let icons=labelIcon.lastElementChild;
   icons.classList.toggle('rotate');
 
   
});


}(jQuery));