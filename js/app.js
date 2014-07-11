$(document).ready(function() {
	$(function() {
    FastClick.attach(document.body);
	});
});

$('.expand').click(function() {
	$(this).children().toggleClass('rotate');
	$(this).next().slideToggle();
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

// $('.dropdown > a').click(function(target) {
// 	console.log('scrolltop!');
// 	target.scrollTop(300);
// })

//Smooth Scrolling to anchor
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	      	$('html,body').scrollTop(target.offset().top -55);
	        // $('html,body').animate({
	        //   scrollTop: target.offset().top -55
	        // }, 300);
	        return false;
	      }
	    }
	  });
	});

