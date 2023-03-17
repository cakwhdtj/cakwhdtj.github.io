$("main > ul > li").on('click', function () {
    $(this).addClass('on');
    $("header").css({"display" : "none"});
});

$(".close").on('click', function (e) {
    e.stopPropagation()
    $("main > ul > li").removeClass('on');
    $("header").removeAttr("style");
    $(".telecom").removeAttr("style");
});


// var footerHTML = $('footer').html();
// $('.innerFooter').html(footerHTML);
