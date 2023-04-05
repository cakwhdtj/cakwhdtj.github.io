$('a[href="#"]').on('click', function (e) {
  e.preventDefault();
});

$(document).on('click', function(e) {
  $(e.target).closest('#games').length ? '' : $('#games li.on').removeClass('on');
  $(e.target).closest('#gnb_side > li').length ? '' : $('#gnb_side li.on').removeClass('on');
});
$('#games, #gnb_side').on('click', 'li', function() {
  $('#games li.on').removeClass('on');
  $('#gnb_side li.on').removeClass('on');
  $(this).addClass('on');
});

$('#games').clone().prependTo('#gnb_games');


setSlides("#section1 > div.slide_container", 'slide' , 1, true);
setSlides("#section2.slide_container", 'label', 1, false);
setSlides("#section4 #s4Upper", 'label', 1, false);
setSlides("#section4 #s4Lower", 'label', 3, false);
setSlides("footer div.slide_container", 'label', 1, true);


function setSlides(selector , type , firstSlide , timer) {
  let $selector = $(selector);
  let slideType = ''; //slide , label, 
  let slideFirst = 1;
  slideType = type || 'slide';
  slideFirst = firstSlide !== undefined ? firstSlide : slideFirst;
  let isTimer = (timer === undefined) ? false : timer;
  let intervalId;
  let numSlide = $selector.find(".slides > li").length;
  let slideNow = 0;
  let slideNext = 0;
  let slidePrev = 0;
  let slideIndex = 0; 

  $selector.find('.slides > li').each((i) => {
    $selector.find('.indicator').append('<li><a href="#"><span  class="hide_clipPath">' + (i + 1) + '번 슬라이드</span></a></li>\n');
  });
  showSlide(slideFirst);
  if (timer) {startInterval();}
  
  $selector.find('.control > button').on('click' , function () {
    $(this).attr('class') === 'right' ? showSlide(slideNext) : showSlide(slidePrev);
    resetInterval();
  });
  $selector.find('.indicator > li').on('click' , function (e) {
    showSlide($(this).index() + 1);
    resetInterval();
  });
  $selector.find('.slides li .showThis').on('click' , function (e) {
    showSlide($(this).parents("li").index()+ 1);
    resetInterval();
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
  function startInterval() {
    intervalId = setInterval(function() {
      showSlide(slideNext);
    }, 8000);
  }
  function stopInterval() {
    clearInterval(intervalId);
  }
  function resetInterval() {
    if (timer) {
      stopInterval();
      startInterval();
    }
  }
}

//portfolio global