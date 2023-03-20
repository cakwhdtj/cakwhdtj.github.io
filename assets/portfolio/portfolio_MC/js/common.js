$("main > ul > li").on('click', function () {
    $(this).addClass('on');
    $("header").css({"display" : "none"});
});

$(".close").on('click', function (e) {
    e.stopPropagation()
    $(this).parents("li.on").removeClass("on");
    $("header").toggle(!$('li.on').length);
    $(".telecom").removeAttr("style");
});


// var footerHTML = $('footer').html();
// $('.innerFooter').html(footerHTML);
