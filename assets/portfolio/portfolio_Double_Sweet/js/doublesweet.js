'use strict';
$('a').on('click', function (e) {
    ($(this).attr('href') === '#') ? e.preventDefault() : null
});

$('a.menu').on('click', function () {
    onAdder($('.gnb'));
});
$('a.gnb_close').on('click', function () {
    onAdder($('.gnb'));
});
$('.quick_menu > a:first-child').on('click', function () {
    onAdder($('.quick_menu > ul'));
})
$('.scrollTop').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 400);
    return false;
});

function onAdder(e) {
    e.toggleClass('on');
}

setSlide($('.description'), 1, 'on', 5000);

function setSlide(selector, first, status, speed) {
    var isblocked = false;
    var $selector = selector;
    var firstSlide = first;
    var isTimer = status;
    var timerSpeed = speed;
    var option = ['slide', /*'gallery'*/];
    var type = 'no type set';
    for (let i = 0; i < option.length; i++) {
        if ($selector.hasClass(option[i])) type = option[i];
    }
    var timerId = '';
    var numSlide = $selector.find(' > li').length;
    var slideNow = 0;
    var slideNext = 0;
    var slidePrev = 0;
    showSlide(first);
    $selector.on('mouseover', function () {
        isblocked = true;
        $selector.on('mouseleave', function () {
            isblocked = false;
            showSlide(slideNow);
        })
    })
    function showSlide(n) {
        if (isblocked === true) {
            return false;
        } else {
            slideNow = n;
            slidePrev = (n === 1) ? numSlide : (n - 1);
            slideNext = (n === numSlide) ? 1 : (n + 1);
            $selector.find(' > li.on').removeClass('on');
            $selector.find(' > li:eq(' + (n - 1) + ')').addClass('on');
            if (isTimer === 'on') {
                clearTimeout(timerId);
                timerId = setTimeout(function () { showSlide(slideNext); }, timerSpeed);
            }
        }
    }

}