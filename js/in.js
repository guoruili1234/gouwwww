;(function($){
	$('#xian').on('click',function(){
		$(".main").css({
			'-webkit-transform':"translateX(0)",
			'-webkit-transition':"all 1s"
		})
		$('#hai').removeClass('bg');
		$(this).addClass('bg');
	})
	$('#hai').on('click',function(){
		$(".main").css({
			'-webkit-transform':"translateX(-100%)",
			'-webkit-transition':"all 1s"
		})		
		$('#xian').removeClass('bg');
		$(this).addClass('bg');
	})
	var has=1;	
	$('#bian').on('tap',function(){
		if(has==1){
			$(this).text("完成");
			$("#zhi").text("删除").on('tap',function(){
				$(this).parents("dl").remove();
				$('#bian').text('编辑');
				has=3;
			})
			has=2
		}else if(has==2){
				$(this).text("编辑");
				$("#zhi").text("支付")
				has=1	
		}else{
			if($(".ma").children().length==0){
				has=3;
			}else{
				has=1
			}
		}
	})
})(Zepto)
