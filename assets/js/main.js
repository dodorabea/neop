(function($) {
    "use strict";
/*=============Loading================*/
    $(window).on('load',function(){
      setTimeout(function(){
      $('.page-loader').fadeOut('slow');
      },4000);
    });
    
/*=============Loading================*/
var $loader = document.querySelector('.loader')

window.onload = function() {
  $loader.classList.remove('loader--active')
};
/*=============sticky menu================*/ 
var header = $('.menu-sticky');
var win = $(window);
win.on('scroll', function() {
   var scroll = win.scrollTop();
   if (scroll < 300) {
       header.removeClass("sticky");
   } else {
       header.addClass("sticky");
   }
});

/*=============sticky menu================*/ 
/*==============================text-slider==================================*/

if ($(".text-slider").length == 1) {
  var typed_strings = $(".text-slider-items").text();
  var typed = new Typed(".text-slider", {
  strings: ["prespective", "Creative", "design","inovvation"],
  typeSpeed: 30,
  loop: true,
  
  backDelay: 500,
  backSpeed: 10,
  startDelay: 800,
  infinite: true,
  //loopCount: 5,
  // show cursor
  showCursor: false,
  // character for cursor
  cursorChar: "|",
  // attribute to type (null == text)
  attr: null,
  });
}


    /*Bg-section*/
    window.sections = [...document.querySelectorAll('.section')];
    window.lastScrollTop = window.pageYOffset;
    
    document.body.style.background = window.sections[0].getAttribute('data-bg');
    document.body.style.color = window.sections[0].getAttribute('data-text');
    
    window.addEventListener('scroll', onScroll);
    
    function onScroll() {
      const scrollTop = window.pageYOffset;
      
      const section = window.sections
        .map(section => {
          const el = section;
          const rect = el.getBoundingClientRect();
          return {el, rect};
        })
        .find(section => section.rect.bottom >= (window.innerHeight * 0.25));
      document.body.style.background = section.el.getAttribute('data-bg');
      document.body.style.color = section.el.getAttribute('data-text');
    }
	
/*==============================marquee==================================*/

    
/*==============================scrollTop init==================================*/
var totop = $('#scrollUp'); 
if(totop.length){	
win.on('scroll', function() {
  if (win.scrollTop() > 150) {
    totop.fadeIn();
  } else {
    totop.fadeOut();
  }
});
totop.on('click', function() {
  $("html,body").animate({
    scrollTop: 0
  }, 500)
});
}
/*==============================modal-open==================================*/
  // Open Modal
  jQuery('.modal-open').click(function() {
    jQuery('.modal').fadeIn();
  });
  
  // Close Modal
  jQuery('.modal .close').click(function() {
    jQuery('.modal').fadeOut();
  });

/*==============================magic==================================*/

  $(document).ready(function() {
    var $magic = $(".magic"),
        $scene = $(".scene"),
        magicWHalf = $magic.width() / 2;
    $scene.on("mousemove", function(e) {
      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      $magic.css({ left: x - magicWHalf, top: y - magicWHalf });
    });
  });


/*==============================swiper==================================*/
  /*const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: false,
    rtl:true,
    mousewheel: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
      formatFractionCurrent: function (number) {
              return ('0' + number).slice(-2);
          },
          formatFractionTotal: function (number) {
              return ('0' + number).slice(-2);
          },
          renderFraction: function (currentClass, totalClass) {
              return '<span class="' + currentClass + '"></span>' +
                     '  ' +
                     '<span class="' + totalClass + '"></span>';
          }
    },
    scrollbar: {
          el: '.swiper-scrollbar',
              draggable: true,
        },
        
  });*/

  AOS.init({
    duration:1400,
    easing:'ease-in-cubic',
    disable: 'mobile',

  });
 
/*sidenav*/
class SideNav {
  constructor () {
    this.sideNavEl = document.querySelector('.js-side-nav');
    this.sideNavContainerEl = document.querySelector('.js-side-nav-container');
    this.showButtonEl = document.querySelector('.js-menu-open');
    this.closeButtonEl = document.querySelector('.js-menu-close');
    
    this.openSideNav = this.openSideNav.bind(this);
    this.closeSideNav = this.closeSideNav.bind(this);
    this.blockClicks = this.blockClicks.bind(this);
    this.onTransitionEnd = this.onTransitionEnd.bind(this);
    
    this.addEventListeners();
  }
  
  addEventListeners() {
    this.showButtonEl.addEventListener('click', this.openSideNav);
    this.closeButtonEl.addEventListener('click', this.closeSideNav);
    this.sideNavEl.addEventListener('click', this.blockClicks);
    this.sideNavContainerEl.addEventListener('click', this.closeSideNav);
  }
 
  blockClicks(evt) {
    evt.stopPropagation();
  }
  
  onTransitionEnd(evt) {
    this.sideNavContainerEl.classList.remove('side-nav-animatable');
    this.sideNavContainerEl.removeEventListener('transitionend', this.onTransitionEnd);
  }
  
  openSideNav() {
    this.sideNavContainerEl.classList.add('side-nav-animatable');
    this.sideNavContainerEl.classList.add('side-nav-visible');
    this.sideNavContainerEl.addEventListener('transitionend', this.onTransitionEnd);
  }
  
  closeSideNav() {
    this.sideNavContainerEl.classList.add('side-nav-animatable');
    this.sideNavContainerEl.classList.remove('side-nav-visible');
    this.sideNavContainerEl.addEventListener('transitionend', this.onTransitionEnd);
  }
}
new SideNav();


window.addEventListener('load', (e) => {
  document.body.classList.add('loaded');
});


})(jQuery);






