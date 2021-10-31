$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>10){
			$("header").addClass("small");

		}else{

			$("header").removeClass("small");
		}
	});
});
