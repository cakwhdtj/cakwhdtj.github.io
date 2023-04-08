"use strict";
let scrollAmt = $(document).scrollTop();
let winWidth = $(window).width();
const sections = Array.from(document.querySelectorAll('section'));
const numSections = sections.length;
let currentPage = 0;
let isBlocked = false;
let timerDebounce = null;

$(window).on('resize', function () {
  winWidth = $(window).width();
});
$(window).on('scroll', function (e) {
  scrollAmt = $(document).scrollTop();
  cleaner('#hashtag li a', 1, 'on');
  headerEffect();
});
$(document).on('click', 'a[href="#"]', function (e) {
  e.preventDefault();
});
headerEffect();
$('#hashtag a').click(function(e) {
  e.preventDefault();
  var targetPage = $(this).attr('href'); 
  var targetOffset = $(targetPage).offset().top;
  showPage(targetPage, targetOffset);
  $('html').stop(true).animate({ 'scrollTop': targetOffset }, 500); 
});
$("#headerRightBtn > li:nth-child(2) > a").click(function() {
  $("#headerRightBtn li > ul").addClass("open");
  $(".wrapper").addClass("bg").after("<div class='bg'></div>");
  $("nav > div").click(() => $("#closeSideBtn > a").click());
});

$("#closeSideBtn > a").click(() => {
  cleaner('#headerRightBtn li > ul, .bg', 'no', 'open bg');
  $("nav > div").remove();
});

$('#hashtag > li > a, a#downArrow').click(function() {
  const hash = this.hash;
  if (hash) $('html, body').stop(true).animate({ scrollTop: $(hash).offset().top }, 500, () => window.location.hash = hash);
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
  let sectionCheck = $(this).parent().parent().parent().parent().attr('id');
  cleaner(this, 2, 'on');
  $(this).parent().addClass("on")
  imgSlider($(this).parent(), sectionCheck);
  sliderIndicator($(this), sectionCheck);
});

function handleScroll(event) {
  if ($('#headerRightBtn ul').hasClass('open') || window.innerWidth < 1024) {
    return;
  }
  event.preventDefault();

  if (isBlocked) {return;}

  isBlocked = true;

  const deltaY = event.deltaY || event.detail || (-event.wheelDelta);
  if (deltaY > 0) {
    showPage(currentPage + 1);
  } else if (deltaY < 0) {
    showPage(currentPage - 1);
  }
}
function showPage(n, offset) {
  if (n < 0 || n >= numSections) {
    isBlocked = false;
    return;
  }
  const section = sections[n];
  scrollAmt = offset || section.offsetTop;

  clearTimeout(timerDebounce);

  timerDebounce = setTimeout(() => {
    $('html').animate({ scrollTop: scrollAmt }, 500, () => {
      isBlocked = false;
    });
    currentPage = n;
  }, 700);
};
document.addEventListener('wheel', handleScroll, { passive: false });
document.addEventListener('DOMMouseScroll', handleScroll, { passive: false });

function headerEffect() {
  const sections = ['#section_2', '#section_3'];
  const hashtagLinks = ['#hashtag > li:nth-child(1) > a', '#hashtag > li:nth-child(2) > a', '#hashtag > li:nth-child(3) > a']
  let sectionIndex = 0;
  $('#hashtag li:first-child a').click(function(e) {
    e.preventDefault();
    showPage(0);
    $('html').stop(true).animate({ 'scrollTop': 0 }, 500); 
  });
  for (let i = 0; i < sections.length; i++) {
    if ($(sections[i]).offset().top <= scrollAmt) {
      sectionIndex = i + 1;
    }
  }
  $('#hashtag > li > a').removeClass('on');
  $(hashtagLinks[sectionIndex]).addClass('on');
  $('#header, #footer').toggleClass('scrolled', $('#section_2').offset().top <= scrollAmt);
}
function slideOpener(selector) {
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
function sliderIndicator(selector, section) {
  let indicatorLength = ((selector.offset().left + selector.outerWidth()) - $(".slideInSection .indicator").offset().left);
  section = '#' + section;
  $(section + " .indicator_bar").width(indicatorLength + 3);
}
function cleaner(selector, depth, Removing) {
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
  let section = sectionReturn(sectionCheck);
  $(section + ' > li').each(function () {
    let boxWidth = $(this).width();
    let margin = [Math.abs(boxWidth - 1400) / 2];
    boxWidth = [boxWidth];
    if ($(window).width() <= 1440) {
      margin = margin / 2;
    }
    $(section + ' > li + li').css({ 'margin-right': margin + 'px' });
  });
}
function imgSlider(n, section) {
  n = $(n);
  let selected = '#' + section + ' ul.imageSlide';
  let index = n.index() - 1;
  let slideLeft = $(selected).offset().left;
  let boxLeft = $(selected + ' > li:eq(' + index + ')').offset().left;
  let boxWidth = $(selected + ' > li:eq(' + index + ')').width();
  let halfWindow = ($(window).width() / 2);
  let moveAmt = ((boxLeft - slideLeft) * -1) + halfWindow - (boxWidth / 2);
  $(selected).offset({ left: moveAmt });
}
function sectionReturn(sectionCheck) {
  let section = $(sectionCheck).parent().parent().attr('id');
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
