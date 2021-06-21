$('a[href="#"]').on('click', function (e) {
  e.preventDefault();
});
setImageSlide('div.image-slide:eq(0)', 1, true, 3000);
setImageSlide('div.galleryBox', 3, true, 2000, 'gallery');
gnbEffect();

$('#header').on('mouseover', function () {
  $(this).addClass('on');
});

$('#header').on('mouseleave', function () {
  $(this).removeClass('on');
});

$('.gnb > li > a').on('mouseover focus', function () {
  $(this).closest('header').addClass('on');
  $('#header p a:last-child').on('focusout', function () {
    $(this).closest('header').removeClass('on');
  });
});

$('#header p > a').on('click', function () {
  $(this).parent().find('.on').removeClass('on')
  $(this).addClass('on');
})


$('.gallery > li > a').on('mouseover focusin', function () {
  $(this).parent().siblings('.on').removeClass('on');
  $(this).parent().addClass('on');
});

$('.gallery > li > a').on('mouseleave focusout', function () {
  $(this).parent().removeClass('on');
});

$('.gnb').clone().prependTo('#footer');

$('#goTop').on('click', function () {
  $('body, html').animate({ 'scrollTop': 0 }, 500);
});

function setImageSlide(selector, first, status, speed, type) {
  var $selector = $(selector);
  var type = type; //'gallery' , 'sldie'
  if (type === undefined) type = 'slide';
  type = ('.' + type);
  var numSlide = $selector.find(type + ' li').length;
  var slideNow = 0;
  var slidePrev = 0;
  var slideNext = 0;
  var slideFirst = first;
  var timerId = '';
  var isTimerOn = status;
  var timerSpeed = speed;
  $selector.find('.slide li').each(function (i) {
    $(this).css({ 'left': (100 * i) + '%', 'display': 'block' });
    $selector.find('.indicator').append('<li><a href="#"><span  class="hide_clipPath">' + (i + 1) + '번 슬라이드</span></a></li>\n');
  });
  showSlide(slideFirst);
  $selector.find(type + 'li:eq(' + slideFirst + ')').addClass('on');
  $selector.find('.indicator li a').on('click', function () {
    var index = $selector.find('.indicator li').index($(this).parent());
    showSlide(index + 1);
  });
  $selector.find('a.prev').on('click', function () {
    showSlide(slidePrev);
    // $selector.find('.slide li').css({'l;ef'})
  });
  $selector.find('a.next').on('click', function () {
    showSlide(slideNext);
  });

  function showSlide(n) {
    if (type === '.slide') {
      if (slideNow === 0) {
        $selector.find(type).css({ 'transition': 'none', 'left': -((n - 1) * 100) + '%' });
      } else {
        $selector.find(type).css({ 'transition': 'left 0.5s', 'left': -((n - 1) * 100) + '%' });
      }
    }
    $selector.find('.indicator li').removeClass('on');
    $selector.find('.indicator li:eq(' + (n - 1) + ')').addClass('on');
    slideNow = n;
    $selector.find(type + ' li').removeClass('on');
    $selector.find(type + ' li:eq(' + (n - 1) + ')').addClass('on');
    slidePrev = (n === 1) ? numSlide : (n - 1);
    slideNext = (n === numSlide) ? 1 : (n + 1);
    if (isTimerOn === true) {
      clearTimeout(timerId);
      timerId = setTimeout(function () { showSlide(slideNext); }, timerSpeed);
    }
  }
}
function gnbEffect() {
  var offsetLeft = [];
  var width = [];
  var index = 0;
  $('<div id="gnbEffect"></div>').appendTo('#header')
  $('.gnb > li').on('mouseover', function () {
    $('.gnb > li > a > span').each(function (i) {
      offsetLeft[i] = $(this).offset().left;
      width[i] = $(this).width();
    });
    index = $(this).index();
    console.log(offsetLeft);
    $('#gnbEffect').css({ 'width': width[index], 'left': (offsetLeft[index]) });
  });
}

scroll();
function scroll() {
  var scrollEvent = ('onmousewheel' in window) ? 'mousewheel' : 'DOMMouseScroll';
  var scrollAmt = 0;
  var offTop = ($('#section1').outerHeight() / 2);
  window.addEventListener("scroll", (event) => {
    scrollAmt = this.scrollY;
    if (scrollAmt >= offTop) {
      $('#header').css({ 'background': '#ffffff' });
      $('.gnb > li > a').css({ 'color': '#111111' });
      $('#header p a.on').css({ 'color': '#111111' });
      $('#header p span').css({ 'color': '#111111' });
      $('#header h1 a').addClass('on');
    } else {
      $('#header').removeAttr('style');
      $('.gnb > li > a').removeAttr('style');
      $('#header p a.on').removeAttr('style');
      $('#header p span').removeAttr('style');
      $('#header h1 a').removeClass('on');
    }
  });
}