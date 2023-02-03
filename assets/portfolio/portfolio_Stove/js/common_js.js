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
  $selector.find('.slides > li').each((i) => {
    $selector.find('.indicator').append('<li><a href="#"><span  class="hide_clipPath">' + (i + 1) + '번 슬라이드</span></a></li>\n');
  });
}
function showSlide(n , selector){
  $selector.find('.indicator li').removeClass('on');
  $selector.find('.indicator li:eq(' + (n - 1) + ')').addClass('on');
}


//portfolio global