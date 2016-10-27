;(function($){
	var myswiper=new Swiper(".wei .swiper-container",{
		pagination:".swiper-pagination",
		loop:true
	})
	var myswiper2=new Swiper(".center .swiper-container",{
		
	})
	var swiper = new Swiper('.swiper3 .swiper-container', {
        slidesPerView: 2,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 5,
        loop:true
    });
    var myswiper3=new Swiper(".iPhone .swiper-container",{
		    slidesPerView:4,
		    paginationClickable: true,
		    spaceBetween:3,
		    freeMode: true
	})
	var main=new IScroll("#main",{
		click:true
	})
	init()
	refresh()
	function refresh(){
		setTimeout(function(){
			main.refresh();
		},500)
	}
	function init(){
		var json=ajax();
		var app=angular.module("myApp",[])
		app.controller("guanfang",["$scope","$rootScope",function(s,r){
			s.data=json.guanfang;
		}])
		app.controller("baobao",["$scope","$rootScope",function(s,r){
			s.data=json.baobao;
		}])
		app.controller("fushi",["$scope","$rootScope",function(s,r){
			s.data=json.fushi;
		}])
		app.controller("xiezi",["$scope","$rootScope",function(s,r){
			s.data=json.xiezi;
		}])
		app.controller("shoushi",["$scope","$rootScope",function(s,r){
			s.data=json.shoushi;
		}])
		app.controller("peishi",["$scope","$rootScope",function(s,r){
			s.data=json.peishi;
		}])
		app.controller("wanbiao",["$scope","$rootScope",function(s,r){
			s.data=json.wanbiao;
		}])
		app.controller("pinguo",["$scope","$rootScope",function(s,r){
			s.data=json.pinguo;
		}])
		app.controller("sijin",["$scope","$rootScope",function(s,r){
			s.data=json.sijin;
		}])
		app.controller("xiangnaier",["$scope","$rootScope",function(s,r){
			s.data=json.xiangnaier;
		}])
		app.controller("zhekou",["$scope","$rootScope",function(s,r){
			s.data=json.zhekou;
		}])
		app.controller("shishang",["$scope","$rootScope",function(s,r){
			s.data=json.shishang;
		}])
		app.controller("doukou",["$scope","$rootScope",function(s,r){
			s.data=json.doukou;
		}])
		app.controller("usa",["$scope","$rootScope",function(s,r){
			s.data=json.usa;
		}])
		app.controller("tory",["$scope","$rootScope",function(s,r){
			s.data=json.tory;
		}])



		$("#list2").on("tap",function(){
			alert("正在打开微信。。。。")
		})
		$(".iphone_big_img").on("tap",function(){
			var ming=$(this).attr("data-lei")
			location.href="cshangpin.html?"+ming
		})
		$(".geng").on("tap",function(){
			var ming=$(this).attr("data-lei")
			location.href="cshangpin.html?"+ming
		})
	}
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
	$('.baozhe dl').on('tap',function(){
		location.href="zqdetails.html";
	})
	$('.iphone_list').on('tap',function(){
		location.href="zqphone.html";
	})
})(Zepto)