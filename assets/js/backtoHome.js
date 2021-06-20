$("#kooflix span").addClass('hide_clipPath');
let initialWidth = $(window).width() * 0.05;
$("#kooflix").css({ 
    "background" : "url(../../img/icons/apple-touch-icon-114x114.png)",
    "background-size" : "contain",
    "background-repeat" : "no-repeat",
    "border-radius" : "50%",
    "position" : "fixed",
    "left" : 10, "bottom": 10,
    "display" : "block", 
    "width" : "5%", "height" : initialWidth,
    "z-index" : 999
});
$(window).on('resize', function () {
    let iconWidth = $("#kooflix").width();
    $("#kooflix").css({"height" : iconWidth});
});
console.log(initialWidth);

