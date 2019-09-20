$(function()
{
	$(".navbar a, footer").on("click", function(event)
	{
		event.preventDefault();
		var hash = this.hash;

		$('body,html').animate({scrollTop: $(hash).offset().top}, 900, function(){windows.location.hash = hash;})
		
	});
})