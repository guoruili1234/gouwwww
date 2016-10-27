;(function($){
	var mySwiper = new Swiper ('.swiper-container', {
	    loop: true,
	    autoplay:2000,
	    pagination: '.swiper-pagination',
	  })
	$("#kf").on('tap',function(){
		$('.mark').css({
			'bottom':"0"
		})
		$(".tan").show();
		$(".wei").hide();
	})
	$('#open').on('tap',function(){
		$(".tan").hide();
		$(".wei").show();
	})
	$("#qu,#op,#qx").on('tap',function(){
		$('.mark').css({
			'bottom':"-100%"
		})
	})
	$('.back').on('click',function(){
		window.history.go(-1);
	})
})(Zepto)