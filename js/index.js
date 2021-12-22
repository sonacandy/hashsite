//index.js

var $nike_contCover = document.querySelector("#cont_01 .cont")
var $nike_contGroup = "";

	//랜덤으로 이미지 4개중, 2개만 추출 단, 동일한 숫자는 추출되지 않아야 한다
var nike_num_arr = []
var nike_number;

while(nike_num_arr.length < 2){
	nike_number = Math.floor(Math.random() * 4);
	
	if(nike_num_arr.indexOf(nike_number) == -1){
		nike_num_arr.push(nike_number);
	}console.log(nike_num_arr)
}
for(i = 0; i < nike_num_arr.length ; i++){
	$nike_contGroup += `<div style="background-image:url(./img/nike_0${nike_num_arr[i]+1}.jpg);" onclick="location.href='./detail.html#nike_${nike_num_arr[i]}'"></div>`
}
$nike_contCover.innerHTML = $nike_contGroup;

var $nike_contCover = document.querySelector("#cont_01 .cont")
var $nike_contGroup = "";


//아디다스
var $adidas_contCover = document.querySelector("#cont_02 .cont")
var $adidas_contGroup = "";

	//랜덤으로 이미지 4개중, 2개만 추출 단, 동일한 숫자는 추출되지 않아야 한다
var adidas_num_arr = []
var adidas_number;

while(adidas_num_arr.length < 2){
	adidas_number = Math.floor(Math.random() * 4);
	
	if(adidas_num_arr.indexOf(adidas_number) == -1){
		adidas_num_arr.push(adidas_number);
	}console.log(adidas_num_arr)
}
for(i = 0; i < adidas_num_arr.length ; i++){
	$adidas_contGroup += `<div style="background-image:url(./img/adidas_0${adidas_num_arr[i]+1}.jpg);" onclick="location.href='./detail.html#adidas_${adidas_num_arr[i]}'"></div>`
}
$adidas_contCover.innerHTML = $adidas_contGroup;

//퓨마

var $puma_contCover = document.querySelector("#cont_03 .cont")
var $puma_contGroup = "";

	//랜덤으로 이미지 4개중, 2개만 추출 단, 동일한 숫자는 추출되지 않아야 한다
var puma_num_arr = []
var puma_number;

while(puma_num_arr.length < 2){
	puma_number = Math.floor(Math.random() * 4);
	
	if(puma_num_arr.indexOf(puma_number) == -1){
		puma_num_arr.push(puma_number);
	}console.log(puma_num_arr)
}
for(i = 0; i < puma_num_arr.length ; i++){
	$puma_contGroup += `<div style="background-image:url(./img/puma_0${puma_num_arr[i]+1}.jpg);" onclick="location.href='./detail.html#puma_${puma_num_arr[i]}'"></div>`
}
$puma_contCover.innerHTML = $puma_contGroup;

var $puma_contCover = document.querySelector("#cont_01 .cont")
var $puma_contGroup = "";

$(document).ready(function(){
	var $brand = ["nike","adidas","puma"];
	var slide_arr = [];
	var slide_img;

	while(slide_arr.length < 4){
		slide_img = `${$brand[Math.floor(Math.random() * 3)]}_0${Math.ceil(Math.random()*4)}.jpg`
		console.log(slide_img)
		if(slide_arr.indexOf(slide_img) == -1){
			slide_arr.push(slide_img)
		}console.log(slide_arr)
	}
	for(v of slide_arr){
	$("main .slider").append(`<div class="slide" style="background-image:url(./img/${v})"></div>`)
	}

	$(".slider").slick({
		Infinity : true,
		dots : true,
		slideToShow : 1,
		slideToScroll : 1,
		autoplay : true,
		autoplaySpeed : 3000
	})
});