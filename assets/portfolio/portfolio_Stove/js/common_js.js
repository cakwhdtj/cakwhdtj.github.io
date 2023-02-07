$('a[href="#"]').on('click', function (e) {
  e.preventDefault();
});

setSlides("#games")
setSlides("#section1 > div.slide_container");
setSlides("#section1 > div.slide_container");



function setSlides(selector) {
  let $selector = $(selector);
  let numSlide = $selector.find(".slides > li").length;
  let slideFirst = 1;
  let slideNow = 0;
  let slideNext = 0;
  let slidePrev = 0;
  let slideIndex = 0; 

  $selector.find('.slides > li').each((i) => {
    $selector.find('.indicator').append('<li><a href="#"><span  class="hide_clipPath">' + (i + 1) + '번 슬라이드</span></a></li>\n');
  });
  showSlide(slideFirst);
 

  
  $selector.find(".control > button").on("click" , function () {
    $(this).attr('class') === 'right' ? showSlide(slideNext) : showSlide(slidePrev);
  });

  function showSlide(n) {
    $selector.find(".indicator li").removeClass("on");
    $selector.find(".indicator li:eq(" + (n-1) + ")").addClass("on");
    slideNow = n;
    $selector.find(".slides li").removeClass("on");
    $selector.find(".slides li:eq(" + (n-1) + ")").addClass("on");
    slidePrev = (n === 1) ? numSlide : (n - 1);
    slideNext = (n === numSlide) ? 1 : (n + 1);

    $selector.find(".slides").css({'left': -((n - 1) * 100) + '%' });
    // (n === numSlide) ? 
  }
}



//portfolio global