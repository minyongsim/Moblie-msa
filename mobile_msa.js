(function(){

    $('#header .open_nav').on('click', function () {
        $(this).next().stop().css({
            display:'block'
            }).animate({
                left:'0px'
            },500)
        $(this).hide()
        $(this).nextAll('.close_nav').show()
    })
    $('#header .close_nav').on('click', function () {
        $(this).prevAll('.menubox').stop().css({
            display:'none'
            }).animate({
                left:'0px'
            },500)
        $(this).hide()
        $(this).prevAll('.open_nav').show()
     
    })



})(jQuery)