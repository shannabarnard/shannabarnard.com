/**	

	Custom JS
	
	1. MOBILE MENU	
	2. MENU SMOOTH SCROLLING
	3. PRELOADER
	4. CALL TO ABOUT
	5. BOTTOM TO UP 
	6. PARALLAX HEADER
	7. HIRE ME SCROLL
	8. TESTIMONIAL SLIDER
	
	
**/

jQuery(function($){


	/* ----------------------------------------------------------- */
	/*  1. Mobile MENU
	/* ----------------------------------------------------------- */

    jQuery('.button-collapse').sideNav({
      closeOnClick: true // Closes side-nav on <a> clicks
    });

	/* ----------------------------------------------------------- */
	/*  2. MENU SMOOTH SCROLLING
	/* ----------------------------------------------------------- */ 
	
	//MENU SCROLLING WITH ACTIVE ITEM SELECTED

	// Cache selectors
	var lastId,
	topMenu = $(".menu-scroll"),
	topMenuHeight = topMenu.outerHeight()+13,
	// All list items
	menuItems = topMenu.find("a"),
	// Anchors corresponding to menu items
	scrollItems = menuItems.map(function(){
	  var item = $($(this).attr("href"));
	  if (item.length) { return item; }
	});

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = $(this).attr("href"),
	      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+15;

	  jQuery('html, body').stop().animate({ 
	      scrollTop: offsetTop
	  }, 900);
	  e.preventDefault();
	});

	// Bind to scroll
	jQuery(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });         
	})
    
	/* ----------------------------------------------------------- */
	/*  3. PRELOADER 
	/* ----------------------------------------------------------- */ 

	jQuery(window).load(function() { // makes sure the whole site is loaded
      $('.progress').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(100).css({'overflow':'visible'});
    })
	  
	/* ----------------------------------------------------------- */
	/* 4. CALL TO ABOUT
	/* ----------------------------------------------------------- */ 
	
	jQuery(".call-to-about").click(function() {
    jQuery('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
	});

	/* ----------------------------------------------------------- */
	/* 5. BOTTOM TO UP
	/* ----------------------------------------------------------- */ 

	jQuery(".up-btn").click(function() {
    jQuery('html,body').animate({
        scrollTop: $("#header").offset().top},
        'slow');
	});

	/* ----------------------------------------------------------- */
	/* 6. PARALLAX HEADER
	/* ----------------------------------------------------------- */ 

	jQuery('.parallax').parallax();

	/* ----------------------------------------------------------- */
	/* 7. HIRE ME SCROLL
	/* ----------------------------------------------------------- */ 

	jQuery(".hire-me-btn").click(function(e) {
		e.preventDefault();
    jQuery('html,body').animate({
        scrollTop: $("#footer").offset().top},
        'slow');
	});

	/* ----------------------------------------------------------- */
	/*  8. TESTIMONIAL SLIDER (Owl Carousel)
	/* ----------------------------------------------------------- */

	var owl2 = $("#owl-carousel2"); 
    owl2.owlCarousel({
        items : 2, //4 items above 1024px browser width
        itemsDesktop : [1024,2], //3 items between 1024px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //1 items between 600 and 0
        itemsMobile : 1 // itemsMobile disabled - inherit from itemsTablet option
    });

    // Slide Navigation
    jQuery(".next2").click(function(){
        owl2.trigger('owl.next');
    });

    jQuery(".prev2").click(function(){
        owl2.trigger('owl.prev');
    });
	
});
