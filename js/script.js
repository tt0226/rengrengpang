$(function(){
		 var len=$('.xly-scroll-wrapper li').length;
		 if(len>5)
		 	$('.xly-scroll-wrapper .next').css({backgroundPositionY:'-5px'});
		 var stri=0;
	var Qin_prev=$('.xly-scroll-wrapper .prev');
	var Qin_next=$('.xly-scroll-wrapper .next');
	var Qin_ul=$('.xly-scroll');
	Qin_prev.click(function(){
							stri<=0?stri=0:stri--;
		//Qin_ul.prepend(Qin_ul.find('li:last')).css('left','-210px');		
		Qin_ul.stop().animate({'left':-210*stri+'px'},1000);
		 if(stri==0){
              Qin_prev.css({backgroundPositionX:'-65px',backgroundPositionY:'-83px'});
            }
			
				Qin_prev.css({backgroundPositionX:'0px',backgroundPositionY:'-83px'});
				
	})
	Qin_next.click(function(){
							stri>=len-5?stri=len-5:stri++;							
		Qin_ul.stop().animate({'left':-210*stri+'px'},1000);
		 if(stri==len-5){
              Qin_next.css({backgroundPositionX:'-65px',backgroundPositionY:'-83px'});
            }
			
				Qin_prev.css({backgroundPositionX:'0px',backgroundPositionY:'-5px'});
				 
		//Qin_ul.append(Qin_ul.find('li:first')).css('left','0px');	
		//});
	})

 	var course_ullen=$('.training-course li').length;
	var course_uli=0;
	var course_ul=$('.training-course ul');
	$('.course-prev').click(function(){
		//course_ul.prepend(course_ul.find('li:last')).css('left','-340px');
		
				course_uli<=0?course_uli=0:course_uli--;
		course_ul.stop().animate({'left':-345*course_uli+'px'},1000);
	})
	$('.course-next').click(function(){
									
									 	course_uli>=course_ullen-3?course_uli=course_ullen-3:course_uli++;		
		course_ul.stop().animate({'left':-345*course_uli+'px'},1000);//,function(){
		//course_ul.append(course_ul.find('li:first')).css('left','0px');	
		//});
	})
	$('.course-prev').hover(function(){
		$(this).css('background-position','0 0');
	},function(){
		$(this).css('background-position','0 bottom');
	})
	$('.course-next').hover(function(){
		$(this).css('background-position','right 0');
	},function(){
		$(this).css('background-position','right bottom');
	})

/*	$('.mbx-list li').click(function(){
		var index=$(this).index();
		$(this).addClass('cur').siblings().removeClass('cur');
		$('.info-time-from-piclist-con').eq(index).fadeIn(200).siblings().fadeOut(200);
	})*/
	$('.contrast-prev').hover(function(){
		$(this).css('background-position','left -5px');
	},function(){
		$(this).css('background-position','left -83px');
	})
	$('.contrast-next').hover(function(){
		$(this).css('background-position','right -5px');
	},function(){
		$(this).css('background-position','right -83px');
	})
	/*回到顶部*/
	$('.back-top').click(function(){
	
			var leng=document.documentElement.scrollTop||document.body.scrollTop;
			document.documentElement.scrollTop=leng-80;
			document.body.scrollTop=leng-80;
			
		
	})

/*案例对比*/
	$('.contrast-prev').hover(function(){
		$(this).css('background-position','left -5px');
	},function(){
		$(this).css('background-position','left -83px');
	})
	$('.contrast-next').hover(function(){
		$(this).css('background-position','right -5px');
	},function(){
		$(this).css('background-position','right -83px');
	})

	/*案例对比切换*/
	function change(){
	var left_ul=$('.contrast-left ul');
	var right_ul=$('.contrast-right ul');
	var mid_lis=$('.contrast-left ul li');
	var i=0;
	$('.contrast-prev').click(function(){
		if(i==mid_lis.length-1){
			i=0;
		}else{
			i++;
		}
		
		$('.contrast-mid').eq(i).show().siblings().hide();

		right_ul.stop(false,true).animate({'left':'-350px'},1000,function(){
		right_ul.append(right_ul.find('li:first')).css('left','0px');	
		});

		left_ul.stop(false,true).animate({'left':'-350px'},1000,function(){
		left_ul.append(left_ul.find('li:first')).css('left','0px');	
		});
	})
	$('.contrast-next').click(function(){
		if(i==0){
			i=mid_lis.length-1;
		}else{
			i--;
		}
		$('.contrast-mid').eq(i).show().siblings().hide();

		left_ul.prepend(left_ul.find('li:last')).css('left','-350px');
		left_ul.stop(true,false).animate({'left':'0px'},1000);
		
		right_ul.prepend(right_ul.find('li:last')).css('left','-350px');
		right_ul.stop(true,false).animate({'left':'0px'},1000);
	})
	}
	change();


	/*回到顶部*/
	$('.back-top').click(function(){
		timer=setInterval(function(){
			var leng=document.documentElement.scrollTop||document.body.scrollTop;
			document.documentElement.scrollTop=leng-80;
			document.body.scrollTop=leng-80;
			if(leng==0){
				clearInterval(timer);
			}
		},30)
	})
	
	/*报名须知滚动条*/
	//$(function(){
    //    $(window).load(function(){
    //        $(".notes-text").mCustomScrollbar();
    //    });
    //})
	
 function move_line(){//线性移动
	 $('.green-content.left').find('li:odd').addClass('even');//奇数
	 $('.green-content.left').find('li:even').addClass('odd');
	 $('.green-content.right').find('li:odd').addClass('even');
	 $('.green-content.right').find('li:even').addClass('odd');
	 
$('.green-line img').stop().animate({marginTop:'0px'},function(){
$('.green-border-1 span').animate({marginLeft:'0px'},function(){
$('.green-border-2 span').animate({marginTop:'0px'},function(){
$('.green-border-3 span').animate({marginLeft:'0px'},function(){
$('.green-border-4 span').animate({marginLeft:'0px'},function(){
$('.green-border-5 span').animate({marginTop:'0px'},function(){
$('.green-border-6 span').animate({marginLeft:'0px'},function(){
$('.green-center-line').animate({height:'950px'},1000);	
});
});
});
});	
});
})
});	 

	 }
//move_line();

 $('.inside-pages-title-top-roll').click(function(){
	
			 $("html,body").animate({
                scrollTop :1000
            });
		
	})

})


$(document).ready(function () { 
						
							$(window).scroll(function () {
													   if($(window).scrollTop()>=2500)
		{
			 $('.green-content.left').find('li:odd').addClass('even');//奇数
	 $('.green-content.left').find('li:even').addClass('odd');
	 $('.green-content.right').find('li:odd').addClass('even');
	 $('.green-content.right').find('li:even').addClass('odd');
	 
$('.green-line img').stop().animate({marginTop:'0px'},function(){
$('.green-border-1 span').animate({marginLeft:'0px'},function(){
$('.green-border-2 span').animate({marginTop:'0px'},function(){
$('.green-border-3 span').animate({marginLeft:'0px'},function(){
$('.green-border-4 span').animate({marginLeft:'0px'},function(){
$('.green-border-5 span').animate({marginTop:'0px'},function(){
$('.green-border-6 span').animate({marginLeft:'0px'},function(){
$('.green-center-line').animate({height:'950px'},1000);	
});
});
});
});	
});
});
});

		}
													   })

 });

