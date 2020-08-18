$('.nav_list li').bind({
	mouseenter: function() {

		$(this).find('.nav_list_addlist').css('display', 'block');
	},
	mouseleave: function() {
		$(this).find('.nav_list_addlist').css('display', 'none');
	}
})

$('.search_bottom .search_bottom_list_mid').bind({
	mouseenter: function() {
		$(this).find('.search_bottom_addlist').css('display', 'block');
		var index = $(this).index() -1 ;
		
		$.ajax({
		    url: '../json/search.json',
		    type: 'get',
		    dataType: 'json',
		    success: function (json){
				$('.search_bottom_addlist').html('');
				var dom = `<ul>
					<h3>${json[index].title}</h3>
					<li><img src = "${json[index].url}">${json[index].title2}</li>
					<li><img src = "${json[index].url}">${json[index].title3}</li>
					<li><img src = "${json[index].url}">${json[index].title4}</li>
					<li><img src = "${json[index].url}">${json[index].title5}</li>
					<li><img src = "${json[index].url}">${json[index].title6}</li>
				</ul>
				<ul>
					<h3>${json[index].title}</h3>
					<li><img src = "${json[index].url}">${json[index].title2}</li>
					<li><img src = "${json[index].url}">${json[index].title3}</li>
					<li><img src = "${json[index].url}">${json[index].title4}</li>
					<li><img src = "${json[index].url}">${json[index].title5}</li>
					<li><img src = "${json[index].url}">${json[index].title6}</li>
				</ul>
				<ul>
					<h3>${json[index].title}</h3>
					<li><img src = "${json[index].url}">${json[index].title2}</li>
					<li><img src = "${json[index].url}">${json[index].title3}</li>
					<li><img src = "${json[index].url}">${json[index].title4}</li>
					<li><img src = "${json[index].url}">${json[index].title5}</li>
					<li><img src = "${json[index].url}">${json[index].title6}</li>
				</ul>
				<ul>
					<h3>${json[index].title}</h3>
					<li><img src = "${json[index].url}">${json[index].title2}</li>
					<li><img src = "${json[index].url}">${json[index].title3}</li>
					<li><img src = "${json[index].url}">${json[index].title4}</li>
					<li><img src = "${json[index].url}">${json[index].title5}</li>
					<li><img src = "${json[index].url}">${json[index].title6}</li>
				</ul>
				<ul>
					<h3>${json[index].title}</h3>
					<li><img src = "${json[index].url}">${json[index].title2}</li>
					<li><img src = "${json[index].url}">${json[index].title3}</li>
					<li><img src = "${json[index].url}">${json[index].title4}</li>
					<li><img src = "${json[index].url}">${json[index].title5}</li>
					<li><img src = "${json[index].url}">${json[index].title6}</li>
				</ul>
				<ul>
					<h3>${json[index].title}</h3>
					<li><img src = "${json[index].url}">${json[index].title2}</li>
					<li><img src = "${json[index].url}">${json[index].title3}</li>
					<li><img src = "${json[index].url}">${json[index].title4}</li>
					<li><img src = "${json[index].url}">${json[index].title5}</li>
					<li><img src = "${json[index].url}">${json[index].title6}</li>
				</ul>
				<ul>
					<h3>${json[index].title}</h3>
					<li><img src = "${json[index].url}">${json[index].title2}</li>
					<li><img src = "${json[index].url}">${json[index].title3}</li>
					<li><img src = "${json[index].url}">${json[index].title4}</li>
					<li><img src = "${json[index].url}">${json[index].title5}</li>
					<li><img src = "${json[index].url}">${json[index].title6}</li>
				</ul>
				<ul>
					<h3>${json[index].title}</h3>
					<li><img src = "${json[index].url}">${json[index].title2}</li>
					<li><img src = "${json[index].url}">${json[index].title3}</li>
					<li><img src = "${json[index].url}">${json[index].title4}</li>
					<li><img src = "${json[index].url}">${json[index].title5}</li>
					<li><img src = "${json[index].url}">${json[index].title6}</li>
				</ul>
				`;
				$('.search_bottom_addlist').append(dom);
		    }
		});
	},
	mouseleave: function() {
		$(this).find('.search_bottom_addlist').css('display', 'none');
	}
})