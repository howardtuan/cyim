$(function(){
	// 點選功能表
	$("a[href^=#]:not([href=#])").click(function(){
		// 取得待顯示內容的位置
		var target = $($(this).attr("href")).offset().top;
		
		// 將座標減70px
		target -= 120;
		
		// 平滑捲動到指定位置
		$("html, body").animate({scrollTop: target}, 500);

		return false;
	});
});

