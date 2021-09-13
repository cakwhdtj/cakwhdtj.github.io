import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../../../fa/css/all.min.css'
import Img1 from '../../../img/image-slide/slide-image-01.jpg';
import Img2 from '../../../img/image-slide/slide-image-02.jpg';
import Img3 from '../../../img/image-slide/slide-image-03.jpg';
import Img4 from '../../../img/image-slide/slide-image-04.jpg';
import Img5 from '../../../img/image-slide/slide-image-05.jpg';
import Img6 from '../../../img/image-slide/slide-image-06.jpg';
import Img7 from '../../../img/image-slide/slide-image-07.jpg';
import Img8 from '../../../img/image-slide/slide-image-08.jpg';
import Img9 from '../../../img/image-slide/slide-image-09.png';
import Img10 from '../../../img/image-slide/slide-image-10.jpg';
import Img11 from '../../../img/image-slide/slide-image-11.jpg';
import Img12 from '../../../img/image-slide/slide-image-12.jpg';
import Img13 from '../../../img/image-slide/slide-image-13.jpg';
import Img14 from '../../../img/image-slide/slide-image-14.jpg';
import Img15 from '../../../img/image-slide/slide-image-15.jpg';
import ImgBtnLeft from '../../../img/image-slide/btn-left.png';
import ImgBtnRight from '../../../img/image-slide/btn-right.png';
import jQuery from 'jquery';
import $ from 'jquery'
import { bind } from 'lodash';


class Banner_Slide extends Component {
    render() {
        var _props = this.props;
        var _set = [];
        var funcSet = [BS_1(), BS_2(), BS_3(), BS_4(),]
        function show() {
            for (let i = 0; i < _props.data.listLength[_props.match]; i++) {
                _set.push(
                    <Route path={"/react-pages/UIPage/" + _props.data.KnN.data[0] + "_" + (i + 1)}>
                        <div>{funcSet[i]}</div>
                    </Route>
                );
            }
            return (<div>{_set}</div>)
        }
        return show();
    }
}
const BS_1 = () => {
    return (
        <BS_1compo></BS_1compo>
    );
}
const BS_2 = () => {
    return (
        <BS_2compo></BS_2compo>
    );
}
const BS_3 = () => {
    return (
        <BS_3compo></BS_3compo>
    )
}
const BS_4 = () => {
    return (
        <BS_4compo></BS_4compo>
    )
}

class BS_1compo extends Component {
    componentDidMount() {
        var banner1 = new BannerSlideBS1('bs1');
        function BannerSlideBS1(id) {
            var $selector = $('#' + id);
            var numSlide = $selector.find('.slide li').length;
            var slideNow = 0;
            var slidePrev = 0;
            var slideNext = 0;
            var offsetLeft = 0;
            var boxWidth = 0;
            var barWidth = 0;
            var minOffsetLeft = 0;

            boxWidth = $('div.banner-slide.bs1 .box').width();
            $selector.find('.slide li').each(function () {
                barWidth += $(this).outerWidth(true);
            });
            $selector.find('.slide').css({ 'width': (barWidth + 10) + 'px' });
            minOffsetLeft = boxWidth - barWidth;
            showSlideBS1(1);

            $selector.find('button.prev').on('click', function () {
                showSlideBS1(slidePrev);
            });

            $selector.find('button.next').on('click', function () {
                showSlideBS1(slideNext);
            });

            function showSlideBS1(n) {
                offsetLeft = -($selector.find('.slide li:eq(' + (n - 1) + ')').position().left);
                if (offsetLeft < minOffsetLeft) {
                    offsetLeft = minOffsetLeft;
                    numSlide = n;
                }
                $selector.find('.slide').css({ 'transition': 'left 0.5s', 'left': offsetLeft + 'px' });
                slideNow = n;
                slidePrev = (n <= 1) ? 1 : (n - 1);
                slideNext = (n >= numSlide) ? numSlide : (n + 1);
            }
        }
    }
    render() {
        return (
            <div className="banner-slide bs1" id="bs1">
                <div className="box">
                    <ul className="slide">
                        <li><button><img alt="000000" src={Img1} /></button></li>
                        <li><button><img alt="000000" src={Img2} /></button></li>
                        <li><button><img alt="000000" src={Img3} /></button></li>
                        <li><button><img alt="000000" src={Img4} /></button></li>
                        <li><button><img alt="000000" src={Img5} /></button></li>
                        <li><button><img alt="000000" src={Img6} /></button></li>
                        <li><button><img alt="000000" src={Img7} /></button></li>
                        <li><button><img alt="000000" src={Img8} /></button></li>
                        <li><button><img alt="000000" src={Img9} /></button></li>
                        <li><button><img alt="000000" src={Img10} /></button></li>
                        <li><button><img alt="000000" src={Img11} /></button></li>
                        <li><button><img alt="000000" src={Img12} /></button></li>
                        <li><button><img alt="000000" src={Img13} /></button></li>
                        <li><button><img alt="000000" src={Img14} /></button></li>
                        <li><button><img alt="000000" src={Img15} /></button></li>
                    </ul>
                </div>
                <p className="control">
                    <button className="prev"><img alt="이전" src={ImgBtnLeft} /></button>
                    <button className="next"><img alt="다음" src={ImgBtnRight} /></button>
                    <button className="play">
                        <i className="fas fa-play fa-fw"><span>타이머 시작</span></i>
                        <i className="fas fa-pause fa-fw"><span>타이머 정지</span></i>
                    </button>
                </p>
            </div>
        )
    }
}
class BS_2compo extends Component {
    componentDidMount() {
        var banner2 = new BannerSlideBS2('bs2');
        function BannerSlideBS2(id) {
            var $selector = $('#' + id);
            var numSlide = $selector.find('.slide li').length;
            var slideNow = 0;
            var slidePrev = 0;
            var slideNext = 0;
            var offsetLeft = 0;
            var boxWidth = 0;
            var barWidth = 0;
            var minOffsetLeft = 0;
            var timerId = '';
            var isTimerOn = true;
            var timerSpeed = 2000;

            resetUI();
            if (isTimerOn === true) {
                $selector.find('button.play').addClass('on');
            } else {
                $selector.find('button.play').removeClass('on');
            }
            showSlideBS2(1);
            $selector.find('button.prev').on('click', function () {
                showSlideBS2(slidePrev);
            });

            $selector.find('button.next').on('click', function () {
                showSlideBS2(slideNext);
            });

            $selector.find('button.play').on('click', function () {
                if (isTimerOn === true) {
                    clearTimeout(timerId);
                    $(this).removeClass('on');
                    isTimerOn = false;
                } else {
                    timerId = setTimeout(function () { showSlideBS2(slideNext); }, timerSpeed);
                    $(this).addClass('on');
                    isTimerOn = true;
                }
            });

            $(window).on('resize', function () {
                resetUI();
                showSlideBS2(slideNow);
            });

            function resetUI() {
                boxWidth = $selector.find('.box').width();
                barWidth = 0;
                $selector.find('.slide li').each(function () {
                    barWidth += $(this).outerWidth(true);
                });
                $selector.find('.slide').css({ 'width': (barWidth + 10) + 'px' });
                minOffsetLeft = boxWidth - barWidth;
            }

            function showSlideBS2(n) {
                offsetLeft = -($selector.find('.slide li:eq(' + (n - 1) + ')').position().left);
                if (offsetLeft < minOffsetLeft) {
                    offsetLeft = minOffsetLeft;
                    numSlide = n;
                }
                $selector.find('.slide').css({ 'transition': 'left 0.5s', 'left': offsetLeft + 'px' });
                slideNow = n;
                slidePrev = (n <= 1) ? 1 : (n - 1);
                slideNext = (n >= numSlide) ? 1 : (n + 1);
                if (isTimerOn === true) {
                    clearTimeout(timerId);
                    timerId = setTimeout(function () { showSlideBS2(slideNext); }, timerSpeed);
                }
            }
        }
    }
    render() {
        return (
            <div className="banner-slide bs2" id="bs2">
                <div className="box">
                    <ul className="slide">
                        <li><button><img alt="000000" src={Img1} /></button></li>
                        <li><button><img alt="000000" src={Img2} /></button></li>
                        <li><button><img alt="000000" src={Img3} /></button></li>
                        <li><button><img alt="000000" src={Img4} /></button></li>
                        <li><button><img alt="000000" src={Img5} /></button></li>
                        <li><button><img alt="000000" src={Img6} /></button></li>
                        <li><button><img alt="000000" src={Img7} /></button></li>
                        <li><button><img alt="000000" src={Img8} /></button></li>
                        <li><button><img alt="000000" src={Img9} /></button></li>
                        <li><button><img alt="000000" src={Img10} /></button></li>
                        <li><button><img alt="000000" src={Img11} /></button></li>
                        <li><button><img alt="000000" src={Img12} /></button></li>
                        <li><button><img alt="000000" src={Img13} /></button></li>
                        <li><button><img alt="000000" src={Img14} /></button></li>
                        <li><button><img alt="000000" src={Img15} /></button></li>
                    </ul>
                </div>
                <p className="control">
                    <button className="prev"><img alt="이전" src={ImgBtnLeft} /></button>
                    <button className="next"><img alt="다음" src={ImgBtnRight} /></button>
                    <button className="play">
                        <i className="fas fa-play fa-fw"><span>타이머 시작</span></i>
                        <i className="fas fa-pause fa-fw"><span>타이머 정지</span></i>
                    </button>
                </p>
            </div>
        )
    }
}
class BS_3compo extends Component {
    componentDidMount() {
        var banner2 = new BannerSlideBS3('bs3');
        function BannerSlideBS3(id) {
            var $selector = $('#' + id);
            var numSlide = $selector.find('.slide li').length;
            var slideNow = 0;
            var slidePrev = 0;
            var slideNext = 0;
            var offsetLeft = 0;
            var boxWidth = 0;
            var barWidth = 0;
            var minOffsetLeft = 0;
            var timerId = '';
            var timerId2 = '';
            var isTimerOn = true;
            var timerSpeed = 2000;
            var counter = 0;

            resetUI();
            if (isTimerOn === true) {
                $selector.find('button.play').addClass('on');
            } else {
                $selector.find('button.play').removeClass('on');
            }
            showSlideBS3(1);
            $selector.find('button.prev').on('click', function () {
                if (offsetLeft >= 0) {
                    $selector.find('.slide').css({ 'transition': 'none' }).stop(true).animate({ 'left': '10px' }, 80).animate({ 'left': 0 }, 160, function () {
                        showSlideBS3(slideNow);
                    });
                } else {
                    showSlideBS3(slidePrev);
                }
            });
            $selector.find('button.next').on('click', function () {
                if (offsetLeft <= minOffsetLeft) {
                    $selector.find('.slide').css({ 'transition': 'none' }).stop(true).animate({ 'left': (minOffsetLeft - 10) + 'px' }, 80).animate({ 'left': minOffsetLeft + 'px' }, 160, function () {
                        showSlideBS3(slideNow);
                    });
                } else {
                    showSlideBS3(slidePrev);
                }
            });

            $selector.find('button.play').on('click', function () {
                if (isTimerOn === true) {
                    clearTimeout(timerId);
                    $(this).removeClass('on');
                    isTimerOn = false;
                } else {
                    timerId = setTimeout(function () { showSlideBS3(slideNext); }, timerSpeed);
                    $(this).addClass('on');
                    isTimerOn = true;
                }
            });

            $(window).on('resize', function () {
                // 쓰로틀링
                if (counter > 10) {
                    resetUI();
                    showSlideBS3(slideNow);
                    counter = 0;
                }
                counter++;
                // 디바운스
                clearTimeout(timerId2);
                timerId2 = setTimeout(function () {
                    resetUI();
                    showSlideBS3(slideNow);
                }, 300);
            });

            function resetUI() {
                boxWidth = $selector.find('.box').width();
                barWidth = 0;
                $selector.find('.slide li').each(function () {
                    barWidth += $(this).outerWidth(true);
                });
                $selector.find('.slide').css({ 'width': (barWidth + 10) + 'px' });
                minOffsetLeft = boxWidth - barWidth;
            }

            function showSlideBS3(n) {
                offsetLeft = -($selector.find('.slide li:eq(' + (n - 1) + ')').position().left);
                if (offsetLeft < minOffsetLeft) {
                    offsetLeft = minOffsetLeft;
                    numSlide = n;
                }
                $selector.find('.slide').css({ 'transition': 'left 0.5s', 'left': offsetLeft + 'px' });
                slideNow = n;
                slidePrev = (n <= 1) ? 1 : (n - 1);
                slideNext = (n >= numSlide) ? 1 : (n + 1);
                if (isTimerOn === true) {
                    clearTimeout(timerId);
                    timerId = setTimeout(function () { showSlideBS3(slideNext); }, timerSpeed);
                }
            }
        }
    }
    render() {
        return (
            <div className="banner-slide bs3" id="bs3">
                <div className="box">
                    <ul className="slide">
                        <li><button><img alt="000000" src={Img1} /></button></li>
                        <li><button><img alt="000000" src={Img2} /></button></li>
                        <li><button><img alt="000000" src={Img3} /></button></li>
                        <li><button><img alt="000000" src={Img4} /></button></li>
                        <li><button><img alt="000000" src={Img5} /></button></li>
                        <li><button><img alt="000000" src={Img6} /></button></li>
                        <li><button><img alt="000000" src={Img7} /></button></li>
                        <li><button><img alt="000000" src={Img8} /></button></li>
                        <li><button><img alt="000000" src={Img9} /></button></li>
                        <li><button><img alt="000000" src={Img10} /></button></li>
                        <li><button><img alt="000000" src={Img11} /></button></li>
                        <li><button><img alt="000000" src={Img12} /></button></li>
                        <li><button><img alt="000000" src={Img13} /></button></li>
                        <li><button><img alt="000000" src={Img14} /></button></li>
                        <li><button><img alt="000000" src={Img15} /></button></li>
                    </ul>
                </div>
                <p className="control">
                    <button className="prev"><img alt="이전" src={ImgBtnLeft} /></button>
                    <button className="next"><img alt="다음" src={ImgBtnRight} /></button>
                    <button className="play">
                        <i className="fas fa-play fa-fw"><span>타이머 시작</span></i>
                        <i className="fas fa-pause fa-fw"><span>타이머 정지</span></i>
                    </button>
                </p>
            </div>
        )
    }
}
class BS_4compo extends Component {
    componentDidMount() {
        setBannerSlide('div.banner-slide.bs4:eq(0)', true, 2000);
        setBannerSlide('div.banner-slide.bs4:eq(1)', false, 2000);
        setBannerSlide('div.banner-slide.bs4:eq(2)', true, 1000, true);
        function setBannerSlide(selector, status, speed, scroll) {
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
            var isScroll = (scroll === undefined) ? false : (isScroll = scroll);
            var startX = 0;
            var delX = 0;
            var offsetX = 0;
            var maxOffsetX = 0;

            if (isScroll === true) {
                $selector.find('.box').append('<div class="scroll"><a href="#" class="bar"></a></div>');
            }
            if (isTimerOn === true) {
                $selector.find('button.play').addClass('on');
            } else {
                $selector.find('button.play').removeClass('on');
            }
            resetUI();
            showSlideBS4(1);
            $selector.find('button.prev').on('click', function () {
                if (offsetLeft >= 0) {
                    $selector.find('.slide').css({ 'transition': 'none' }).stop(true).animate({ 'left': '10px' }, 80).animate({ 'left': 0 }, 160, function () {
                        showSlideBS4(slideNow);
                    });
                } else {
                    showSlideBS4(slidePrev);
                }
            });
            $selector.find('button.next').on('click', function () {
                if (offsetLeft <= minOffsetLeft) {
                    $selector.find('.slide').css({ 'transition': 'none' }).stop(true).animate({ 'left': (minOffsetLeft - 10) + 'px' }, 80).animate({ 'left': minOffsetLeft + 'px' }, 160, function () {
                        showSlideBS4(slideNow);
                    });
                } else {
                    showSlideBS4(slideNext);
                }
            });
            $selector.find('button.play').on('click', function () {
                if (isTimerOn === true) {
                    clearTimeout(timerId);
                    $(this).removeClass('on');
                    isTimerOn = false;
                } else {
                    timerId = setTimeout(function () { showSlideBS4(slideNext); }, timerSpeed);
                    $(this).addClass('on');
                    isTimerOn = true;
                }
            });
            $selector.find('.scroll .bar').on('mousedown touchstart', function (e) {
                $(this).css({ 'transition': 'none' });
                clearTimeout(timerId);
                if (!e.touches) e.preventDefault();
                startX = (e.touches) ? e.touches[0].clientX : e.clientX;
                offsetX = $(this).position().left;

                document.addEventListener('mousemove', move, { passive: false });
                document.addEventListener('touchmove', move, { passive: false });

                $(document).on('mouseup touchend', function () {
                    document.removeEventListener('mousemove', move);
                    document.removeEventListener('touchmove', move);
                    $(document).off('mouseup touchend');
                    if (delX < 0) {
                        showSlideBS4(slideNow);
                    } if (delX > 0) {
                        showSlideBS4(slideNext);
                    }
                    delX = 0;
                });
            });
            function move(e) {
                delX = ((e.touches) ? e.touches[0].clientX : e.clientX) - startX;
                e.preventDefault();
                var targetX = offsetX + delX;
                if (targetX < 0) {
                    targetX = 0;
                } else if (targetX > maxOffsetX) {
                    targetX = maxOffsetX;
                }
                offsetLeft = -targetX * (barWidth / boxWidth);
                $selector.find('.scroll .bar').css({ 'left': targetX + 'px' });
                $selector.find('.slide').css({ 'transition': 'none', 'left': offsetLeft + 'px' });
                checkBannerNow();
            }

            $(window).on('resize', function () {
                // 쓰로틀링
                if (counter > 10) {
                    resetUI();
                    showSlideBS4(slideNow);
                    counter = 0;
                }
                counter++;
                // 디바운스
                clearTimeout(timerId2);
                timerId2 = setTimeout(function () {
                    resetUI();
                    showSlideBS4(slideNow);
                }, 300);
            });
            function resetUI() {
                boxWidth = $selector.find('.box').width();
                barWidth = 0;
                $selector.find('.slide li').each(function () {
                    barWidth += $(this).outerWidth(true);
                });
                $selector.find('.slide').css({ 'width': (barWidth + 10) + 'px' });
                minOffsetLeft = boxWidth - barWidth;
                maxOffsetX = -minOffsetLeft * (boxWidth / barWidth);
                var scrollBarWidth = boxWidth * (boxWidth / barWidth);
                $selector.find('.scroll .bar').css({ 'width': scrollBarWidth + 'px' });
            }
            function showSlideBS4(n) {
                offsetLeft = -$selector.find('.slide li:eq(' + (n - 1) + ')').position().left;
                if (offsetLeft < minOffsetLeft) {
                    offsetLeft = minOffsetLeft;
                    numSlide = n;
                }
                $selector.find('.slide').css({ 'transition': 'left 0.5s', 'left': offsetLeft + 'px' });
                $selector.find('.scroll .bar').css({ 'transition': 'left 0.5s', 'left': -offsetLeft * (boxWidth / barWidth) + 'px' });
                slideNow = n;
                slidePrev = (n <= 1) ? 1 : (n - 1);
                slideNext = (n >= numSlide) ? 1 : (n + 1);
                if (isTimerOn === true) {
                    clearTimeout(timerId);
                    timerId = setTimeout(function () { showSlideBS4(slideNext); }, timerSpeed);
                }
            }
            function checkBannerNow() {
                $selector.find('.slide > li').each(function (i) {
                    var startOffset = -$(this).position().left;
                    var endOffset = startOffset - $(this).outerWidth(true);
                    if (offsetLeft <= startOffset && offsetLeft > endOffset) {
                        var n = i + 1;
                        slideNow = n;
                        slidePrev = (n <= 1) ? 1 : (n - 1);
                        slideNext = (n >= numSlide) ? 1 : (n + 1);
                        return false;
                    }
                });
            }
        }
    }
    render() {
        return (
            <div>
                <div className="banner-slide bs4">
                    <div className="box">
                        <ul className="slide">
                            <li><button><img alt="000000" src={Img1} /></button></li>
                            <li><button><img alt="000000" src={Img2} /></button></li>
                            <li><button><img alt="000000" src={Img3} /></button></li>
                            <li><button><img alt="000000" src={Img4} /></button></li>
                            <li><button><img alt="000000" src={Img5} /></button></li>
                            <li><button><img alt="000000" src={Img6} /></button></li>
                            <li><button><img alt="000000" src={Img7} /></button></li>
                            <li><button><img alt="000000" src={Img8} /></button></li>
                            <li><button><img alt="000000" src={Img9} /></button></li>
                            <li><button><img alt="000000" src={Img10} /></button></li>
                            <li><button><img alt="000000" src={Img11} /></button></li>
                            <li><button><img alt="000000" src={Img12} /></button></li>
                            <li><button><img alt="000000" src={Img13} /></button></li>
                            <li><button><img alt="000000" src={Img14} /></button></li>
                            <li><button><img alt="000000" src={Img15} /></button></li>
                        </ul>
                    </div>
                    <p className="control">
                        <button className="prev"><img alt="이전" src={ImgBtnLeft} /></button>
                        <button className="next"><img alt="다음" src={ImgBtnRight} /></button>
                        <button className="play">
                            <i className="fas fa-play fa-fw"><span>타이머 시작</span></i>
                            <i className="fas fa-pause fa-fw"><span>타이머 정지</span></i>
                        </button>
                    </p>
                </div>
                <div className="banner-slide bs4">
                    <div className="box">
                        <ul className="slide">
                            <li><button><img alt="000000" src={Img1} /></button></li>
                            <li><button><img alt="000000" src={Img2} /></button></li>
                            <li><button><img alt="000000" src={Img3} /></button></li>
                            <li><button><img alt="000000" src={Img4} /></button></li>
                            <li><button><img alt="000000" src={Img5} /></button></li>
                            <li><button><img alt="000000" src={Img6} /></button></li>
                            <li><button><img alt="000000" src={Img7} /></button></li>
                            <li><button><img alt="000000" src={Img8} /></button></li>
                            <li><button><img alt="000000" src={Img9} /></button></li>
                            <li><button><img alt="000000" src={Img10} /></button></li>
                            <li><button><img alt="000000" src={Img11} /></button></li>
                            <li><button><img alt="000000" src={Img12} /></button></li>
                            <li><button><img alt="000000" src={Img13} /></button></li>
                            <li><button><img alt="000000" src={Img14} /></button></li>
                            <li><button><img alt="000000" src={Img15} /></button></li>
                        </ul>
                    </div>
                    <p className="control">
                        <button className="prev"><img alt="이전" src={ImgBtnLeft} /></button>
                        <button className="next"><img alt="다음" src={ImgBtnRight} /></button>
                        <button className="play">
                            <i className="fas fa-play fa-fw"><span>타이머 시작</span></i>
                            <i className="fas fa-pause fa-fw"><span>타이머 정지</span></i>
                        </button>
                    </p>
                </div>
                <div className="banner-slide bs4">
                    <div className="box">
                        <ul className="slide">
                            <li><button><img alt="000000" src={Img1} /></button></li>
                            <li><button><img alt="000000" src={Img2} /></button></li>
                            <li><button><img alt="000000" src={Img3} /></button></li>
                            <li><button><img alt="000000" src={Img4} /></button></li>
                            <li><button><img alt="000000" src={Img5} /></button></li>
                            <li><button><img alt="000000" src={Img6} /></button></li>
                            <li><button><img alt="000000" src={Img7} /></button></li>
                            <li><button><img alt="000000" src={Img8} /></button></li>
                            <li><button><img alt="000000" src={Img9} /></button></li>
                            <li><button><img alt="000000" src={Img10} /></button></li>
                            <li><button><img alt="000000" src={Img11} /></button></li>
                            <li><button><img alt="000000" src={Img12} /></button></li>
                            <li><button><img alt="000000" src={Img13} /></button></li>
                            <li><button><img alt="000000" src={Img14} /></button></li>
                            <li><button><img alt="000000" src={Img15} /></button></li>
                        </ul>
                    </div>
                    <p className="control">
                        <button className="prev"><img alt="이전" src={ImgBtnLeft} /></button>
                        <button className="next"><img alt="다음" src={ImgBtnRight} /></button>
                        <button className="play">
                            <i className="fas fa-play fa-fw"><span>타이머 시작</span></i>
                            <i className="fas fa-pause fa-fw"><span>타이머 정지</span></i>
                        </button>
                    </p>
                </div>
            </div>
        )
    }
}

export default Banner_Slide;