;(function($){
	$('.back').on('click',function(){
		window.history.go(-1);
	})
	$('#clear').on('tap',function(){
		$('.mark').css({
			'bottom':0
		})
		$('#qu').on('tap',function(){
			$('.mark').css({
				'bottom':'-100%'
			})
		})
		$('#open').on('tap',function(){
			$('dl').remove();
			$('.main').text('还未浏览过商品').css({
				'text-align':'center',
				'margin-top':'75%',
				'color':'#ccc'
			});
			$('.mark').css({
				'bottom':'-100%'
			})
		})
	})
})(Zepto)