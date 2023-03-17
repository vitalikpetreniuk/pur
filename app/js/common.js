$(function() {
  initFixedHeader();
  initHeaderSearch();
  initMobileNav();
  initSlickSlider();
  initSlickSlider2();
  initGallerySlider();
  initSlickSliderCenter();
  initPromoSlider();
  initTabs();
  initAccordion();
  initOpenDropCategoryFilter();
  initChangeImageHover();
  initOpenBlock();
  initCustomSelect();
  initBlocksAnimate();
});

function initFixedHeader() {
  window.onscroll = function() {myFunction()};
  var sticky = header.offsetTop;
  function myFunction() {
    if (window.pageYOffset > sticky) {
      $('#header').addClass("sticky");
    } else {
      $('#header').removeClass("sticky");
    }
  }
}
function initHeaderSearch() {
  $('.form-search-btn').on('click', function(){
    $(this).closest('.form-search').toggleClass('open');
    return false;
  });
  $(document).click(function(event) {
    if ($(event.target).closest(".form-search .search").length) return;
    $(".form-search").removeClass('open');
    event.stopPropagation();
  });
}
function initMobileNav(){
  $('.mob-btn').on('click', function(){
    $(this).closest('#nav').toggleClass('active');
    $('#nav .nav-menu').fadeOut("slow");
    $('#nav.active .nav-menu').fadeIn("slow");
    $('body').toggleClass('open-nav');
    return false;
  });
};
function initSlickSlider() {
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000
  });
}
function initSlickSlider2() {
  $('.before-after-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    // autoplay: true,
    autoplaySpeed: 3000
  });
}
function initGallerySlider() {
  $('.gallery-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}
function initSlickSliderCenter() {
	$('.slider-quote').slick({
		slidesToShow: 3,
		infinite: false,
		draggable: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					infinite: true,
				}
			}
		]
	});

	window.matchMedia('(max-width: 768px)').addEventListener('change', windowSize)

	function windowSize(ma) {
		if ((ma && ma.matches) || $(window).width() <= 768) {

			$('.slider-quote').slick('slickRemove');
		} else {

			// $(window).on( "load", function() {
				
				$('.slider-quote').slick('slickAdd',"<div class='slider-quote__slide slider-quote__slide_empty slider-slide'></div><div class='slider-quote__slide slider-quote__slide_empty slider-slide'></div>");
			// });
		}
	}windowSize();
}
function initPromoSlider() {
  $('.promo-section-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false
        }
      }
    ]
  });
}
function initTabs(){
  $('.tabset .tab-control').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.tabset').find('.tab').removeClass('active').eq($(this).index()).addClass('active');
      return false;
  });
}
function initAccordion(){
  $('.accordion .opener').on('click', function() {
    if($(this).closest('li').hasClass('active')){
      $(this).closest('li').removeClass('active');
      $(this).closest('li').find('.accordion-slide').slideUp();
    } else {
      $(this).closest('.accordion').find('.accordion-slide').slideUp();
      $(this).closest('.accordion').find('li').removeClass('active');
      $(this).closest('li').addClass('active');
      $(this).closest('li').find('.accordion-slide').slideDown();
    }
    return false;
  });
}
function initOpenDropCategoryFilter(){
  $(document).click(function(event) {
    if ($(event.target).closest(".categories-list-menu").length) return;
      $('.expanded-opener').removeClass('active');
      $(".categories-list-menu").removeClass('open');
      event.stopPropagation();
  });
  $('.expanded-opener').on('click', function() {
    $(this).toggleClass('active').siblings('.categories-list-menu').toggleClass('open');
    return false;
  });
};
function initChangeImageHover() {
  if(window.matchMedia("screen and (min-width: 1024px)").matches==true) {
    $('.change-img').on('mouseenter', function () {
    console.log('hover');
    $('.text-image-block .image .change-img').attr('src', $(this).data('image'));
    })
  }
}
function initOpenBlock(){
  $('.column-border-list .more, .column-border-list .text .add-something').on('click', function() {
    $(this).closest('.column-border-list .text');
    $(this).siblings('.expanded').slideToggle();
    $('.column-border-list .text .add-something').toggleClass('open-text');
    return false;
  });
}
function initCustomSelect(){
  $('#treatment_tag').select2({
    placeholder: "Treatment",
  })
  $('#treatment_category').select2({
    placeholder: "Category",
  })
  $('#condition_tag').select2({
    placeholder: "Condition",
  })
  $('#condition_category').select2({
    placeholder: "Category",
  })
}
function initBlocksAnimate(){
  $('.post').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
    offset: 100
  });
  $('.post2').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated lightSpeedIn', // Class to add to the elements when they are visible
    offset: 100
  });
  $('.post3').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated flipInX', // Class to add to the elements when they are visible
    offset: 100
  });
  $('.post4').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated bounceInRight', // Class to add to the elements when they are visible
    offset: 100
  });
  $('.post5').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated bounceInLeft', // Class to add to the elements when they are visible
    offset: 100
  });
  $('.post6').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInLeft', // Class to add to the elements when they are visible
    offset: 100
  });
  $('.post7').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInRight', // Class to add to the elements when they are visible
    offset: 100
  });
  $('.post8').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
    offset: 100
  });
}



// if($('.swiper').length) {

// 	new Swiper('.slider-quote', {

// 		navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 		},
// 		slidesPerView: 'auto',
// 		// slidesPerView: 3,
// 		centeredSlides: true,
// 	});
// };