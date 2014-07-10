$(document).ready(function() {
	$(function() {
    FastClick.attach(document.body);
	});
});

$('.expand').click(function() {
	$(this).next().slideToggle();
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

