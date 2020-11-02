(function () {
  $('#wrap')
    .on("click", "#header .menubox .menuinv a,#content .Mshow_info a,.show_category a, #quick_menu a:nth-child(2) ", function () {
      var url = this.href;
      $("#container > #content").remove();
      $("#container").load(url + " #content");
     return false
    });
    


  //open_nav를 클릭하면 메뉴 박스 왼쪽에서 나옴
  $('.open_nav').on('click', function () {
    $(this).next().css({
      display: 'block'
    })
    $('.menubox').animate({
      left: '0px'
    }, 500)
  })
  $('.close_nav').on('click', function () {
    $('.menubox').animate({
      left: '-400px'
    }, 500, function () {
      $('.menubox').css({
        display: 'none'
      })
    })
  })
  // 알림 박스 움직임
  setInterval(kim, 3000)

  function kim() {
    $('.alarm a:first-child').animate({
      marginTop: '-50px'
    }, 500, function () {
      $(this).appendTo('.alarm').css({
        marginTop: '0px'
      })
    })
  }

 

  var usedata;
  $.ajax({
    type: 'GET',
    url: 'data/data.json',
    beforeSend: function (xhr) {
      if (xhr.overrideMimeType) {
        xhr.overrideMimeType("application/json")
      }
    },
    success: function (data) {
      usedata = data

    },
    error: function (abc) {
      alert(abc.status + '오류발생')
    }
  })

  $('#container').on('click', '.showContent .show_category a', function (e) {
    e.preventDefault()
    var url = this.href;
    var show = $(this).attr('class')
    $("#container > #content").remove();
    $("#container").load(url + " #content", function () {
      var newContent = '';
      for (var i in usedata[show]) {
        newContent += `<li><img src="${usedata[show][i].images}"alt="공연이미지">`
        newContent += `<div class="text"><h2>${usedata[show][i].name}</h2>`
        newContent += `<p>${usedata[show][i].type}</p>`
        newContent += `<p>${usedata[show][i].zone}</p>`
        newContent += `<p>${usedata[show][i].period}</p>`
        newContent += `<p>${usedata[show][i].place}</p>`
        newContent += `<a href="#">예매하러가기</a></div></li>`
      }
      $('#content .pushList .ListBox').append(`<ul>${newContent}</ul>`)

    });

  })
  $('.show_box').slick({
    autoplay: true, // 자동재생
    dots: true, //동그라미 버튼
    autoplaySpeed: 4500, // 슬라이드 재생 시간
    speed: 1000, // 바뀌는 시간
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