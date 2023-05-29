jQuery.noConflict()

jQuery(function($) {

  /**************
   PAGE LOADER
  ***************/
  // Wait for window load
  $(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").delay(1500).fadeOut('slow');
  });



  /****************************
   HEADER HIDE ON SCROLL DOWN
   HEADER SHOW ON SCROLL UP
   HEADER HEIGHT RESIZE
  *****************************/
  // Get the header element
  const header = $('header');

  // Variables to track scroll position
  let prevScrollPos = $(window).scrollTop();
  let isScrollingUp = false;

  // Function to handle scroll event
  function handleScroll() {
    // Current scroll position
    const currentScrollPos = $(window).scrollTop();

    // Determine scroll direction
    if (currentScrollPos > prevScrollPos) {
      isScrollingUp = false;
    } else {
      isScrollingUp = true;
    }

    // Update previous scroll position
    prevScrollPos = currentScrollPos;

    // Toggle header visibility and background based on scroll direction and position
    if (isScrollingUp && currentScrollPos === 0) {
      header.css({ opacity: '1', background: 'none' });
      $('.standard-logo').show();
      $('.sticky-logo').hide();
    } else if (isScrollingUp) {
      header.css({opacity: '1', background: '#fff' });
      $('.standard-logo').hide();
      $('.sticky-logo').show();
    } else {
      header.css({ opacity: '0' });
    }
  }

  // Attach scroll event listener
  $(window).scroll(handleScroll);



  /*****************
   PORTFOLIO GRID
  ******************/
  $('#portfolio_grid_wrapper .grid-item .item').each(function() {
    const img_src = $(this).children('a').attr('data-src');
    // console.log(img_src);
    $(this).children('a').css('background-image', 'url(' + img_src + ')');
  });

});




/********************
 GSAP Code
*********************/
gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.create({
// 	trigger: '#pinned',
// 	pin: '#banner_img',
// 	pinSpacing: false,
// 	anticipatePin: 1,
// 	markers: true,
// 	scrub: 2,
// 	start: 'top top',
// 	end: 'bottom top'
// });

gsap.to('#banner_img', {
  duration: 1000,
  scrollTrigger: {
    trigger: '#pinned',
    pin: '#banner_img',
    start: 'top top',
    // markers: true,
    scrub: 2
  }
});

gsap.to('#banner_content', {
  duration: 1200,
  y: '-40vh',
	scrollTrigger: {
		trigger: '#pinned',
		// markers: true,
		scrub: true,
		start: 'top top'
	}
});

gsap.to("#banner_img", {
  scrollTrigger: {
    trigger: "#banner_overlay",
    start: "top bottom",
    pin: true,
    // markers: true,
    scrub: true
  },
   opacity: 0.5
});