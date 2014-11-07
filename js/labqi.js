$(document).ready(function() {
	$("div.featured-work").mouseenter(function() {
		$(this).addClass("feature-highlight");
	});

	$("div.featured-work").mouseleave(function() {
		$(this).removeClass("feature-highlight");
	});
});