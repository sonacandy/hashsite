//sub.js
//http://127.0.0.1:5500/sub.html#nike

//location.href : URL로 접근을 한다. (get Type)
//location.href = "https://www.naver.com" (set Type)

var $url = location.href;
console.log($url);




//index.html로부터 sub.html 페이지로 처음 진입했을 때
var $hash = location.hash;
console.log($hash);  //"#nike"
var $hash_txt = $hash.replace("#", "");
console.log($hash_txt);  //"nike"

//선택자 구성하기
var $main = document.querySelector("main");  //배너 이미지 교체
var $title = document.querySelector("#cont .wrap .title h3");  //페이지 타이틀 교체
var $contCover = document.querySelector("#cont .wrap .cont");  //내부 이미지 담을 곳
var $contGroup = "";  //.cont라는 공간에 넣을 가상의 빈 문자열 데이터(봉다리1)

var hash_apply = function(){
  if($hash_txt.length > 0){  //hash로  받아온 값이 존재한다면
    $main.style.backgroundImage = `url(./img/${$hash_txt}_banner.jpg)`;
    $title.textContent = $hash_txt;

    console.log($contGroup);

    $contGroup = "";  //sub.html 내부에서 상단 메뉴 클릭시, 기존에 누적된 쌓인 데이터들을 모두 재 초기화시킨다. 

    for(i=0; i<4; i++){
      $contGroup += `
        <div style="background-image:url(./img/${$hash_txt}_0${i+1}.jpg);" onclick="location.href='./detail.html#${$hash_txt}_${i}'"></div>
      `;
    }
    $contCover.innerHTML = $contGroup;

  }else{
    location.href = "./";
  }
}
hash_apply();

//sub.html에서 상단 메뉴를 클릭했을 때
var $list = document.querySelectorAll("header nav ul li");
console.log($list);  //NodeList(3) [li, li, li]

var $body = document.querySelector("body");
var $resBtn = document.querySelector(".resBtn")
var $nav = document.querySelector("header nav")

for(const v of $list){
  console.log(v);  //li, li, li
  v.addEventListener("click", function(){
    console.log(v);
    $hash_txt = v.getAttribute("rel");
    console.log($hash_txt);

    hash_apply();

    $body.classList.remove("showMenu")
    $resBtn.classList.remove("active")
    $nav.classList.remove("active")


  });
}

//var 약점은 기존에 작성된 변수명이 있다고 하더라도 새롭게 동일한 명칭으로 변수명을 잡게되면 갱신(데이터의 완전 교체)이 됨. const로 선언된 변수명은 고정값만을 가져올 수 있음(갱신 불가 - 견고함, 경직된 부분. 객체, 배열, 함수)




