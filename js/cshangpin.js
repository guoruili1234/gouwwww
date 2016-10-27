;(function($){
	function ajax(){
		var data=null;
		$.ajax({
			url:"../json/chome.json",
			type:"get",
			dataType:"json",
			async:false,
			success:function(e){
				data=e;
			},error:function(){
				alert("请求错误")
			}
		})
		return data;
	}
	var lei=location.search.substr(1);
	var main=new IScroll("#main",{
		click:true
	})
	rfersh()
	function rfersh(){
		setTimeout(function(){
			main.refresh()
		},200)
	}
	var json=ajax();
	var app=angular.module("myApp",[])
	app.controller("banner",["$scope","$rootScope",function(s,r){
			s.data=json[lei];
	}])
	$("#back").on("tap",function(){
		window.history.go(-1)
	})
})(Zepto)