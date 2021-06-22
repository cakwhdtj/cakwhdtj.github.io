let skipNavCheck = $("body a").first().text();
let initialWidth = $(window).width() * 0.04;
let pfEmph = $(".pfEmph");
let emphOffsetT= [];
let emphOffsetL= [];
for (let i = 0; i < pfEmph.length; i++) {
    emphOffsetT[i] = $(pfEmph[i]).offset().top;
    emphOffsetL[i] = $(pfEmph[i]).offset().left;
}
if (skipNavCheck === "본문바로가기" || skipNavCheck === "본문 바로가기") {
    $("body a").first().after("<a href='https://cakwhdtj.github.io/' id='kooflix'><span>KOOFLIX로 돌아가기</span></a>");
}
$("#kooflix span").addClass('hide_clipPath');
$("#kooflix").css({ 
    "background" : "url(../../img/icons/apple-touch-icon-114x114.png)",
    "background-size" : "contain",
    "background-repeat" : "no-repeat",
    "border-radius" : "50%",
    "position" : "fixed",
    "right" : 10, "bottom": 10,
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
   emphEffect();
   $('.emEffect').animate({width: 0, height: 0});
    $(this).css({
        "opacity" : 1,
        "transform" : "scale(1.2)"
    });
    $(this).on('mouseleave', function () {
        $(this).css({
            "opacity" : .5,
            "transform" : "none"
        });
        $(".emphEffect").remove();
    });
});


function emphEffect () {
    for (let i = 0; i < pfEmph.length; i++) {
        console.log(emphOffsetT[i] , emphOffsetL[i]);
        $("body").append("<div class='emphEffect'>" + i + "</div>");
        $(".emphEffect").css({
            "position" : "absolute", "z-index" : "9999",
            "top" : emphOffsetT[i], "left" : emphOffsetL[i],
            "width" : 50, "height" : 50,
            "border" : "1px solid red",
            "border-radius" : "50%",
            "transition" : "all .3s ease"
        });
    }
}
