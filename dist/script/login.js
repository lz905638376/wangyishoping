$('#header').load('header.html');
$('#bottomer').load('bottomer.html');

$('.btn').click(function(){
	// ：校验
	var emvalue = $('.youxiang').val();
	var reg4 = /^\w+@[a-z0-9]+\.[a-z]+$/;
	if(reg4.test(emvalue)===false){
		alert('邮箱格式为错');
	}
	
	
	var pwdvalue = $('.mima').val();
	// 长度6-18个字符，必须包含数字、字母或其他字符中的两种以上
	if(pwdvalue.length < 6|| pwdvalue.length > 18){
		alert('密码长度8-20个字符');
	}
	var num = 0,cha = 0,other = 0;
	var reg21 = /\d/,reg22 = /[a-zA-Z]/,reg23 = /[^\da-zA-Z]/;
	if(reg21.test(pwdvalue) === true){
		num = 1;
	}
	 if(reg22.test(pwdvalue)===true){
		cha = 1;
	} 
	if(reg23.test(pwdvalue)===true){
		other = 1;
	}
	var result = num + cha + other;
	if(result < 2){
		alert('密码必须包含数字、字母或其他字符中的两种以上');
	}
	
	
	
	
	var usvalue = $('.yonghu').val();
	var reg1 = /\W/
	// 长度8-20个字符，可以包含数字、字母、下划线
	if(usvalue.length < 8||usvalue.length >20){
		alert('账户长度为8-20个字符');
	}
	if(reg1.test(usvalue)){
		alert('账户只能包含数字、字母、下划线');
	}
	$.ajax({
		url:'../json/login.json',
		data:'get',
		dataType:'json',
		success:function(json){
			$.each(json,function(index,item){
				if(json[index].zhanghao === usvalue&&json[index].mima===pwdvalue&&json[index].youxiang===emvalue){
					// $('.btn a').attr('href','../pages/index.html');
					window.location.href = "../pages/index.html";
				}else{
					alert('账号密码邮箱输入有误，请重新输入');
					$('.zhanghao').val('');
					$('.mima').val('');
					$('.youxiang').val('');
				}
			})
		}
		
	})
})



