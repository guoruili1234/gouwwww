;(function($){
	
	//计时器,发送验证码
	var time=null;
	var i=40;
	$('#big').on('tap',function(){
		time=setInterval(auto,1000);
		$('#ins').val("9937");
	})
	function auto(){

		i--;

		if(i<10){
			i="0"+i;
			//clearInterval(time)
		}else if(i>10){
			i=i;
		}
		if(i<=0){
			
			clearInterval(time);
		}
		$('#big').html(i+'秒以后重新发送').css('line-height','.35rem');

	}

	$("#main")[0].addEventListener('touchstart',function(e){
		sFn(e);
	})
	$("#main")[0].addEventListener('touchmove',function(e){
		mFn(e);
	})
	$("#main")[0].addEventListener('touchend',function(e){
		eFn(e);
	})

	var sY=0;//设置开始角度
	var m=0;
	var f=null;
	function sFn(e){
		sY=e.touches[0].clientY;//获取开始角度
		sT=$("#main")[0].scrollTop;//获取滚动条的高度
		var sH=$('#main').height();
		var lH=$('#scroll').height();
	}

	function mFn(e){
		m=sY-e.touches[0].clientY;
		if(m>50){
			f="down"
		}
		console.log(f)
	}

	function eFn(e){
		if(sT>60){
			$('.header a').fadeIn(500)
		}else{
			$('.header a').fadeOut(500)
		}
	}


	


})(Zepto)