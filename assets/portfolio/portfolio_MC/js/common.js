let clickedLis = [];

$("main > ul > li").on('click', function () {
    $(window).width() >= 1024 && $("header").hide();
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

});

$(".close").on('click', function (e) {
    e.stopPropagation();
    const $li = $(this).parents("li.on");
    const liIndex = clickedLis.indexOf($li[0]);
    if (liIndex !== -1) {
      clickedLis.splice(liIndex, 1);
    }
    $li.removeClass("on");
    $("header").toggle(!$('li.on').length);
    $(".telecom").removeAttr("style");
  });
