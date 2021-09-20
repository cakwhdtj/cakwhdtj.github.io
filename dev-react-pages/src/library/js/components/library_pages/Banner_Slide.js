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
// import jQuery from 'jquery';
import $ from 'jquery'


class BannerSlide extends Component {
    render() {
        var _props = this.props.props;
        var _set = [];
        var funcSet = [BS1(), BS2(),]
        function show() {
            for (let i = 0; i < _props.content[0].length; i++) {
                _set.push(
                    <Route key={i} path={"/react-pages/UIPage/" + _props.datafrLink[0].kind + "_" + (i + 1)}>
                        <div>{funcSet[i]}</div>
                    </Route>
                );
            }
            return (<div>{_set}</div>)
        }
        return show();
    }
}
const BS1 = () => {
    return (
        <BS1compo></BS1compo>
    );
}
const BS2 = () => {
    return (
        <BS2compo></BS2compo>
    );
}
class BS1compo extends Component {
    componentDidMount() {
        new BannerSlideBS1('bs1');
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
            showSlideBS2(1);
            $selector.find('button.prev').on('click', function () {
                if (offsetLeft >= 0) {
                    $selector.find('.slide').css({ 'transition': 'none' }).stop(true).animate({ 'left': '10px' }, 80).animate({ 'left': 0 }, 160, function () {
                        showSlideBS2(slideNow);
                    });
                } else {
                    showSlideBS2(slidePrev);
                }
            });
            $selector.find('button.next').on('click', function () {
                if (offsetLeft <= minOffsetLeft) {
                    $selector.find('.slide').css({ 'transition': 'none' }).stop(true).animate({ 'left': (minOffsetLeft - 10) + 'px' }, 80).animate({ 'left': minOffsetLeft + 'px' }, 160, function () {
                        showSlideBS2(slideNow);
                    });
                } else {
                    showSlideBS2(slideNext);
                }
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

            $(window).on('resize', () => {
                // 쓰로틀링
                if (counter > 10) {
                    resetUI();
                    showSlideBS2(slideNow);
                    counter = 0;
                }
                counter++;
                // 디바운스
                clearTimeout(timerId2);
                timerId2 = setTimeout(() => {
                    resetUI();
                    showSlideBS2(slideNow);
                }, 300);
            });

            function resetUI() {
                boxWidth = $selector.find('.box').width();
                barWidth = 0;
                $selector.find('.slide li').each(() => {
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
                    timerId = setTimeout(() => { showSlideBS2(slideNext); }, timerSpeed);
                }
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
class BS2compo extends Component {
    componentDidMount() {
        setBannerSlide('div.banner-slide.bsFinal:eq(0)', true, 2000);
        setBannerSlide('div.banner-slide.bsFinal:eq(1)', false, 2000);
        setBannerSlide('div.banner-slide.bsFinal:eq(2)', true, 1000, true);
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
                $selector.find('.box').append('<div class="scroll"><button class="bar"></button></div>');
            }
            if (isTimerOn === true) {
                $selector.find('button.play').addClass('on');
            } else {
                $selector.find('button.play').removeClass('on');
            }
            resetUI();
            showSlideBS2(1);
            $selector.find('button.prev').on('click', () => {
                if (offsetLeft >= 0) {
                    $selector.find('.slide').css({ 'transition': 'none' }).stop(true).animate({ 'left': '10px' }, 80).animate({ 'left': 0 }, 160, () => {
                        showSlideBS2(slideNow);
                    });
                } else {
                    showSlideBS2(slidePrev);
                }
            });
            $selector.find('button.next').on('click', () => {
                if (offsetLeft <= minOffsetLeft) {
                    $selector.find('.slide').css({ 'transition': 'none' }).stop(true).animate({ 'left': (minOffsetLeft - 10) + 'px' }, 80).animate({ 'left': minOffsetLeft + 'px' }, 160, () => {
                        showSlideBS2(slideNow);
                    });
                } else {
                    showSlideBS2(slideNext);
                }
            });
            $selector.find('button.play').on('click', () => {
                if (isTimerOn === true) {
                    clearTimeout(timerId);
                    $selector.find('button.play').removeClass('on');
                    isTimerOn = false;
                } else {
                    timerId = setTimeout(() => { showSlideBS2(slideNext); }, timerSpeed);
                    $selector.find('button.play').addClass('on');
                    isTimerOn = true;
                }
            });
            $selector.find('.scroll .bar').on('mousedown touchstart', (e) => {
                $selector.find('.scroll .bar').css({ 'transition': 'none' });
                clearTimeout(timerId);
                if (!e.touches) e.preventDefault();
                startX = (e.touches) ? e.touches[0].clientX : e.clientX;
                offsetX = $selector.find('.scroll .bar').position().left;

                document.addEventListener('mousemove', move, { passive: false });
                document.addEventListener('touchmove', move, { passive: false });

                $(document).on('mouseup touchend', () => {
                    document.removeEventListener('mousemove', move);
                    document.removeEventListener('touchmove', move);
                    $(document).off('mouseup touchend');
                    if (delX < 0) {
                        showSlideBS2(slideNow);
                    } if (delX > 0) {
                        showSlideBS2(slideNext);
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

            $(window).on('resize', () => {
                // 쓰로틀링
                if (counter > 10) {
                    resetUI();
                    showSlideBS2(slideNow);
                    counter = 0;
                }
                counter++;
                // 디바운스
                clearTimeout(timerId2);
                timerId2 = setTimeout(() => {
                    resetUI();
                    showSlideBS2(slideNow);
                }, 300);
            });
            function resetUI() {
                boxWidth = $selector.find('.box').width();
                barWidth = 0;
                $selector.find('.slide li').each((i) => {
                    console.log($selector.find('.slide li:eq(' + i + ')').outerWidth(true))
                    barWidth += $selector.find('.slide li:eq(' + i + ')').outerWidth(true);
                });
                // console.log(barWidth)
                $selector.find('.slide').css({ 'width': (barWidth + 10) + 'px' });
                minOffsetLeft = boxWidth - barWidth;
                maxOffsetX = -minOffsetLeft * (boxWidth / barWidth);
                var scrollBarWidth = boxWidth * (boxWidth / barWidth);
                $selector.find('.scroll .bar').css({ 'width': scrollBarWidth + 'px' });
            }
            function showSlideBS2(n) {
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
                    timerId = setTimeout(() => { showSlideBS2(slideNext); }, timerSpeed);
                }
            }
            function checkBannerNow() {
                $selector.find('.slide > li').each((i) => {
                    var startOffset = -$selector.find('.slide > li:eq(' + i + ')').position().left;
                    var endOffset = startOffset - $selector.find('.slide > li:eq(' + i + ')').outerWidth(true);
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
                <div className="banner-slide bsFinal">
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
                <div className="banner-slide bsFinal">
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
                <div className="banner-slide bsFinal">
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

export default BannerSlide;