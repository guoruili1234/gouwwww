;(function($){
	$("#back").on('click',function(){
		window.history.go(-1);
	})
	$("#close").on('click',function(){
		window.history.go(-1);
	})

	$('#next').on('tap',function(){
		$('.mark').show();
		$('.mark1').animate({'top':'0','bottom':'0'},1000);
		var txt=$("#num").val();
		console.log(txt);
		$('#text').text(txt);
	})
	$("#remove").on('tap',function(){
		$('.mark').hide();
		$('.mark1').animate({'top':'-100%'},1000)
	})
	$("#sure").on('tap',function(){
		//$('.mark').hide();
		$('.mark1').animate({'top':'-150%'},1000);
		$('.mark2').animate({'top':'0','bottom':'0'},1000);
		//alert("跳转成功！")
	})

	$("#remove1").on('tap',function(){
		$('.mark').hide();
		$('.mark2').animate({'top':'-100%'},1000)
	})
	$("#sure1").on('tap',function(){
		$('.mark').hide();
		$('.mark1').animate({'top':'-150%'},1000);
		$('.mark2').animate({'top':'-100%'},1000);
		//alert("跳转成功！")
	})
	var i=0;
	$('.btn span').on('tap',function(){
		$(this).eq(i).addClass('bg2').siblings().removeClass('bg2');
	})
	

})(Zepto)