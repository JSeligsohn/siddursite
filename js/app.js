$(document).ready(function() {
	$(function() {
    FastClick.attach(document.body);
	});
});

$('.expand').click(function() {
	$(this).next().slideToggle();
});



