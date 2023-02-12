$('a[href="#"]').on('click', function (e) {
  e.preventDefault();
});

$(document).on('click', function(e) {
  $(e.target).closest('#games').length ? '' : $('#games .on').removeClass('on');
});
$('#games').on('click', 'li', function() {
  $('#games .on').removeClass('on');
  $(this).addClass('on');
});



setSlides("#section1 > div.slide_container", 'slide' , 1);
setSlides("#section2.slide_container", 'label', 1);
setSlides("#section4 .slide_container", 'label', 3);




function setSlides(selector , type , firstSlide) {
  let $selector = $(selector);
  let slideType = ''; //slide , label, 
  let slideFirst = 1;
  slideType = type || 'slide';
  slideFirst = firstSlide !== undefined ? firstSlide : slideFirst;

  
  let numSlide = $selector.find(".slides > li").length;
  let slideNow = 0;
  let slideNext = 0;
  let slidePrev = 0;
  let slideIndex = 0; 

  $selector.find('.slides > li').each((i) => {
    $selector.find('.indicator').append('<li><a href="#"><span  class="hide_clipPath">' + (i + 1) + '번 슬라이드</span></a></li>\n');
  });
  showSlide(slideFirst);
 
  $selector.find('.control > button').on('click' , function () {
    $(this).attr('class') === 'right' ? showSlide(slideNext) : showSlide(slidePrev);
  });
  $selector.find('.indicator > li').on('click' , function (e) {
    showSlide($(this).index() + 1)
  });
  $selector.find('.slides li h4').on('click' , function (e) {
    showSlide($(this).parents("li").index()+ 1)
  });


  function showSlide(n) {
    $selector.find('.indicator li').removeClass('on');
    $selector.find('.indicator li:eq(' + (n-1) + ')').addClass('on');
    slideNow = n;
    $selector.find('.slides > li').removeClass('on');
    $selector.find('.slides > li:eq(' + (n-1) + ')').addClass('on');
    slidePrev = (n === 1) ? numSlide : (n - 1);
    slideNext = (n === numSlide) ? 1 : (n + 1);

    (slideType === 'slide') ?
     $selector.find('.slides').css({'left': -((n - 1) * 100) + '%' }) 
     : null;
  }
}



//portfolio global