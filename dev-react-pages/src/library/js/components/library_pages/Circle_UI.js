import React, { Component } from "react";
import circle1 from '../../../img/circle/main_macaron_01.png';
import circle2 from '../../../img/circle/main_macaron_02.png';
import circle3 from '../../../img/circle/main_macaron_03.png';
import circle4 from '../../../img/circle/main_macaron_04.png';
import circle5 from '../../../img/circle/main_macaron_05.png';


import $ from 'jquery'


class CircleUI extends Component {
    componentDidMount() {
        var $selector = $('.circleDiv');
        $selector.find('.slide li').each((i) => {
            $selector.find('.product').append('<li><button>' + (i + 1) + '</button></li>')
        });


        var mainTimerSpeed = 5000;
        var slide1_section1 = new SetSlide('.product', {
            slideFirst: 1,
            isTimerOn: true,
            timerSpeed: mainTimerSpeed,
        });
        var slide2_section1 = new SetSlide('.main_images.slide', {
            slideFirst: 1,
            isTimerOn: true,
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

            $selector.find(' > li button').on('click', function () {
                index = $(this).parent().index() + 1;
                showSlide(index);
            });


            if ($selector.hasClass('circle')) {
                circle();
                $selector.find(' > li button').on('click', function () {
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
                if (prevIndex > 7 && prevIndex < 11 && index < 4 && index != 0) {
                    selCSS('y', (degree - 360));
                    rotateTimer2 = setTimeout(() => {
                        selCSS('n', degree);
                    }, 2000);
                } else if (prevIndex < 4 && prevIndex > 0 && index > 7) {
                    selCSS('y', ((index - 11) * -36));
                    rotateTimer2 = setTimeout(() => {
                        selCSS('n', (degree));
                    }, 2000);
                } else if (degree < -360 && Number.isInteger(degree / 360)) {
                    selCSS('y', -360);
                } else {
                    var n = parseInt(degree / -360) * 360;
                    (degree < -360) ? (degree = degree + n) : degree = degree;
                    selCSS('y', degree);
                }
                rotateTimer = setTimeout(function () {
                    var moved = getRotationDegrees($('.circle'));
                    if (moved != degree && moved === 0 && degree <= -360) {
                        selCSS('n', 0);
                    }
                    index = 0;
                }, (mainTimerSpeed - 2000));

                function selCSS(YorN, n) {
                    var _transition = '';
                    (YorN === 'y') ? _transition = "all 2s ease" : _transition = "none";
                    selector.css({
                        "transition": _transition,
                        "transform": "translate(-50%,-50%) rotate(" + n + "deg)"
                    });
                }
            }

            this.showSlide = function (n) {
                showSlide(n);
            }
        }

        function getRotationDegrees(obj) {
            var matrix = obj.css("transform");
            if (obj === undefined || matrix === undefined) {
                return false;
            }
            if (matrix !== 'none') {
                var values = matrix.split('(')[1].split(')')[0].split(',');
                var a = values[0];
                var b = values[1];
                var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
            } else { var angle = 0; }
            return angle;
        }

        $('.circle li button').on('click', function () {
            var index = $(this).parent().index() + 1;
            slide2_section1.showSlide(index);
            (index > 5) ? (index = index - 5) : index = index;
            slide1_section1.showSlide(index);
        });
    }
    render() {
        return (
            <div className="circleDiv">
                <div className="indicator">
                    <ul className="product circle"></ul>
                    <ul className="main_images slide">
                        <li className="on"><img alt="000000" src={circle1} /><span>1</span></li>
                        <li><img alt="000000" src={circle2} /><span>2</span></li>
                        <li><img alt="000000" src={circle3} /><span>3</span></li>
                        <li><img alt="000000" src={circle4} /><span>4</span></li>
                        <li><img alt="000000" src={circle5} /><span>5</span></li>
                        <li><img alt="000000" src={circle1} /><span>6</span></li>
                        <li><img alt="000000" src={circle2} /><span>7</span></li>
                        <li><img alt="000000" src={circle3} /><span>8</span></li>
                        <li><img alt="000000" src={circle4} /><span>9</span></li>
                        <li><img alt="000000" src={circle5} /><span>10</span></li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default CircleUI;