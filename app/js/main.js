requirejs.config({
    paths: {
        jquery: 'jquery-3.2.1'
    }
});


// 开始逻辑.
requirejs(['jquery','backtop'], function($,backtop) {

	// new backtop.BackTop($("#backTop"),{
	// 	model:'move',
	// 	speed:100
	// });

	$("#backTop").backtop({
		model:'go'
	})
	// var scroll=new scrollto.ScrollTo({
	// 	dest:0,
	// 	speed:2000
	// });

 //    $("body").css("background", "#fff");
 //    checkPosition($(window).height());
 //    $("#backTop").on("click",$.proxy(scroll.go,scroll));
 //    $(window).on("scroll",function () {
 //    	checkPosition($(window).height());
 //    });
 //    function checkPosition(pos) {
 //    	if($(window).scrollTop()>pos){
 //    		$("#backTop").fadeIn();
 //    	}else{
	// 		$("#backTop").fadeOut();
 //    	}
 //    }
     
});
