(function(){
    
    //open_nav를 클릭하면 메뉴 박스 왼쪽에서 나옴
    $('#header .menubox .open_nav').on('click', function () {
        $('.menuinv').stop().css({
            display:'block'
            },).animate({
                left:'0px'
            },500)
        $(this).hide()
        $(this).nextAll('.close_nav').show(600).css({
            left:'180px'
        })
    })
    //close_nav를 클릭하면 메뉴 박스 왼쪽에서 나옴
    $('#header .menubox .close_nav').on('click', function () {
        $('.menuinv').animate({
            left:'-400px'
            },500)
        $(this).hide()
        $(this).prevAll('.open_nav').show(500)
    })

    



})(jQuery)