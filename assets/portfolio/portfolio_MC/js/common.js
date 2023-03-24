let clickedLis = [];

$("main > ul > li").on('click', function () {
    $(window).width() > 1024 && $("header").hide();
    $(window).width() <= 1024 && $("header h1.logo").hide();
    $(window).width() <= 1024 && $("main > ul").css({"padding-top" : 0});
    const $this = $(this);
    
    if (!clickedLis.includes($this[0])) {
        clickedLis.push($this[0]);
        $this.addClass('on');
        
        if (clickedLis.length > 2) {
        const $firstLi = $(clickedLis.shift());
        $firstLi.toggleClass('on');
        }
    } else {
        clickedLis.splice(clickedLis.indexOf($this[0]), 1);
        $this.toggleClass('on');
    }

    $(window).width() <= 1024 && $("main > ul > li:not(.on)").hide();
});

$(".close").on('click', function (e) {
    e.stopPropagation();
    $(window).width() <= 1024 && $("header h1.logo").show();
    $(window).width() > 1024 && $("header h1.logo").removeAttr("style");
    $(window).width() <= 1024 && $("main > ul").removeAttr("style");

    const $li = $(this).parents("li.on");
    const liIndex = clickedLis.indexOf($li[0]);
    if (liIndex !== -1) {
      clickedLis.splice(liIndex, 1);
    }
    $li.removeClass("on");
    $("header").toggle(!$('li.on').length);
    $(".telecom").removeAttr("style");
    $("main > ul > li").removeAttr("style")
  });

  $(".plans").on('click', function(e){
    // e.preventDefault();
    e.stopPropagation();
});


var lastWidth = $(window).width();

$(window).on('resize' , function () {
    var newWidth = $(window).width();
    if (newWidth != lastWidth) {
        $("li.on .close").click();
        $("main > ul > li.on").length ? $("header").hide() : null;
        $("main > ul > li").removeAttr("style");
    }
    lastWidth = newWidth;
  });
