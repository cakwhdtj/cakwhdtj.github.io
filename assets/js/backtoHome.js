$("#kooflix span").addClass('hide_clipPath');

$("#kooflix").css({ 
    "background" : "url(../../img/icons/apple-touch-icon-114x114.png)",
    "background-size" : "contain", "background-repeat" : "none",
    "border-radius" : "50%",
    "position" : "fixed",
    "left" : 10, "bottom": 10 ,
    "display" : "block" , 
    "width" : "8%" , 
    "z-index" : 999
});
let iconWidth = $("#kooflix").width();
$(window).on('resize', function () {
    $("#kooflix").css({"height" : iconWidth});
});
console.log(iconWidth);
console.log("hi");

