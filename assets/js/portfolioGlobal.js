let skipNavCheck = $("body a").first().text();
let initialWidth = $(window).width() * 0.04;
let pfEmph = $(".pfEmph");
let emphOffsetT = [];
let emphOffsetL = [];
let emphWidth = [];
let emphHeight = [];
let timer;
let interval;
let count = 0;
let isOn = false;

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

$(window).on("resize", function () {
    let iconWidth = $("#kooflix").width();
    $("#kooflix").css({"height" : iconWidth});
});

$("#kooflix").on("mouseenter", function () {
    isOn = true;
    for (let i = 0; i < pfEmph.length; i++) {
        emphOffsetT[i] = $(pfEmph[i]).offset().top;
        emphOffsetL[i] = $(pfEmph[i]).offset().left;
        emphWidth[i] = $(pfEmph[i]).outerWidth();
        emphHeight[i] = $(pfEmph[i]).outerHeight();
    }

    emphEffect();
    interval = setInterval(emphAnimate, 500);

    $(this).css({
        "opacity" : 1,
        "transform" : "scale(1.2)"
    });
    $(this).on('mouseleave', function () {
        isOn = false;
        $(this).css({
            "opacity" : .5,
            "transform" : "none"
        });
        $(".emphEffect").remove();
    });
});


function emphEffect() {
       for (let i = 0; i < pfEmph.length; i++) {
        $("body").append("<div class='emphEffect " + "e" + [i] + "'></div>");
        $(".emphEffect").css({
            "position" : "absolute",
            "opacity" : .7,
            "border" : "1px solid rgba(254, 11, 24, 0.5)",
            "box-shadow" : "5px 5px 25px 5px red",
        });
        $(".e" + [i]).css({
            "width" : emphWidth[i], "height" : emphHeight[i], 
            "top" : emphOffsetT[i], "left" : emphOffsetL[i]
        });    
    } 
}
function emphAnimate() {
    for (let i = 0; i < pfEmph.length; i++) {
        $(".e"+ [i]).fadeOut(500, 0);
        $(".e"+ [i]).fadeIn(300, 0);
    }
}

$(window).on("scroll", function () {
    // console.log(isOn);
    $(".emphEffect").remove();
    clearTimeout(timer);
    if (isOn === true) {
        timer = setTimeout(function() {
            for (let i = 0; i < pfEmph.length; i++) {
                emphOffsetT[i] = $(pfEmph[i]).offset().top;
                emphOffsetL[i] = $(pfEmph[i]).offset().left;
                emphWidth[i] = $(pfEmph[i]).outerWidth();
                emphHeight[i] = $(pfEmph[i]).outerHeight();
            }
            emphEffect();
            interval = setInterval(emphAnimate, 800);
            console.log(isOn);
        }, 1000);
    }
});

