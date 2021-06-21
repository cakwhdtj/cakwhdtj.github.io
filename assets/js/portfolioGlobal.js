$("#skip-nav").after("<a href='https://cakwhdtj.github.io/' id='kooflix'><span>KOOFLIX로 돌아가기</span></a>");
$("#kooflix span").addClass('hide_clipPath');
let initialWidth = $(window).width() * 0.04;
$("#kooflix").css({ 
    "background" : "url(../../img/icons/apple-touch-icon-114x114.png)",
    "background-size" : "contain",
    "background-repeat" : "no-repeat",
    "border-radius" : "50%",
    "position" : "fixed",
    "left" : 10, "bottom": 10,
    "display" : "block", 
    "width" : "4%", "height" : initialWidth,
    "z-index" : 999,
    "opacity" : .5,
    "transition" : "all .3s ease"
});
$(window).on('resize', function () {
    let iconWidth = $("#kooflix").width();
    $("#kooflix").css({"height" : iconWidth});
});
$('#kooflix').on('mouseenter', function () {
    $(this).css({
        "opacity" : 1,
        "transform" : "scale(1.2)"
    });
    $(this).on('mouseleave', function () {
        $(this).css({
            "opacity" : .5,
            "transform" : "none"
        });
    });
});
