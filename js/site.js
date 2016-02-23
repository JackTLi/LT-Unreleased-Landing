$(window).load(function() {
    // Animate loader off screen
    $("#logo").addClass("loaded");
		setTimeout(whitebaranimate, 1000);
		setTimeout(showtext, 1200);
});

function whitebaranimate()
{
	$(".white-bar").addClass("through");
}

function showtext()
{
	$(".text").addClass("loaded");
}
