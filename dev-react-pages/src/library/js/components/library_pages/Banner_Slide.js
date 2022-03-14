import React, { Component } from 'react';
import '../../../fa/css/all.min.css'
import $ from 'jquery'
import getInfo from '../UiInfoGetter';
import Box from './Box';

class BannerSlide extends Component {
        render() {
            let index = getInfo(this.props)[0];
            let img4Compo = this.props.imgSet.map((sr)=>sr);
            let compArry = [<BS1compo img={img4Compo}/>,<BS2compo img={img4Compo}/>]
            return <div>{compArry[index]}</div> 
        }
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
        let pre = this.props.img.map((imageset)=>imageset);
        return Box(pre, 'bs1', 'banner-slide bs1', 15);
    }
}
class BS2compo extends Component {
    componentDidMount() {
        new setBannerSlide('#bsFinal1', true, 2000);
        new setBannerSlide('#bsFinal2', false, 2000);
        new setBannerSlide('#bsFinal3', true, 1000, true);
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
            var isScroll = (scroll === undefined) ? false : scroll;
            var startX = 0;
            var delX = 0;
            var offsetX = 0;
            var maxOffsetX = 0;
            const resetUI = () => {
                boxWidth = $selector.find('.box').width();
                barWidth = 0;
                $selector.find('.slide li').each((i) => {
                    barWidth += $selector.find('.slide li:eq(' + i + ')').outerWidth(true);
                    // barWidth += $(this).outerWidth(true);
                });
                $selector.find('.slide').css({ 'width': (barWidth + 10) + 'px' });
                minOffsetLeft = boxWidth - barWidth;
                maxOffsetX = -minOffsetLeft * (boxWidth / barWidth);
                var scrollBarWidth = boxWidth * (boxWidth / barWidth);
                $selector.find('.scroll .bar').css({ 'width': scrollBarWidth + 'px' });
            }
            resetUI();
            showSlideBS2(1);
            if (isScroll === true) {
                $selector.find('.box').append('<div class="scroll"><button class="bar"></button></div>');
            }

            if (isTimerOn === true) {
                $selector.find('button.play').addClass('on');
            } else {
                $selector.find('button.play').removeClass('on');
            }


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
        let pre = this.props.img.map((imageset)=>imageset);
        return (
            <div>
                {Box(pre, 'bsFinal1', 'banner-slide bsFinal', 15)}
                {Box(pre, 'bsFinal2', 'banner-slide bsFinal', 15)}
                {Box(pre, 'bsFinal3', 'banner-slide bsFinal', 15)}
            </div>
        )
    }
}

export default BannerSlide;