$("#header").load("header.html");


var code = localStorage.getItem('goods');
code = JSON.parse(code);
// console.log(code);
$.ajax({
	url:'../json/detail.json',
	type:'get',
	dataType:'json',
	success:function(json){
		$.each(json,function(index,item){
			if(code[0].code === item.code){
				var dom = `
				<div class="detail_top">
					<ul>
						<li>首页 > </li>
						<li>居家生活 > </li>
						<li>客餐厅家具 > </li>
						<li>小桌秒变大桌 > </li>
						<li>北欧实木伸缩餐桌 </li>
					</ul>
				</div>
				<div class="detail_bottom">
					<div class="detail_bottom_left">
						<div class="detail_bottom_left_top">
							<img src="../image/detail${json[index].code}//detailmid1.jpg" />
							<div class="mask"></div>
						</div>
						<div class="detail_bottom_left_bottom">
							<img src="${json[index].minurl1}">
							<img src="${json[index].minurl2}">
							<img src="${json[index].minurl3}">
							<img src="${json[index].minurl4}">
							<img src="${json[index].minurl5}">
							<button>${json[index].mintitle} ></button>
						</div>
					</div>
					<div class="detail_bottom_right">
						<div class="maxBox">
							<img src="../image/detail${json[index].code}/detailmax1.webp" alt="">
						</div>
						
						
						<div class="detail_bottom_right_top">
							<h1>${json[index].title1}<span>97.5%</span></h1>
							<p>德国榉木制作，桌面可伸缩<span>好评率 ></span></p>
						</div>
						<div class="detail_bottom_right_mid">
							<div><span>价格</span><h1>￥2399</h1></div>
							<div><p><b>Pro专享</b>Pro会员叠加优惠，到手价<b>2279.05</b><b>立即开通 ></b></p></div>
							<div><span>促销</span><p><b>领￥50红包</b>818科技狂欢节，家电爆款低至1折</p></div>
							<div><p><b>神券周周抢</b>你的消暑神券来了！清凉爆品无门槛直减 </p></div>
							<div><span>购物返</span><p>最高返<b>239积分</b></p></div>
							<div><span>邮费</span><p>满99元免邮</p></div>
							<div>
								<span>配送</span>
								<p>
								至<select >
									<option value="0">请输入地址</option>
									<option value="0">中国</option>
									<option value="0">美国</option>
									<option value="0">日本</option>
									<option value="0">香港</option>
									<option value="0">台湾</option>
								</select>
								</p>
							</div>
							<div></div>
							<div><span>服务</span><p>･ 网易自营品牌    ･ 免费配送到家    ･ 30天无忧退换 ･ 国内部分地区不可配送    </p></div>
						</div>
						
						<div class="detail_bottom_right_bottom">
							<div>
								<span>颜色</span>
							</div>
							<div>
								<span>数量</span>
								<div class="jian">-</div>
								<div class="num">1</div>
								<div class="jia">+</div>
							</div>
							<button class="detail_btn1">立即购买</button>
							<button class="detail_btn2">加入购物车</button>
						</div>
					</div>
				</div>
				`;
				$('.detail').append(dom);
				
				var dom2 = `
				<img src="../image/jieshao1.webp" />
							<div class="jieshao_text">
								<table>
									<tr class="line1">
										<td>试用标准</td>
										<td>国内标准</td>
										<td>适应环境</td>
										<td>家用</td>
									</tr>
									<tr class="linenone">
										<td>温馨提示:</td>
									</tr>
									<tr class="line2">
										<td colspan="4">
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  电熨斗水箱会出现少量水珠为正常现象，因为产品出货都需要经过严格的试水试气实验，确保产品的正常使用。残留的少量水珠不妨碍产品的质量以及消费者的正常使用。
				</td>
									</tr>
									<tr class="line3">
										<td>是否有线</td>
										<td>有线</td>
										<td>颜色选择</td>
										<td>月白蓝/樱花粉</td>
									</tr>
									<tr class="line4">
										<td>产品重量</td>
										<td>1kg</td>
										<td>出气量MAX</td>
										<td>22g/min</td>
									</tr>
									<tr class="line5">
										<td>额定电压</td>
										<td>220V~50Hz</td>
										<td>额定功率</td>
										<td>1600W</td>
									</tr>
									<tr class="line6">
										<td>产品尺寸</td>
										<td>237*105*125mm</td>
									</tr>
								</table>
							</div>
							<img src="../image/jieshao2.webp" />
							<img src="../image/jieshao3.webp" />
							<img src="../image/jieshao4.webp" />
							<img src="../image/jieshao5.webp" />
							<img src="../image/jieshao6.webp" />
							<img src="../image/jieshao7.webp" />
							<img src="../image/jieshao8.webp" />
							<img src="../image/jieshao9.webp" />
							<img src="../image/jieshao10.webp" />
							<img src="../image/jieshao11.webp" />
							<img src="../image/jieshao12.webp" />
							<img src="../image/jieshao13.webp" />
							<img src="../image/jieshao14.webp" />
							<img src="../image/jieshao15.webp" />
							<img src="../image/jieshao.gif">
							<img src="../image/jieshao16.webp" />
							<img src="../image/jieshao17.webp" />
						</div>
				`;
				$('.detail_jieshao').append(dom2);
			}
		})
		
	}
})






$('.detail').on('mouseenter','.detail_bottom_left_top',function(){
	$('.mask').css('display','block');
	$('.maxBox').css('display','block');
})
$('.detail').on('mouseleave','.detail_bottom_left_top',function(){
	$('.mask').css('display','none');
	$('.maxBox').css('display','none');
})

$('.detail').on('mousemove','.detail_bottom_left_top',function(ev){
	var e = ev || event;
	var maskX = e.clientX - $('.detail_bottom_left_top').offset().left - $('.mask').width()/2;
	var maskY = e.clientY - $('.detail_bottom_left_top').offset().top - $('.mask').height()/2 +$(document).scrollTop() ;
	console.log($(document).scrollTop());
	if (maskX <= 0){
		maskX = 0;
	}
	if (maskX >= ( $('.detail_bottom_left_top').width() - $('.mask').width())) {
		maskX =  $('.detail_bottom_left_top').width() - $('.mask').width();
	}
	if (maskY <= 0){
		maskY = 0;
	}
	if (maskY >= ( $('.detail_bottom_left_top').height() - $('.mask').height())) {
			maskY =  $('.detail_bottom_left_top').height() - $('.mask').height();
		}
		$('.mask').css('left',maskX + 'px');
		$('.mask').css('top',maskY + 'px');
		
		var scaleX = maskX / ( $('.detail_bottom_left_top').width() - $('.mask').width());
		var scaleY = maskY / ( $('.detail_bottom_left_top').height() - $('.mask').height());
	
		// 大图移动的坐标
		var maxImgX = scaleX * ($('.maxBox img').width() - $('.maxBox').width());
		var maxImgY = scaleY * ($('.maxBox img').height() - $('.maxBox').height());
	
		$('.maxBox img').css('left',-maxImgX + 'px');
		$('.maxBox img').css('top',-maxImgY + 'px');
})

$('.detail').on('mouseenter','.detail_bottom_left_bottom img',function(){
	var index = $(this).index();
	console.log(index);
	$('.detail_bottom_left_top').find('img').attr('src','../image/detail'+code[0].code+'/detailmid'+(index+1)+'.jpg');
	$('.detail_bottom_right .maxBox').find('img').attr('src','../image/detail'+code[0].code+'/detailmax'+(index+1)+'.webp');
})
























$("#bottomer").load("bottomer.html");