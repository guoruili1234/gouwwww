;(function($){
	$.dialog=function(obj){
		new Prev(obj);
	}
	function Prev(obj){
		var opt=$.extend({
			title:"标题",
			txt:"这是内容",
			btn:["关闭"],
			curFn:null
		},obj)
		var html=$("<div class='mark'></div>"
				+"<div class='dialog'>"
					+"<h3>"+opt.txt+"</h3>"
					+"<p></p>"
				+"</div>");
		$("body").prepend(html);
		$(".mark").css("height",$(document).height()+"px")
		$.each(opt.btn,function(idx,vle){
			var btn=$("<span>"+vle+"</span>")
			$(".dialog").find("p").append(btn)
		})
		var ennu=$(".dialog").find("span");
		ennu.eq(1).on("click",del)
		ennu.eq(0).on("click",function(){
			opt.curFn&&opt.curFn();
			del()
		})
		function del(){
			$(".mark").remove()
			$(".dialog").remove()
		}
	}
})(jQuery)