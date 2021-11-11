"use strict";
var scrollAmt = $(document).scrollTop();
headerEffect();
$(document).on('click', 'a[href="#"]', function (e) {
  e.preventDefault();
});

$("#headerRightBtn > li:nth-child(2) > a").on("click", function () {
  $("#headerRightBtn li > ul").addClass("open");
  $(".wrapper").addClass("bg");
  $("ul#hashtag").after("<div class='bg'></div>");
  $("nav > div").on("click", function () {
    $("#closeSideBtn > a").trigger('click');
  })
});
$("#closeSideBtn > a").on("click", function () {
  cleaner('#headerRightBtn li > ul', 'no', 'open');
  cleaner('.bg', 'no', 'bg');
  $("nav > div").remove();
});
$('#hashtag > li > a, a#downArrow').on('click', function () {
  if (this.hash !== '') {
    var hash = this.hash;
    $('html, body').stop(true).animate({ 'scrollTop': $(hash).offset().top }, 500, function () {
      window.location.hash = hash;
    });
  }
});

$("#section_1 > p").clone().prependTo("#section_2");
$("#section_2 > p.sectionTitle").clone().prependTo("#section_2 .imageSlide > li:nth-child(1)");
$("#section_3 > p.sectionTitle").clone().prependTo("#section_3 .imageSlide > li:nth-child(1)");

$('.scrolled .sectionTitle > a').on('click', function () {
  slideOpener($(this));
  $('#header').css({ 'visibility': 'hidden' });
  $('#header > h1 > a').css({ 'visibility': 'visible', 'background-position': '-198px 0' });
  $('#footer').css({ 'visibility': 'hidden' });
  marginAdder(this);
  $('.slideInSection > a').on('click', function () {
    $(document).scrollTop($(this).parent().parent().offset().top);
    cleaner(this, 2, 'open');
    cleaner('ul.indicator > li', 1, 'on');
    $('.indicator_bar').width(78);
    $('#header').css({ 'visibility': 'unset' });
    $('#header > h1 > a').removeAttr('style');
    $('#footer').css({ 'visibility': 'unset' });
    $('ul.imageSlide').removeAttr('style');
    $('.sectionVideo').removeAttr('style');
  });
});

$(".slideInSection .indicator > li > a").on('click', function () {
  var sectionCheck = $(this).parent().parent().parent().parent().attr('id');
  cleaner(this, 2, 'on');
  $(this).parent().addClass("on")
  imgSlider($(this).parent(), sectionCheck);
  sliderIndicator($(this), sectionCheck);
});

$(window).on('scroll', function (e) {
  scrollAmt = $(document).scrollTop();
  cleaner('#hashtag li a', 1, 'on');
  headerEffect();
});
var onloadWidth = $(window).width();
var resizeWidth = 1024;
$(window).on('resize', function () {
  resizeWidth = $(window).width();
});
var numPage = $('section').length;
var pageNow = 0;
var pagePrev = 0;
var pageNext = 0;
scrollEvent();
function scrollEvent() {
  // var numPage = $('section').length;
  // var pageNow = 0;
  // var pagePrev = 0;
  // var pageNext = 0;
  var scrollEvent = ('onmousewheel' in window) ? 'mousewheel' : 'DOMMouseScroll'; //browser 확인
  var isBlocked = false;
  var timerDebounce = 0;

  window.addEventListener(scrollEvent, function (e) {
    console.log(isBlocked)
    if ($('#headerRightBtn').find('ul').attr('class') === 'open' || resizeWidth < 1024) {
      return false;
    }
    e.preventDefault();
    if (isBlocked === true) return false;
    isBlocked = true;
    var delWheel = 0;
    if (scrollEvent === 'mousewheel') {
      delWheel = e.wheelDelta / -120;
    } else {
      delWheel = e.detail / 3;
    }
    if (delWheel > 0) {
      showPage(pageNext);
    } else if (delWheel < 0) {
      showPage(pagePrev);
    }
  }, { 'passive': false });

  function showPage(n) {
    timerDebounce = setTimeout(() => {
      scrollAmt = $('section:eq(' + (n - 1) + ')').offset().top;
      $('html').stop(true).animate({ 'scrollTop': scrollAmt }, 500, function () {
        isBlocked = false;
      });
      pageNow = n;
      pagePrev = (n <= 1) ? 1 : (n - 1);
      pageNext = (n >= numPage) ? numPage : (n + 1);
    }, 700);
  }
  clearTimeout(timerDebounce);
}
function headerEffect() {
  if (($('#section_2').offset().top > scrollAmt)) {
    $('#hashtag > li:nth-child(1) > a').addClass('on');
  };
  if (($('#section_2').offset().top <= scrollAmt)) {
    $('#header').addClass('scrolled');
    $('#footer').addClass('scrolled');
    if (($('#section_2').offset().top <= scrollAmt) && ($('#section_3').offset().top > scrollAmt)) {
      $('#hashtag > li:nth-child(2) > a').addClass('on');
    }
    if (($('#section_3').offset().top <= scrollAmt)) {
      $('#hashtag > li:nth-child(3) > a').addClass('on');
    }
  } else {
    cleaner('#header', 'no', 'scrolled');
    cleaner('#footer', 'no', 'scrolled');
  };
}
function slideOpener(selector) {
  // click 된 a가 있는 section에 div.slideInSection 을 연다
  // scroll을 안움직이게 한다
  selector.parent().parent().find(".slideInSection").addClass('open');
  selector.parent().parent().find(".slideInSection .indicator li:eq(1)").addClass('on');
  $(document).scrollTop(selector.parent().parent().offset().top);
  if (($(window).width()) >= 1024) {
    $('.slideInSection').on('scroll touchmove mousewheel', function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  }
}
// indicator 에 paremeter 하나 더 받아서 (RorL) if 위에서 R,L 구해서 넣어줌
// R 이면 다음형제에 on이랑 , L이면 이전형제에 on
function sliderIndicator(selector, section) {
  // click 된 a가 있는 section에 div.slideInSection 안에 indicator 효과
  var indicatorLength = ((selector.offset().left + selector.outerWidth()) - $(".slideInSection .indicator").offset().left);
  section = '#' + section;
  $(section + " .indicator_bar").width(indicatorLength + 3);
}
function cleaner(selector, depth, Removing) {
  // parameter 로 받고 class를 지운다
  selector = $(selector);
  if (depth === 'no') {
    selector.removeClass(Removing);
  }
  if (depth === 1) {
    selector.parent().find('.' + Removing).removeClass(Removing);
  }
  if (depth === 2) {
    selector.parent().parent().find('.' + Removing).removeClass(Removing);
  }
}
function marginAdder(sectionCheck) {
  var section = sectionReturn(sectionCheck);
  $(section + ' > li').each(function () {
    var boxWidth = $(this).width();
    var margin = [Math.abs(boxWidth - 1400) / 2];
    boxWidth = [boxWidth];
    if ($(window).width() <= 1440) {
      margin = margin / 2;
    }
    $(section + ' > li + li').css({ 'margin-right': margin + 'px' });
  });
}
function imgSlider(n, section) {
  n = $(n);
  var selected = '#' + section + ' ul.imageSlide';
  var index = n.index() - 1;
  var slideLeft = $(selected).offset().left;
  var boxLeft = $(selected + ' > li:eq(' + index + ')').offset().left;
  var boxWidth = $(selected + ' > li:eq(' + index + ')').width();
  var halfWindow = ($(window).width() / 2);
  var moveAmt = ((boxLeft - slideLeft) * -1) + halfWindow - (boxWidth / 2);
  $(selected).offset({ left: moveAmt });
}
function sectionReturn(sectionCheck) {
  var section = $(sectionCheck).parent().parent().attr('id');
  section = '#' + section + ' ul.imageSlide';
  return section;
}


//portfolio global

$('.scrolled > .sectionTitle a span.textEmph').addClass("pfEmph");
document.write("<script src='../../../assets/js/portfolioGlobal.js'></script>");
pfAdjustment();


function pfAdjustment() {
  let arr = $('.pfEmph');
  let speci = [];
  let closeBtn;
  for (let i = 0; i < arr.length; i++) {
    let arrClass = $(arr[i]);
    arrClass.hasClass('indicator') ? speci.push(i) : false;
    if (arrClass.parent('#closeSideBtn').length === 1) {
      closeBtn = i;
    }
  }
  window.onload = function () {
    document.getElementById('kooflix').addEventListener('mouseover', () => {
      if ($("#header nav ul#headerRightBtn li > ul").hasClass("open")) {
        $(".emphEffect.e" + closeBtn).css({
          "z-index": "10",
        });
      }
      if ($(".slideInSection").hasClass("open") === true) {
        $(".emphEffect").css({
          "visibility": "hidden",
        });
        for (let i = 0; i < speci.length; i++) {
          $(".emphEffect.e" + speci[i]).css({
            "visibility": "visible",
          });
        }
      } else if ($(".slideInSection").hasClass("open") === false) {
        for (let i = 0; i < speci.length; i++) {
          $(".emphEffect.e" + speci[i]).css({
            "visibility": "hidden",
          });
        }
      }
    });
  }
}
