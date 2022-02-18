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
let path = window.location.pathname;
let bgPath;


if (skipNavCheck === "본문바로가기" || skipNavCheck === "본문 바로가기") {
    $("body a").first().after("<a href='https://cakwhdtj.github.io/' id='kooflix'><span>KOOFLIX로 돌아가기</span></a>");
}

$("#kooflix span").addClass('hide_clipPath');
if (path.includes('page') === false) {
    bgPath = "url(../../img/icons/apple-touch-icon-114x114.png)";
} else if (path.includes('page') === true) {
    bgPath = "url(../../../img/icons/apple-touch-icon-114x114.png)";
}
$("#kooflix").css({
    "background": bgPath,
    "background-size": "contain",
    "background-repeat": "no-repeat",
    "border-radius": "50%",
    "position": "fixed",
    "right": 10, "bottom": 10,
    "display": "block",
    "width": "4%", "height": initialWidth,
    "z-index": 999,
    "opacity": .5,
    "transition": "all .3s ease"
});


$(window).on("resize", function () {
    let iconWidth = $("#kooflix").width();
    $("#kooflix").css({ "height": iconWidth });
});

$("#kooflix").on("mouseenter", function (e) {
    isOn = true;
    for (let i = 0; i < pfEmph.length; i++) {
        emphOffsetT[i] = $(pfEmph[i]).offset().top;
        emphOffsetL[i] = $(pfEmph[i]).offset().left;
        emphWidth[i] = $(pfEmph[i]).outerWidth();
        emphHeight[i] = $(pfEmph[i]).outerHeight();
    }
    emphEffect();
    clearInterval(interval);
    interval = setInterval(emphAnimate, 1200);

    $(this).css({
        "opacity": 1,
        "transform": "scale(1.2)"
    });
    $(this).on('mouseleave', function () {
        isOn = false;
        $(this).css({
            "opacity": .5,
            "transform": "none"
        });
        $(".emphEffect").remove();
    });
    // e.preventDefault();
    // e.stopPropagation();
});


function emphEffect() {
    // console.log(pfEmph.length)
    for (let i = 0; i < pfEmph.length; i++) {
        $("body").append("<div class='emphEffect " + "e" + [i] + "'><span></span><span></span><span></span><span></span></div>");
        $(".e" + [i]).css({
            "width": emphWidth[i], "height": emphHeight[i],
            "top": emphOffsetT[i], "left": emphOffsetL[i]
        });
    }
}
function emphAnimate() {
    if (isOn === true) { $(".emphEffect").toggleClass("on"); }
}

$(window).on("scroll", function () {
    $(".emphEffect").remove();
    clearInterval(interval);
    clearTimeout(timer);
    timer = setTimeout(() => {
        if (isOn === true) { $("#kooflix").trigger("mouseenter"); }
    }, 1000);
});

