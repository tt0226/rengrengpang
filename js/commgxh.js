// JavaScript Document
$(function ()
{
    
       $("#Qin-show-img-btn-01").click(function () {
		$("#Qin-show-pic-img-list-li1").show();
				$("#Qin-show-pic-img-list-li2").hide();
				});
 
   $("#Qin-show-img-btn-02").click(function () {
											 $("#Qin-show-pic-img-list-li1").hide();
		$("#Qin-show-pic-img-list-li2").show();
												 });
   
    $("#Qin-show-pic-left").click(function () {
		$("#Qin-show-list-pic1").show();	
			$("#Qin-show-list-pic2").hide();	
			$("#Qin-show-pic-left").addClass("cur");
			$("#Qin-show-pic-right").removeClass("cur");
				});
 
   $("#Qin-show-pic-right").click(function () {											
										$("#Qin-show-list-pic1").hide();		
											$("#Qin-show-list-pic2").show();	
											$("#Qin-show-pic-left").removeClass("cur");
											$("#Qin-show-pic-right").addClass("cur");
											
												 });
   
   
    $('.inside-pages-banner-btn-roll').click(function(){
	
			 $("html,body").animate({
                scrollTop :966
            });
		
	})


 

	



/*夏令营直播间 咨询详情页 案例对比*/
   function anli(){
   var i=0;
   var sul=$('.case-comparison-con-box');
   var len=sul.find('li').length;
   $('.case-next').click(function(){
    i++;
    if(i==len){i=0;}
     sul.find('li').eq(i).fadeIn(300).siblings().fadeOut(300);
   });
   
   $('.case-prev').click(function(){
    if(i==0){
        i=len-1;
    }else{
      i--;
    }
    sul.find('li').eq(i).fadeIn(300).siblings().fadeOut(300);
   });
 }
 anli();
 
   $("#Qin-show-img-btn-01").click(function () {
		$("#Qin-show-pic-img-list-li1").show();
				$("#Qin-show-pic-img-list-li2").hide();
				});
 
   $("#Qin-show-img-btn-02").click(function () {
											 $("#Qin-show-pic-img-list-li1").hide();
		$("#Qin-show-pic-img-list-li2").show();
												 });
   
 /*   $("#Qin-show-pic-left").click(function () {
		$("#Qin-show-list-pic .Qin-show-pic-img-list-ul").eq(0).show();	
			$("#Qin-show-list-pic  .Qin-show-pic-img-list-ul").eq(1).hide();	
			$("#Qin-show-pic-left").addClass("cur");
			$("#Qin-show-pic-right").removeClass("cur");
				});
 
   $("#Qin-show-pic-right").click(function () {											
										$("#Qin-show-list-pic  .Qin-show-pic-img-list-ul").eq(0).hide();		
											$("#Qin-show-list-pic  .Qin-show-pic-img-list-ul").eq(1).show();	
											$("#Qin-show-pic-left").removeClass("cur");
											$("#Qin-show-pic-right").addClass("cur");
												 });*/
 /*顶部方向盘旋转*/
 
 /*顶部方向盘旋转 锚点跳转*/
  $("#shili-ht-nav li").each(function (i){
    $(this).click(function (){
        var index=$(this).index();
        $(this).find("a").css({
            "marginLeft" : 0
        });
        $(this).siblings().find("a").css({
            "marginLeft" :- 120
        });
        $('.yxy-section').eq(i).find('.gunl-top-icon-pic img:first').addClass('lun_rotate').end().siblings().find('.gunl-top-icon-pic img:first').removeClass('lun_rotate');
        $('body').animate({scrollTop:$('.yxy-section').eq(index).offset().top}, 300);
    });
  });
  
   $(".yxy-section").each(function (i){
    $(this).find("img").eq(1).click(function (){
											  if(i<=3)
											  {
						 $('body').animate({scrollTop:$('.yxy-section').eq((i+1)).offset().top}, 300);
											  }
											  else
											  { $('body').animate({scrollTop:5500}, 300);
												  }
							  });
  });
							
   $('.inside-pages-banner-btn-roll').click(function(){
			 $("html,body").animate({
                scrollTop :966
        });
	})

  /*圆圈*/
  function circle(){
   var oli=$('.inside-pages-round-txt-all li')
   oli.mouseover(function(){
      var index=$(this).index();
	  
      $(this).children('div').addClass('out-circle').end().siblings().children('div').removeClass('out-circle');
      $('.inside-pages-round-01').eq(index).fadeIn(300).siblings().fadeOut(300);
     });
  };
  circle();
  


/*优秀案例对比*/
function duibi(){
   var home_next=$('.home-index-04-btn-right');
   var home_prev=$('.home-index-04-btn-left');
   var i=0;
   var sul=$('.case-comparison-con-box');
   var len=sul.find('li').length;
   home_next.click(function(){
    i++;
    if(i==len){i=0;}
     sul.find('li').eq(i).fadeIn(300).siblings().fadeOut(300);
   });
   
   home_prev.click(function(){
    if(i==0){
        i=len-1;
    }else{
      i--;
    }
    sul.find('li').eq(i).fadeIn(300).siblings().fadeOut(300);
   });
 }
 duibi();
 
  function anli(){
     var sul0=$('.jfdb-pic ul:first');
	 var sul=$('.jfdb-pic ul:last');
	 var sultxt=$('.jf-anli-txt-1 ul');
	$('.jf-prev').click(function(){
		sul0.prepend(sul0.find('li:last')).css('left','-420px');
		sul0.stop().animate({left:'0px'});
		sul.prepend(sul.find('li:last')).css('left','-420px');
		sul.stop().animate({left:'0px'});
		
		sultxt.prepend(sultxt.find('li:last')).css('left','-242px');
		sultxt.stop().animate({left:'0px'});
	});
	$('.jf-next').click(function(){
		sul0.stop().animate({left:'-420px'},function(){
		sul0.append(sul0.find('li:first')).css('left','0px');	
		});
		
	    sul.stop().animate({left:'-420px'},function(){
		sul.append(sul.find('li:first')).css('left','0px');	
		});
		
		sultxt.stop().animate({left:'-242px'},function(){
		sultxt.append(sultxt.find('li:first')).css('left','0px');	
		});
	});
	
 }
 anli();

 /*
function home_banner()
    {//首页大图轮换
        var wrap_box = $('.home-banner');
        var w_width;
        var img_h;
		var j = 0;
        var sul = $('.banner-list');
        var len = sul.find('li').length;
        var sli = sul.find('li');
        sli.not(':first').css({
             'opacity' :' 0','z-index':'-1'
        });
        w_width = $(window).width();
        img_h = sli.find('img').height();
        if ( w_width < 1200) {
            w_width = 1200;
        }
        wrap_box.css({
            'width' : w_width, 'height' : img_h 
        });
        wrap_box.append("<ul class='small-focus'></ul>");
        for (var i = 0; i < len; i++) {
			var c=i+1;
			$('.small-focus').append("<li><span>"+c+"</span>")
			.find('li:first').addClass('cur');
        }
        $(window).resize(function () 
        {
            w_width = $(window).width();
            img_h = sli.find('img').height();
            if ( w_width >= 1200) {
                w_width = w_width;
            }
            else {
                w_width = 1200;
            }
            wrap_box.css({'width' : w_width, 'height' : img_h });
        });
        $('.small-focus li').click(function () 
        {
            var index = $(this).index();
			MC(index);
			j = index;
        });
  
        function MC(index) 
        {
            sli.eq(index).stop(true, true).animate({
                'opacity' : '1', 'z-index' : '2'
            },
            400, 'easeOutExpo').siblings().stop(true, true).animate({
                'opacity' : '0', 'z-index' : '-1'
            },
            400, 'easeOutExpo');
            $('.small-focus li').removeClass('cur').eq(index).addClass('cur');
        }


        function autoplay() 
        {
            j++;
            if (j == len) {
                j = 0;
            }
            MC(j);
        }
        var t = setInterval(autoplay, 4000);
        wrap_box.hover(function () 
        {
            clearInterval(t);
        },
        function () 
        {
            t = setInterval(autoplay, 4000);
        });
    }
    $(window).load(function ()
    {
        home_banner();
    });

			
*/
})




