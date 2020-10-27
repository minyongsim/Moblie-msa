(function(){
  $('#wrap')
  .on("click", function () {
    var url = this.href;
    $("#container > #content").remove();
    $("#container").load(url + " #content");
    return false;
  });


    //open_nav를 클릭하면 메뉴 박스 왼쪽에서 나옴
    $('.open_nav').on('click',function(){
        $(this).next().css({
          display:'block'
        })
        $('.menubox').animate({
          left:'0px'
        },500)
      })
      $('.close_nav').on('click',function(){
        $('.menubox').animate({
          left:'-400px'
        },500,function(){
          $('.menubox').css({
            display:'none'
          })
        })
      })

      $('.show_box01').slick({
        autoplay: true, // 자동재생
        dots: true, //동그라미 버튼
        autoplaySpeed: 4500, // 슬라이드 재생 시간
        speed:1000, // 바뀌는 시간
        slidesToShow: 1, //보여질 슬라이드 수(생략가능)
        slldesToScroll: 1, //이동 슬라이드 수(생략가능)
        pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
        pauseOnDotHover: false, //동그라미 버튼에 호버시 자동실행 멈춤여부
        pauseOnFocus: true, //동그라미 버튼에 클릭시 자동실행 멈춤여부
        cssEase: 'ease', //속도함수 (생략가능)
        draggdle: true, //마우스 드래그시 슬라이드 교체가능 (생략가능)
        fade: false, //슬라이드 수평으로 이동하지 않고 제자리에서 사라지고 나타남
        arrows: false, // 좌우 화살표 사용여부
        prevArrow: '<button class="marrow prevArrow"><i class="fas fa-angle-left"></i></button> ',
        nextArrow: '<button class="marrow nextArrow"><i class="fas fa-angle-right"></i></button>',
        responsive: [{
            breakpoint: 800,
            settings: {
                arrows: false,
                fade: false
               
            }
        }]

    })
      
    



})(jQuery)