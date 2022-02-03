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

var mainTimerSpeed = 5000;
var slide1_section1 = new SetSlide('.description', {
    slideFirst: 1,
    isTimerOn: true,
    timerSpeed: mainTimerSpeed,
});
var slide2_section1 = new SetSlide('.indicator .main_images ', {
    slideFirst: 1,
    isTimerOn: true,
    timerSpeed: mainTimerSpeed,
});
var slide3_section1 = new SetSlide('.indicator .product', {
    slideFirst: 1,
    isTimerOn: true,
    timerSpeed: mainTimerSpeed,
});
var slide4_section3 = new SetSlide('.indicator ul.group.gallery', {
    slideFirst: 1,
    isTimerOn: false,
    timerSpeed: mainTimerSpeed,
});


function SetSlide(selector, options) {
    var isblocked = false;
    var $selector = $(selector);
    var slideFirst = (options === undefined || options.slideFirst === undefined) ? 1 : options.slideFirst;
    var isTimerOn = (options === undefined || options.isTimerOn === undefined) ? false : options.isTimerOn;
    var timerSpeed = (options === undefined || options.timerSpeed === undefined) ? 3000 : options.timerSpeed;
    var types = ['slide', 'circle', 'gallery'];
    var type = 'no type set';
    for (let i = 0; i < types.length; i++) { if ($selector.hasClass(types[i])) type = types[i]; }
    var timerId = '';
    var timerId2 = '';
    var numSlide = $selector.find(' > li').length;
    var slideNow = 0;
    var slideNext = 0;
    var slidePrev = 0;
    var index = 0;
    var deg = 0;

    showSlide(slideFirst);

    $selector.find(' > li a').on('click', function () {
        index = $(this).parent().index() + 1;
        showSlide(index);
    });


    if ($selector.hasClass('circle')) {
        circle();
        $selector.find(' > li a').on('click', function () {
            deg = (index - 1) * 36;
            circle()
        });
        function circle(RorL) {
            rotate($selector, deg, RorL);
            deg = deg + 36;
            if (isTimerOn === true) {
                clearTimeout(timerId2);
                timerId2 = setTimeout(function () { circle() }, timerSpeed);
            }
        }
    }

    function showSlide(n) {
        if (isblocked === true || $selector.find('li').hasClass('on') === false) {
            return false;
        } else {
            slideNow = n;
            slidePrev = (n === 1) ? numSlide : (n - 1);
            slideNext = (n === numSlide) ? 1 : (n + 1);
            $selector.find(' > li.on').removeClass('on');
            $selector.find(' > li:eq(' + (n - 1) + ')').addClass('on');
            if (isTimerOn === true) {
                clearTimeout(timerId);
                timerId = setTimeout(function () { showSlide(slideNext); }, timerSpeed);
            } else if (isTimerOn === false) {
                clearTimeout(timerId);
            } else {
                isblocked = true;
            }
        }
    }

    function rotate(selector, degree, RorL) {
        clearTimeout(rotateTimer);
        clearTimeout(rotateTimer2);
        var rotateTimer = '';
        var rotateTimer2 = '';
        var direction = (RorL === undefined) ? direction = 'left' : direction = RorL;
        (direction === 'left') ? degree = (degree * -1) : degree = degree * 1;
        var prevIndex = (Math.round(getRotationDegrees($('.circle')) / 36) * -1) + 1;
        (prevIndex <= 0) ? prevIndex = prevIndex + 10 : prevIndex = prevIndex;
        if (prevIndex > 7 && prevIndex < 11 && index < 4) {
            var delta = (((10 - prevIndex) + index) * 36);
            selector.css({
                "transition": "all 2s ease",
                "transform": "translate(-50%,-50%) rotate(" + (-360 + (delta - 36)) + "deg)"
            });
        } else {
            (degree < -360) ? degree = degree + 360 : degree = degree;
            selector.css({
                "transition": "all 2s ease",
                "transform": "translate(-50%,-50%) rotate(" + degree + "deg)"
            });
        }
        console.log('degree = ' + degree, 'delta = ' + delta);
        rotateTimer = setTimeout(function () {
            var moved = getRotationDegrees($('.circle'));
            if (moved != degree && moved === 0 && degree === -360) {
                selector.css({
                    "transition": "none",
                    "transform": "translate(-50%,-50%) rotate(" + 0 + "deg)"
                });
            }
        }, (mainTimerSpeed - 1000));
    }


    this.showSlide = function (n) {
        showSlide(n);
    }
    this.rotateSlide = function (selector, degree, RorL) {
        rotate(selector, degree, RorL);
    }
}

$('.circle li a').on('click', function () {
    var index = $(this).parent().index() + 1;
    slide3_section1.showSlide(index);
    (index > 5) ? (index = index - 5) : index = index;
    slide1_section1.showSlide(index);
    slide2_section1.showSlide(index);
})




// function rotate(selector, degree, n) {
//     clearTimeout(rotateTimer);
//     var rotateTimer = '';
//     var RorL = 'left';
//     (RorL === 'left') ? degree = (degree * -1) : degree = degree * 1;

//     selector.css({
//         "transition": "all 2s ease",
//         "transform": "translate(-50%,-50%) rotate(" + degree + "deg)"
//     });
//     rotateTimer = setTimeout(function () {
//         var moved = getRotationDegrees($('.circle'));
//         if (moved != degree && moved === 0 && degree === -360) {
//             selector.css({
//                 "transition": "none",
//                 "transform": "translate(-50%,-50%) rotate(" + 0 + "deg)"
//             });
//         }
//     }, (2000));
// }

function getRotationDegrees(obj) {
    var matrix = obj.css("transform");
    if (matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    } else { var angle = 0; }
    return /*(angle < 0) ? angle + 360 : */ angle;
}

