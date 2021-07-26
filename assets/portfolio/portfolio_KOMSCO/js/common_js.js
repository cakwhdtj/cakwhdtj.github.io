'use strict'
$(document).ready(function () {
  var slide1 = new ImageSlide('slide1', {
    timerStatus: true,
    slideFirst: 1,
    timerSpeed: 3000
  });
  var slide2 = new ImageSlide('slide2', {
    type: 'slideIn',
    indiStyle: 2,
  });
  var slide3 = new ImageSlide('slide3', {
    timerSpeed: 5000,
  });
  var slide4 = new ImageSlide('slide4', {
    slideFirst: 1,
    type: 'slideIn',
  });
  var slide5 = new ImageSlide('slide5', {
    type: 'banner',
    bannerStop: 5,
  });
  var winWidth = $(window).width();
  goTop(); //scroll top
  block_a(); // block a
}) //document ready

function block_a() { //버튼용 a 클릭 막기
  $('a[href="#"]').on('click', function (e) {
    e.preventDefault();
  });
}
function goTop() { // 맨위로 버튼
  $('.scroll-top').on('click', function () {
    $('html, body').animate({ 'scrollTop': 0 }, 500);
  });
}
class ImageSlide { //imageslide
  #selector = null;
  #numSlide = 0;
  #slideNow = 0;
  #slidePrev = 0;
  #slideNext = 0;
  #slideFirst = 0;
  #indiSet = 0; //  n of indicator
  #whatType = 0; //'slideIn' , 'fadeIn' , 'banner
  #timerId = '';
  #isTimerOn = 0;
  #timerSpeed = 0;
  #boxWidth = 0;
  #minOffsetLeft = 0;
  #bannerOption = 0; // banner stops at nth slide


  constructor(id, options) {
    var slide = this;
    var $selector = $('#' + id);


    this.#selector = $('#' + id);
    this.#numSlide = this.#selector.find('.slide li').length;
    this.#slideFirst = (options === undefined || options.slideFirst === undefined) ? 1 : options.slideFirst;
    this.#isTimerOn = (options === undefined || options.timerStatus === undefined) ? false : options.timerStatus;
    this.#timerSpeed = (options === undefined || options.timerSpeed === undefined) ? 3000 : options.timerSpeed;
    this.#whatType = (options === undefined || options.type === undefined) ? 'fadeIn' : options.type;
    this.#indiSet = (options === undefined || options.indiStyle === undefined) ? 1 : options.indiStyle;
    this.#bannerOption = ((options === undefined || options.bannerStop === undefined)) ? false : options.bannerStop;

    if (slide.#indiSet > 1) {
      for (let i = 0; i < slide.#indiSet; i++) {
        slide.#selector.find('.indicator').append('<li><a href="#"><span class="hide_clipPath">' + (i + 1) + '번 슬라이드</span></a></li>\n');
      }
    } else {
      this.#selector.find('.slide li').each(function (i) {
        if (slide.#whatType === 'slideIn') {
          slide.#selector.find('.slide').css({ 'left': (i * 100) + '%', 'display': 'block' });
        }
        slide.#selector.find('.indicator').append('<li><a href="#"><span class="hide_clipPath">' + (i + 1) + '번 슬라이드</span></a></li>\n');
      });
    }
    if (this.#isTimerOn === true) {
      this.#selector.find('a.play').addClass('on');
    } else {
      this.#selector.find('a.play').removeClass('on');
    }
    this.#showSlide(this.#slideFirst);

    this.#selector.find('.indicator li a').on('click', function () {
      var index = slide.#selector.find('.indicator li').index($(this).parent());
      slide.#showSlide(index + 1);
    });

    this.#selector.find('a.prev').on('click', function () {
      slide.#showSlide(slide.#slidePrev);
    });

    this.#selector.find('a.next').on('click', function () {
      slide.#showSlide(slide.#slideNext);
    });

    this.#selector.find('a.play').on('click', function () {
      if (slide.#isTimerOn === true) {
        slide.#stopTimer();
      } else {
        slide.#startTimer();
      }
    });
  } //constructor


  #stopTimer() {
    clearTimeout(this.#timerId);
    this.#selector.find('a.play').removeClass('on');
    this.#isTimerOn = false;
  }
  #startTimer() {
    var slide = this;
    this.#timerId = setTimeout(function () { slide.#showSlide(slide.#slideNext); }, slide.#timerSpeed);
    this.#selector.find('a.play').addClass('on');
    this.#isTimerOn = true;
  }
  #showPrev() {
    this.#showSlide(this.#slidePrev);
  }
  #showNext() {
    this.#showSlide(this.#slideNext);
  }
  #resetBanner() {
    var slide = this;
    this.#boxWidth = this.#selector.find('.bannerBox').width();
    var barWidth = 0;
    this.#selector.find('.slide li').each(function () {
      barWidth += $(this).outerWidth(true);
    });
    this.#selector.find('.slide').css({ 'width': (barWidth + 10) + 'px' });
    this.#minOffsetLeft = this.#boxWidth - barWidth;
  }
  #showSlide(n) {
    var slide = this;
    var margin = 0;
    this.#slideNow = n;
    if (slide.#indiSet > 1) {
      margin = this.#selector.find('.slide li:eq(' + (n - 1) + ')').outerWidth(true) - this.#selector.find('.slide li:eq(' + (n - 1) + ')').outerWidth();
    }
    switch (this.#whatType) {
      case 'fadeIn':
        break;
      case 'slideIn':
        if (this.#slideNow === 0) {
          this.#selector.find('.slide').css({ 'transition': 'none', 'left': 'calc(' + (-((n - 1) * 100)) + '%' + ' + ' + (-margin) + 'px)' });
        } else {
          this.#selector.find('.slide').css({ 'transition': 'left 0.5s', 'left': 'calc(' + (-((n - 1) * 100)) + '%' + ' + ' + (-margin) + 'px)' });
        }
        break;
      case 'banner':
        this.#resetBanner();
        if (n >= this.#bannerOption) {
          n = this.#bannerOption
        } else if (n <= 1) {
          this.#slidePrev = 1;
        }
        break;
      default:
        break;
    }
    this.#selector.find('.slide li').removeClass('on');
    this.#selector.find('.slide li:eq(' + (n - 1) + ')').addClass('on');
    this.#selector.find('.indicator li').removeClass('on');
    this.#selector.find('.indicator li:eq(' + (n - 1) + ')').addClass('on');
    this.#slideNow = n;
    this.#slidePrev = (n === 1) ? this.#numSlide : (n - 1);
    this.#slideNext = (n === this.#numSlide) ? 1 : (n + 1);
    if (this.#isTimerOn === true) {
      clearTimeout(this.#timerId);
      this.#timerId = setTimeout(function () { slide.#showSlide(slide.#slideNext); }, this.#timerSpeed);
    }
  }

  showPrev() {
    this.#showPrev();
  }
  showNext() {
    this.#showNext();
  }
  toggleTimer() {
    if (this.#isTimerOn === true) {
      this.#stopTimer();
    } else {
      this.#startTimer();
    }
  }
  showSlide(n) {
    this.#showSlide(n);
  }
  resetBanner() {
    this.#resetBanner();
  }
} // class ImageSlide

