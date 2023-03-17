// 나중에 selector 수정
$("main > ul > li").on('click', function () {
    $(this).addClass('on');
    $("header").css({"display" : "none"});
    // $(".telecom").css({"transform" : "translate(-50%,-50%) scale(.8)"})

});

$(".close").on('click', function (e) {
    e.stopPropagation()
    $("main > ul > li").removeClass('on');
    $("header").removeAttr("style");
    $(".telecom").removeAttr("style")
});
