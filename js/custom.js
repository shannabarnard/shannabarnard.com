/**	

	Custom JS
	
	1. MOBILE MENU	
	2. MENU SMOOTH SCROLLING
	3. PRELOADER
	4. CALL TO ABOUT
	5. BOTTOM TO UP 
	6. PARALLAX HEADER
	7. HIRE ME SCROLL
	
	
**/

jQuery(function($){


	/* ----------------------------------------------------------- */
	/*  1. Mobile MENU
	/* ----------------------------------------------------------- */

    jQuery(".button-collapse").sideNav();


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
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class
	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href=#"+id+"]").parent().addClass("active");
	   }           
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

	
});
