;(function($){
	$(document).on("tap","a",function(e){
		e.preventDefault();
	}).on('tap','a',function(){
		//alert(1)
		var href=$(this).attr("href");
		$(href).css("left",'0').siblings().css('left','-100%');
		if(href=="#second"){
			$('.header h1').html("填写地址");
			var tit=$(".save").data("tit");
			console.log(tit)
			$('.save').html(tit);
		}
		

	})


	$(".save").on('tap',function(){
		if($(this).html()=="编辑"){
			
		}
		else{
			if($('#yui input').val()==""){
				alert(2)
			}else{
						var str=$('<div id="hui">'
									+'<input type="text" placeholder="收件人" class="ins">'
									+'<input type="text" placeholder="手机号">'
									+'<input type="text" placeholder="所在地区">'
									+'<input type="text" placeholder="详细地址">'
								+'</div>');
						$('#first').append(str);
						$('#first p').remove();
			}
			$('#first').css('left','0');
			$('.header h1').html("收货地址");
			
			$('.save').html("编辑");
			$('#second').css('left','-100%')
		}
		
	})
			
})(Zepto)
