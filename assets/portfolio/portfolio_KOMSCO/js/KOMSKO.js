'use strict';
setBannerSlide('#slide5', false, 3000, 5);
checkScroll();
section1Side();
mainControl();
$(window).on('scroll resize', function () {
  checkScroll();
  section1Side();
});

$('#skipNav').on('click', function () {
  $(document).scrollTop($('#main').offset().top);
});
$('#header').on('mouseover', function (e) { //header 상황따라 .atTop 붙이고 때기
  if ($('#header').attr('class') === 'atTop') {
    $(this).removeClass('atTop');
  }
  $('#header').on('mouseleave', function () {
    if ($(document).scrollTop() < ($(window).height() / 2) && $('#header').attr('class') !== 'atTop' && $("ul.gnb > li > ul").hasClass('on') === false) {
      $(this).addClass('atTop');
    }
  });
  let arr = new Array();
  arr.push(e.pageY);
});
$('#header > .gnb > li > h3 > a').on('mouseover focus', function () {
  $(this).parent().parent().siblings().find('ul').removeAttr('style');
  $(this).parent().parent().siblings().find('ul').removeClass('on');
  $(this).parent().siblings('ul').css({ 'visibility': 'visible', 'opacity': 1, 'position': 'fixed' });
  $(this).parent().siblings('ul').addClass('on')
  $(this).parent().siblings('ul').on('mouseleave', function () {
    $(this).removeAttr('style');
    $(this).removeClass('on');
  });
});

$('.gnb.side').clone().appendTo('#side-nav'); //gnb side-nav로 복사
$('#open-side-nav').on('click', function () {
  $('#side-nav').addClass('open');
  $('body, html').css({ 'overflow': 'hidden', 'height': '100%' });
  $('#side-nav .card').parent().height(0);
});
$('#side-nav .btn-close').on('click', function () {
  $('#side-nav').removeClass('open');
  $('body, html').removeAttr('style');
  $('#side-nav .side.btn-open.down').removeClass('down');
  $('#side-nav').find('ul.open').css({ 'height': 0 }).removeClass('open');
});

$("#side-nav .side.btn-open").on("click", function () {
  $(this).toggleClass("down")
  $(this).parent().siblings().find(".down").removeClass("down");
  navSideOpen($(this).siblings('ul'));
})
function navSideOpen(selector) {
  selector.parent().siblings().find('>ul').removeClass('open').css({ 'height': 0 });
  // console.log(selector.parent().siblings().find('>ul'))
  selector.toggleClass('open');
  selector.hasClass('open') && (selector.height() === 0) ? selector.stop(true).animate({ 'height': (getheight()) }) : selector.stop(true).animate({ 'height': (0) });
  function getheight() {
    var _height = 0;
    var winWidth = $(window).width();
    var liHeights = [];
    var eachLine = [];
    var eachLineMax = [];

    selector.find('> li').each((i) => {
      liHeights.push(selector.find('> li:eq(' + i + ')').height())
    });
    for (let i = 0; i < parseInt(liHeights.length / 4); i++) {
      var x = (i * 4) + 1;
      var y = (i * 4) + 5;
      eachLine[i] = liHeights.slice(x, y);
      eachLineMax[i] = eachLine[i].reduce(function (previous, current) {
        return previous > current ? previous : current;
      });
    }
    _height = eachLineMax.reduce((a, b) => a + b);
    return (_height + 80);
  }
}
function mainControl() {
  var sectionNum = 0;
  var sectionOffset = 0;
  var timerId = 0;
  var scrollAmt = 0;

  $('section').each(function (i) {
    if (i < 5) {
      $('.main-control a').on('click', function () {
        var index = $(this).parent().index();
        clearTimeout(timerId);
        // $(this).parent().siblings().find('a').removeClass('on');
        // $(this).addClass('on');
        timerId = setTimeout(function () {
          sectionNum = $('#section' + (index + 1));
          sectionOffset = $(sectionNum).offset().top;
          $('html, body').animate({ 'scrollTop': sectionOffset }, 400);
        }, 10);
      });
    }
    var min = $(this).offset().top - ($(window).height() / 2);
    var max = $(this).offset().top + ($(window).height() / 2);
    $(document).on('scroll', function () {
      scrollAmt = $(document).scrollTop();
      var n = (i + 1);
      if (scrollAmt > min && scrollAmt <= max) {
        $('.main-control a').removeClass('on');
        $('.main-control li:eq(' + (n - 1) + ') > a').addClass('on');
      }
    });
  });
} // maincontrol
function section1Side() {
  var height = $('.section1-side li').height();

  $('.section1-side > ul').height((height * 3));
  $('.section1-side a.btn-close').on('click', function () {
    $('.section1-side a.btn-close').html('닫기');
    if ($('.section1-side > ul').height() === (height * 3)) {
      $(this).parent().find('ul').height((height * 5));
    } else if ($('.section1-side > ul').height() === (height * 5)) {
      $('.section1-side a.btn-close').html('더보기');
      $(this).parent().find('ul').height((height * 3));
    }
  });
}
$('ul.familySites > li:last-child > a').on('click', function () {
  $(this).parent().toggleClass('on');
});
function setBannerSlide(selector, status, speed, stopHere) {
  var $selector = $(selector);
  var numSlide = $selector.find('.slide li').length;
  var slideNow = 0;
  var slidePrev = 0;
  var slideNext = 0;
  var offsetLeft = 0;
  var boxWidth = 0;
  var barWidth = 0;
  var minOffsetLeft = 0;
  var timerId = '';
  var isTimerOn = status;
  var timerSpeed = speed;
  var timerId2 = '';
  var counter = 0;
  var stopAt = stopHere;

  resetUI();
  if (isTimerOn === true) {
    $selector.find('a.play').addClass('on');
  } else {
    $selector.find('a.play').removeClass('on');
  }
  showSlide(1);

  $selector.find('a.prev').on('click', function () {
    if (offsetLeft >= 0) {
      $selector.find('.slide').css({ 'transition': 'none' }).stop(true).animate({ 'left': '10px' }, 80).animate({ 'left': 0 }, 160, function () {
        showSlide(slideNow);
      });
    } else {
      showSlide(slidePrev);

    }
  });

  $selector.find('a.next').on('click', function () {
    if (offsetLeft <= minOffsetLeft) {
      $selector.find('.slide').css({ 'transition': 'none' }).stop(true).animate({ 'left': (minOffsetLeft - 10) + 'px' }, 80).animate({ 'left': minOffsetLeft + 'px' }, 160, function () {
        showSlide(slideNow);
      });
    } else {
      showSlide(slideNext);

    }
  });
  function resetUI() {
    boxWidth = $selector.find('.bannerBox').width();
    barWidth = 0;
    $selector.find('.slide li').each(function () {
      barWidth += $(this).outerWidth(true);
    });
    $selector.find('.slide').css({ 'width': (barWidth + 10) + 'px' });
    minOffsetLeft = boxWidth - barWidth;
  }
  function showSlide(n) {
    offsetLeft = -$selector.find('.slide li:eq(' + (n - 1) + ')').position().left;
    if (offsetLeft < minOffsetLeft) {
      offsetLeft = minOffsetLeft;
      numSlide = n;
    }
    $selector.find('.slide').css({ 'transition': 'left 0.5s', 'left': offsetLeft + 'px' });
    slideNow = n;
    slidePrev = (n <= 1) ? 1 : (n - 1);
    slideNext = (n >= stopAt) ? 1 : (n + 1);
    if (isTimerOn === true) {
      clearTimeout(timerId);
      timerId = setTimeout(function () { showSlide(slideNext); }, timerSpeed);
    }
  }
}
function checkScroll() {
  var topPosition = $(window).height() / 2;;
  var scrollAmt = $(document).scrollTop();
  if (scrollAmt > topPosition) {
    $('#header').removeClass('atTop');
  } else {
    $('#header').addClass('atTop');
  }
  if (scrollAmt > ($('#section2').offset().top / 2)) {
    $('.main-control').css({ 'visibility': 'visible', 'opacity': 1, 'top': topPosition + 'px' });
    $('.scroll-top').addClass('on');
  } else {
    $('.main-control').css({ 'visibility': 'none', 'opacity': 0 }).stop(true).removeAttr('style');
    $('.scroll-top').removeClass('on');
  }
}



//portfolio global
let pfPath = window.location.pathname;
if (pfPath.includes('page') === false) {
  document.write("<script src='../../../assets/js/portfolioGlobal.js'></script>");
} else if (pfPath.includes('page') === true) {
  document.write("<script src='../../../../assets/js/portfolioGlobal.js'></script>");
}
pfAdjustment();
function pfAdjustment() {
  let arr = $('.pfEmph');
  let speci = [];
  window.onload = function () {
    document.getElementById('kooflix').addEventListener('mouseover', () => {
      if ($("#header").hasClass('atTop') === true) {
        $(".e2").css({ "visibility": "hidden" });
      } else {
        $(".e2").css({ "visibility": "visible" });
      }
    });
  }
}
