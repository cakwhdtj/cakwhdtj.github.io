// 나중에 selector 수정
$("main > ul > li").on('click', function () {
    $(this).addClass('on');
    doOnClick();
});
$(".close").on('click', function (e) {
    e.stopPropagation()
    $("main > ul > li").removeClass('on');
    doOnClick();
    $(".telecom").css({"transform" : "translate(-50%,-50%) scale(1)"})

});



function doOnClick() {
    $("main > ul > li.on").css({"width" : 60+"%"});
    $("main > ul > li").not("li.on").css({"width": (40/3)+"%"});
    $("main > ul > li.on").css({"width" : 60+"%"});
    if ($("main > ul > li").hasClass('on')) {
            $("header").css({"display":"none"});
        } else {
            $("main > ul > li").css({"width":25+"%"});
            $("header").css({"display":"flex"});
        };
    $(".telecom").css({"transform" : "translate(-50%,-50%) scale(.5)"})

    
}
