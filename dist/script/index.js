$("#header").load("header.html");
$("#bottomer").load("bottomer.html");




var mySwiper1 = new Swiper('.banner .swiper-container', {
	autoplay: {
		delay: 2000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	}, //可选选项，自动滑动
	effect: 'fade',
	loop: true,
	pagination: {
	    el: '.swiper-pagination',
		clickable :true,
		bulletActiveClass: 'my-bullet-active',
	  },
	 navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
})

for(i=0;i<mySwiper1.pagination.bullets.length;i++){
  mySwiper1.pagination.bullets[i].onmouseover=function(){
    this.click();
  };
}

$('.new_bottom .newchangewrap').bind({
	mouseenter: function(){
		var index = $(this).index() + 5;
		$(this).find('.newchange').css('background-color','#f4f0ea');
		$(this).find('img').attr('src','../image/new'+index+'.jpg');
	},
	mouseleave: function(){
		var index = $(this).index() + 1;
		$(this).find('.newchange').css('background-color','');
		$(this).find('img').attr('src','../image/new'+index+'.jpg');
	}
})
$('.new_bottom2 .newchangewrap').bind({
	mouseenter: function(){
		var index = $(this).index() + 5;
		$(this).find('.newchange').css('background-color','#f4f0ea');
		$(this).find('img').attr('src','../image/new'+index+'.webp');
	},
	mouseleave: function(){
		var index = $(this).index() + 1;
		$(this).find('.newchange').css('background-color','');
		$(this).find('img').attr('src','../image/new'+index+'.webp');
	}
})
var mySwiper2 = new Swiper('.famliy .swiper-container', {
	autoplay: {
		delay: 2000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	}, //可选选项，自动滑动
	effect: 'fade',
	loop: true,
	pagination: {
	    el: '.swiper-pagination',
		clickable :true,
		bulletActiveClass: 'my-bullet-active',
	  },
	 navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
})
for(i=0;i<mySwiper2.pagination.bullets.length;i++){
  mySwiper2.pagination.bullets[i].onmouseover=function(){
    this.click();
  };
}

$('.tuijian_bottom_right_list img').mouseenter(function(){
	$(this).stop(true).animate({width:190 , height : 190});
})
$('.tuijian_bottom_right_list img').mouseleave(function(){
	$(this).stop(true).animate({width:180 , height : 180});
})
$('.tuijian_bottom_left .imgchange img').mouseenter(function(){
	$(this).stop(true).animate({width:335 , height : 335});
})
$('.tuijian_bottom_left .imgchange img').mouseleave(function(){
	$(this).stop(true).animate({width:320 , height : 320});
})