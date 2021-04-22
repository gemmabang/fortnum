$(document).ready(function(){
    
    
    $('#fullpage').fullpage({
       navigation: false,     
       //navigationTooltips:['firstSlide', 'secondSlide'],
       anchors:['page01', 'page02', 'page03', 'page04','page05'],
	   menu:'.gnb',
       fitToSectionDelay: 5000,     
       
        onLeave: function(origin, destination, direction){
		var leavingSection = this;

		//after leaving section 2
		if(destination.index >= 1){
            $('#header').addClass('header2');
			$('.logo').addClass('logo2');
            $('.logo2').show();  
		}else if(destination.index == 0){
            $('#header').removeClass('header2');
			$('.logo').removeClass('logo2');
            
         }
	    }, //onLeave
        
        
        
        
    
        afterLoad: function(origin, destination, direction){
            $(".txtAni").each(function(){
				var pos = $(this).offset().top;
				var winTop = $(window).scrollTop();
				if (pos < winTop + 1000) {
					$(this).addClass("txtAct");
				}
			})

            
        }
               
        /*if(destination.index == 1)
            $('.txt').css('opacity','1');
			$('.txt').css('transition','opacity 3s');
        }
            
            
        //} //afterLoad
        
        
        //afterLoad: function(origin, destination, direction){
		//var loadedSection = this;

		//using index
		//if(destination.index == 4){
			//$('.con05List,.con05Tit').css('opacity','1');
			//$('.con05List,.con05Tit').css('transition','opacity 3s');
           // $('.con05Tit').css('opacity','1');
			//$('.con05Tit').css('transition','opacity 3s');
           // $('.order').css('opacity','1');
			//$('.order').css('transition','opacity 3s');
        //}
               
        /*if(destination.index == 1)
            $('.txt').css('opacity','1');
			$('.txt').css('transition','opacity 3s');
        }
           */ 
            
        //} //afterLoad
        
                
        
	});
    
    
    $('.con03List').slick({
        slidesToShow: 3,
        slidesToScroll:3,
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        arrows: false, 
    })
    
    

    
    
    $('#bg2').slick({
        slidesToShow: 1,
        slidesToScroll:1,
        arrows:true,
        swipe:false,
        prevArrow:'<div class="prev mainArrow"><img src="/fortnum/img/main/arrow-left-wh.png"></div>',
        nextArrow:'<div class="next mainArrow"><img src="/fortnum/img/main/arrow-right-wh.png"></div>'
    })
    
    
    
    
   // 이 코드는 창이 열릴때 첫번째 슬라이더의 트랜지션을 적용하기 위한 코드입니다.
    /*$('#bg2').on('init', function(event, slick) {
       $('#bg2').find('.slick-current').removeClass('slick-active').addClass('reset-animation');
        setTimeout(function(){
            $('#bg2').find('.slick-current').removeClass('reset-animation').addClass('slick-active');
        }, 1);

    });*/
    
    
    
    
})
