$(function(){
	$(window).scroll(function(){
		$("#float").stop().animate({"top":$(window).scrollTop()+400},450);
		});
});