$('a[href="#"]').on('click', function (e) {
  e.preventDefault();
});


$("body").on("click" , function (e) {$(e.target).parents("#games")[0] === undefined ? $("#games").find("li.on").removeClass('on') : onAdder(e.target);});
setSlides("#section1 > div.slide_container");


function onAdder(e , container) {
  let selector = e;
  let parents = $(container)
  $(selector).closest('li').siblings('.on').removeClass('on')
  $(selector).closest('li').toggleClass('on');
}
function setSlides(selector) {
  let $selector = $(selector);
  let numSlide = $selector.find(".slides > li").length;
  let n = 0;
  let slideNow = 0;
  let slidePrev = n - 1;
  let slideNext = n + 1;

  $selector.find('.slides > li').each((i) => {
    $selector.find('.indicator').append('<li><a href="#"><span  class="hide_clipPath">' + (i + 1) + '번 슬라이드</span></a></li>\n');
  });
  $selector.find(".control > button").on("click", function (e) {
    console.log(n);
    $(e.currentTarget).hasClass("left") ? showSlide(slidePrev ,  $selector.find('.indicator')) : showSlide(slideNext , $selector.find('.indicator'));
  })
}
function showSlide(n , selector) {
  let $selector = $(selector);
  // $selector.find('.indicator li').removeClass('on');
  onAdder($selector.find('li:eq(' + (n - 1) + ')'));
}


//portfolio global