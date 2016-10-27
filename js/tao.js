;(function($){

	//点击list
	
	$(".list li").on('click',function(){
		var i=$(this).index()
		$(this).addClass('bg').siblings().removeClass('bg');
		$('.main section').eq(i).show().siblings().hide();
	})
	$(".nav li").on('click',function(){
		var i=$(this).index()
		$(this).addClass('bg1').siblings().removeClass('bg1');
		$('.main section').eq(i).show().siblings().hide();
	})
	
})(Zepto)