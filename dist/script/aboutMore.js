$("#header").load("header.html");
$("#bottomer").load("bottomer.html");
var mySwiper = new Swiper(' .swiper-container', {
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
for(i=0;i<mySwiper.pagination.bullets.length;i++){
  mySwiper.pagination.bullets[i].onmouseover=function(){
    this.click();
  };
}


$.ajax({
	url:'../json/aboutMore.json',
	type:'get',
	dataType:'json',
	success:function(json){
		$.each(json,function(index,item){
			var dom = `
			<div class="list_show_add ${json[index].leiming}" code = "${json[index].code}">
				<a href="detail.html"><img src="${json[index].imgurl}">
				<p><span>${json[index].title}</span></p>
				<h3>${json[index].title1}</h3>
				<h4>${json[index].title2}</h4>
				<div></div>
				<h2>${json[index].title3}</h2></a>
			</div>`;
				$('.listMore .list_show').append(dom);
			})
		}
});
$.ajax({
	url:'../json/aboutMore 2.json',
	type:'get',
	dataType:'json',
	success:function(json){
		$.each(json,function(index,item){
			var dom = `
			<div class="list_show_add ${json[index].leiming}" code = "${json[index].code}">
				<a href="detail.html"><img src="${json[index].imgurl}" >
				<p><span>${json[index].title}</span></p>
				<h3>${json[index].title1}</h3>
				<h4>${json[index].title2}</h4>
				<div></div>
				<h2>${json[index].title3}</h2></a>
			</div>`; 
			$('.listMore2 .list_show').append(dom);
		})
	}
});

$('.listMore .list_show').on('mouseenter','.list_show_add',function(){
		var index = $(this).index();
		$(this).find('img').attr('src','../image/goods-1-'+(index+5)+'.jpg');
})
$('.listMore .list_show').on('mouseleave','.list_show_add',function(){
		var index = $(this).index();
		$(this).find('img').attr('src','../image/goods-1-'+(index+1)+'.jpg');
})
$('.listMore2 .list_show').on('mouseenter','.list_show_add',function(){
		var index = $(this).index();
		$(this).find('img').attr('src','../image/goods-2-'+(index+5)+'.jpg');
})
$('.listMore2 .list_show').on('mouseleave','.list_show_add',function(){
		var index = $(this).index();
		$(this).find('img').attr('src','../image/goods-2-'+(index+1)+'.jpg');
})
$('.list_show').on('click','.list_show_add',function(){
	var goodsArr = [];
	var code = $(this).attr('code');
	console.log(code);
	goodsArr.push({"code":code});
	localStorage.setItem('goods',JSON.stringify(goodsArr));
})
