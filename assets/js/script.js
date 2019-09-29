$('.searchTrigger').click(function(){    /* .searchTrigger from HTML, .showSearch from global.CSS */
  $('body').addClass('showSearch');                 /* for opening of search section */
});
$('.searchCloseIcon a').click(function(){           /* for closing of search section */
  $('body').removeClass('showSearch');
});

$('.moreView').click(function(){
  $(this).parents('.itemsCol').find('.moreItems').show(); /* .moreView --- .itemsCol ---- and load .moreItems */
  $(this).parent().hide();
});


 $('.autoplay').slick({    /* Based on breakpoints and quantity of slides will be changed  */
   slidesToShow: 4,                 
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 1000,
   dots:true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
 });

 // header layout start//
  $('.humberger').click(function(){     
    $('body').toggleClass('openNav');
  });
  // $('.humberger').click(function(){
  //   $('.top-main-menu').slideToggle('slow');
  // });
  $('.clickable h2').click(function(){        /* For footer */
    $(this).parents('.findBox').toggleClass('opened').find('.box-wrap');
  });
  // header layout close//

  // cookies modal start //
  $('.cookiesModal').modal('show');   /* Showing cookies modal on the page */
   // cookies modal close //

    // product page layout start //
  $('.plus, .inc-sign').click(function () {    
  		if ($(this).prev().val() < 20) {
      	$(this).prev().val(+$(this).prev().val() + 1);
  		}
  });
  $('.minus').click(function () {
  	if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
  		} else if ($(this).next().val() > 0) {
          $(this).parents('.productCard').removeClass('productAdded')
    }
  });

   // product page - cart slider//

   $('.slider-for').slick({  /* big images */
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
    fade: true,
    asNavFor: '.slider-nav'  /* will be changed by clicking small images */
  });
  $('.slider-nav').slick({   /* small images */
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',  
    dots: false,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          vertical: false,
          verticalSwiping: false,
          dots: true,
          arrows: true
        }
      }
    ]
  });

  // tabs //
  // tabbed content
   // http://www.entheosweb.com/tutorials/css/tabs.asp 
   $(".tab_content").hide();
   $(".tab_content:first").show();

 /* if in tab mode */
   $("ul.tabs li").click(function() {

     $(".tab_content").hide();
     var activeTab = $(this).attr("rel");
     $("#"+activeTab).fadeIn();

     $("ul.tabs li").removeClass("active");
     $(this).addClass("active");

   $(".tab_drawer_heading").removeClass("d_active");
   $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

   });
 /* if in drawer mode */
 $(".tab_drawer_heading").click(function() {

     $(".tab_content").hide();
     var d_activeTab = $(this).attr("rel");
     $("#"+d_activeTab).fadeIn();

   $(".tab_drawer_heading").removeClass("d_active");
     $(this).addClass("d_active");

   $("ul.tabs li").removeClass("active");
   $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
   });


 /* Extra class "tab_last"
    to add border to right side
    of last tab */

  $('.slect > ul > li').click(function(){            
    var selectedInfo = $(this).html();
    $(this).parents('.colorOption').find('.customMenu ul > li').html(selectedInfo);
    $(this).parents('.colorOption').removeClass('infoColor')
  });
  $('.customMenu').click(function(){
    $(this).parents('.colorOption').toggleClass('infoColor');
  });




    // product page layout close //


    // services page layout start //
  $('.filterMobView span').click(function(){         /* for opening menus, options */
    $('.greyBgBox').toggleClass('filter-product');
  });
   // services page layout close //


   // countdown-timer page layout start //

   document.addEventListener('DOMContentLoaded', () => {
    const endDate = new Date("Sept 30, 2019 12:00:00").getTime();

    const timer = setInterval(function () {

      let now = new Date().getTime();
      let t = endDate - now;

      if (t >= 0) {

        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);

        document.getElementById("timer-days").innerHTML = days;

        document.getElementById("timer-hours").innerHTML = ("0" + hours).slice(-2);

        document.getElementById("timer-mins").innerHTML = ("0" + mins).slice(-2);

        document.getElementById("timer-secs").innerHTML = ("0" + secs).slice(-2);

      } else {

        document.getElementById("timer").innerHTML = "The countdown is over!";

      }

    }, 1000);
  })
 
  // countdown-timer page layout close //

