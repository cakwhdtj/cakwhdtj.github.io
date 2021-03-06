var onloadWidth = window.outerWidth;
var resizeWidth = 1023;
window.onload = function () {
  onloadWidth = window.outerWidth;
}
gnbEffect(onloadWidth);
scroll();
setImageSlide('body.main div.image-slide:eq(0)', 1, true, 3000);
setImageSlide('div.galleryBox', 3, true, 2000, 'gallery');
setImageSlide('body.sub #game .image-slide:eq(0)', 1, false, 1500, 'gallery');
if (onloadWidth >= 1024) {
  gnbEffect(onloadWidth);
  tabIndex();
  $('body.sub #game .indicator li a').on('focus click', function () {
    galleryEvent('body.sub #game .indicator li a');
    $('body.sub #game .gallery li.next').removeClass('next');
    $('body.sub #game .gallery li.on ~ li').addClass('next');
  });
}
$(window).on('resize', function () {
  resizeWidth = window.outerWidth;
  gnbEffect(resizeWidth);
  if (resizeWidth > 1024) {
    tabIndex();
    $('body.sub #game .indicator li a').on('focus click', function () {
      galleryEvent('body.sub #game .indicator li a');
      $('body.sub #game .gallery li.next').removeClass('next');
      $('body.sub #game .gallery li.on ~ li').addClass('next');
    });
  }
});
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
});
$('#game .gallery > li > a').on('mouseover focusin', function () {
  $(this).parent().siblings('.on').removeClass('on');
  $(this).parent().addClass('on');
});
$('#game .gallery > li > a').on('mouseleave focusout', function () {
  $(this).parent().removeClass('on');
});
$('.gnb').clone().prependTo('#footer');
$('#goTop').on('click', function () {
  $('body, html').animate({ 'scrollTop': 0 }, 500);
});
if (onloadWidth < 1024 || resizeWidth < 1024) { //mobile
  mobileAdd();
  $('.gnb > li > a').on('click', function () {
    $(this).parent().siblings('.on').removeClass('on');
    $(this).parent().toggleClass('on');
  });
}

function mobileAdd() {
  $('<i class="fas fa-angle-up mobile_only"></i>').appendTo('.gnb > li > a');
}

function galleryEvent(selector) {
  $selector = $(selector)
  var afterParent = document.querySelector('body.sub #game .indicator li.on a');
  var text = window.getComputedStyle(afterParent, '::after').content;
  $selector.find('span').append('<i>' + text + '</i>');
  $selector.on('focusout', function () {
    $selector.find(' i').remove();
  });
}

function tabIndex() {
  $('body.sub #game a').on('focus click', function () {
    var arr = $(this).parents();
    var checkIfinIS = arr.filter('section#section1.image-slide').length;
    if (checkIfinIS === 0) {
      $('a').removeAttr('tabindex');
    }
  });
  $('body.sub #game .image-slide li a').on('focus', function () {
    $('body.sub #game .indicator li').each(function (i) {
      $(this).find('a').attr('tabindex', ((i * 2) + 1));
    });
    $('body.sub #game .gallery li .featureBtn a:first-child').each(function (i) {
      $(this).attr('tabindex', ((i * 2) + 2));
      var set = $(this).attr('tabindex');
      $('body.sub #game .gallery > li:eq(' + (i) + ') a').attr('tabindex', set);
    });
    $('body.sub #game .gallery > li:eq(5) a').on('focus', function () {
      $('body a').removeAttr('tabindex');
    });
    $('body.sub #game .gallery > li:eq(5) a').on('focusout', function () {
      $('#footer a:eq(0)').focus();
    });
    $('body.sub #game .indicator li:eq(0) a').on('focus', function () {
      $('a').removeAttr('tabindex');
      $(this).on('focusout', function () {
        $('#header p a:eq(1)').focus();
      });
    });
  });
}

function setImageSlide(selector, first, status, speed, type) {
  var $selector = $(selector);
  var type = type; //'gallery' , 'sldie'
  if (type === undefined) type = 'slide';
  type = ('.' + type);
  var numSlide = $selector.find(type + ' > li').length;
  var slideNow = 0;
  var slidePrev = 0;
  var slideNext = 0;
  var slideFirst = first;
  var timerId = '';
  var isTimerOn = status;
  var timerSpeed = speed;
  var slideScrollOn = $selector.find('.galScroll');
  var scrollEvent = ('onmousewheel' in window) ? 'mousewheel' : 'DOMMouseScroll';
  var isBlocked = false;
  var isMouseOver = false;
  var passive = true;

  $selector.find(type + ' > li').each(function (i) {
    if (type === '.slide') { $(this).css({ 'left': (100 * i) + '%', 'display': 'block' }); }
    $selector.find('.indicator').append('<li><a href="#"><span  class="hide_clipPath">' + (i + 1) + '??? ????????????</span></a></li>\n');
  });
  showSlide(slideFirst);
  $selector.find(type + ' > li:eq(' + (slideFirst - 1) + ')').addClass('on');
  $selector.find('.indicator li a').on('click focus', function () {
    var index = $selector.find('.indicator li').index($(this).parent());
    showSlide(index + 1);
  });
  $selector.find('a.prev').on('click', function () {
    showSlide(slidePrev);
  });
  $selector.find('a.next').on('click', function () {
    showSlide(slideNext);
  });
  $(document).ready(function () { isMouseOver = true; });
  $selector.on('mouseover', function () {
    if ($('body.sub #game .indicator li:last-child').attr('class') !== 'on') isMouseOver = true;
    $(this).on('mouseleave', function () {
      isMouseOver = false;
    });
  });
  if (slideScrollOn.length === 1) {
    passive = false;
    galleryScroll(passive);
  }

  function galleryScroll(ToF) {
    var hitBottom = false;
    let array = [];
    for (let i = 0; i < $('#game .indicator > li').length; i++) {
      array[i] = $('.galScroll > li:eq(' + i + ')').offset().top;
    }
    array.push($(document).height());
    window.addEventListener(scrollEvent, function (e) {
      var scrollAmt = $(document).scrollTop();
      var bottom = $(document).height() - $(window).height();
      if (window.outerWidth < 1024) {
        $('#game .indicator > li.on').removeClass('on');
        $('.stick').css({
          'position': 'absolute',
          'top': ($('#footer').offset().top - ($('#game .indicator').height() + 30)),
        });
        for (let i = 0; i < $('#game .indicator > li').length; i++) {
          if ((scrollAmt + $('#header').height()) > array[i] && ((scrollAmt + $('#header').height()) < array[i + 1])) {
            $('#game .indicator > li:eq(' + i + ')').addClass('on');
          }
        }
        if ($('#footer').offset().top <= ($('#game .indicator').offset().top + $('#game .indicator').height() + 30)) {
          $('#game .indicator').addClass('stick');
          if (scrollAmt < ($('#footer').offset().top - $('#game .indicator').height() - 100)) {
            $('#game .indicator').removeClass('stick');
            $('#game .indicator').removeAttr('style');
          }
        }
        return false;
      }
      if (scrollAmt === bottom) hitBottom = true;
      if (scrollAmt === 0 && hitBottom === true) { //???????????? ?????? ??? ?????? ?????????
        isMouseOver = true;
        isBlocked = false;
        hitBottom = false;
      }
      if (isMouseOver === false) return false;
      e.preventDefault();
      if (isBlocked === true) return false;
      isBlocked = true;
      var delta = 0;
      if (scrollEvent === 'mousewheel') {
        delta = e.wheelDelta / -120;
      } else {
        delta = e.detail / 3;
      }
      if (delta > 0) { // ???????????? ????????? 
        if (slideNow === (numSlide - 1)) {
          timerId = setTimeout(function () {
            isBlocked = true;
            isMouseOver = false;
          }, timerSpeed);
        }
        if ($('body.sub #game .indicator li:last-child').attr('class') !== 'on') { //????????? ??????????????? on??? ?????????
          isBlocked = true;
          showSlide(slideNext);
          timerId = setTimeout(function () { isBlocked = false; }, timerSpeed);
        }
      } else if (delta < 0) { //???????????? ?????????
        isBlocked = true;
        showSlide(slidePrev);
        timerId = setTimeout(function () { isBlocked = false; }, timerSpeed);
      }
      $('body.sub #game .gallery li.next').removeClass('next');
      $('body.sub #game .gallery li.on ~ li').addClass('next');
    }, { 'passive': ToF });
  }
  function showSlide(n) {
    if (type === '.slide') {
      if (slideNow === 0) {
        $selector.find(type).css({ 'transition': 'none', 'left': -((n - 1) * 100) + '%' });
      } else {
        $selector.find(type).css({ 'transition': 'left 0.5s', 'left': -((n - 1) * 100) + '%' });
      }
    }
    if (type === '.gallery' && window.outerWidth < 1024) {
      let scrGoTo = ($('#game .galScroll > li:eq(' + (n - 1) + ')').offset().top) - $('#header').height();
      $('body, html').animate({ 'scrollTop': scrGoTo }, 500);
      console.log('hi')
    }
    $selector.find('.indicator li').removeClass('on');
    $selector.find('.indicator li:eq(' + (n - 1) + ')').addClass('on');
    slideNow = n;
    $selector.find(type + ' > li').removeClass('on');
    $selector.find(type + ' > li:eq(' + (n - 1) + ')').addClass('on');
    slidePrev = (n === 1) ? numSlide : (n - 1);
    slideNext = (n === numSlide) ? 1 : (n + 1);
    if (isTimerOn === true) {
      clearTimeout(timerId);
      timerId = setTimeout(function () { showSlide(slideNext); }, timerSpeed);
    }
  }
}
function gnbEffect(widthCheck) {
  $('#gnbEffect').remove();
  var offsetLeft = [];
  var width = [];
  var top = [];
  var index = 0;
  if (widthCheck < 1024) {
    $('<div id="gnbEffect"><span></span><span></span><span></span></div>').appendTo('#header');
    $('#gnbEffect').on('click', function () {
      $(this).toggleClass('on');
      $('.gnb').toggleClass('on');
      $('#header').toggleClass('bg');
    });
  } else if (widthCheck >= 1024) {
    $('<div id="gnbEffect"></div>').appendTo('#header');
    $('.gnb > li').on('mouseover', function () {
      $('.gnb > li > a > span').each(function (i) {
        offsetLeft[i] = $(this).offset().left;
        width[i] = $(this).outerWidth();
        top[i] = $(this).offset().top + $(this).height();
      });
      index = $(this).index();
      $('#gnbEffect').css({ 'width': width[index], 'left': (offsetLeft[index]) });
    });
  }
}
function scroll() {
  var scrollEvent = ('onmousewheel' in window) ? 'mousewheel' : 'DOMMouseScroll';
  var scrollAmt = 0;
  var offTop = ($('#section1').outerHeight() / 2);
  window.addEventListener("scroll", (event) => {
    scrollAmt = this.scrollY;
    if (scrollAmt >= offTop) {
      $('#header').addClass('scrolled');
      $('#goTop').css({ 'visibility': 'visible', 'opacity': 1 });
    } else {
      $('#header').removeClass('scrolled');
      $('#goTop').css({ 'visibility': 'hidden', 'opacity': 0 });
    }
  });
}

$('a[href="#"]').on('click', function (e) {
  e.preventDefault();
});


//portfolio global
let pfPath = window.location.pathname;
if (pfPath.includes('page') === false) {
  document.write("<script src='../../../assets/js/portfolioGlobal.js'></script>");
} else if (pfPath.includes('page') === true) {
  document.write("<script src='../../../../assets/js/portfolioGlobal.js'></script>");
}
