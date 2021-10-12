import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import $ from 'jquery'
import Img1 from '../../../img/image-slide/slide-image-01.jpg';
import Img2 from '../../../img/image-slide/slide-image-02.jpg';
import Img3 from '../../../img/image-slide/slide-image-03.jpg';
import Img4 from '../../../img/image-slide/slide-image-04.jpg';
import Img5 from '../../../img/image-slide/slide-image-05.jpg';
import Img6 from '../../../img/image-slide/slide-image-06.jpg';
import Img7 from '../../../img/image-slide/slide-image-07.jpg';
import ImgBtnLeft from '../../../img/image-slide/btn-left.png';
import ImgBtnRight from '../../../img/image-slide/btn-right.png';

class MobileUI extends Component {
    render() {
        var _props = this.props.props;
        var _set = [];
        var funcSet = [MUI1(),]
        function show() {
            for (let i = 0; i < _props.content[0].length; i++) {
                _set.push(
                    <Route key={i} path={"/react-pages/UIPage/" + _props.datafrLink[0].kind + "_" + (i + 1)}>
                        <div>{funcSet[i]}</div>
                    </Route>
                );
            }
            return (
                <div>
                    <div>모바일 환경에서 swipe가 가능합니다</div>
                    {_set}
                </div>)
        }
        return show();
    }
}
const MUI1 = () => {
    return (
        <MUI1compo></MUI1compo>
    );
}

class MUI1compo extends Component {
    componentDidMount() {

        var numSlide = $('div.image-slide.mui .slide li').length;
        var slideNow = 0;
        var slidePrev = 0;
        var slideNext = 0;
        var slideFirst = 3;
        var timerId = '';
        var isTimerOn = false;
        var timerSpeed = 2000;
        var startX = 0;
        var startY = 0;
        var delX = 0;
        var delY = 0;
        var offsetX = 0;
        var direction = '';

        $('div.image-slide.mui .slide li').each(function (i) {
            $(this).css({ 'left': (i * 100) + '%', 'display': 'block' });
            $('div.image-slide.mui .indicator').append('<li><button>' + (i + 1) + '번 슬라이드</button></li>\n');
        });
        if (isTimerOn === true) {
            $('div.image-slide.mui button.play').addClass('on');
        } else {
            $('div.image-slide.mui button.play').removeClass('on');
        }
        showSlide(slideFirst);

        $('div.image-slide.mui .indicator li button').on('click', function () {
            var index = $('div.image-slide.mui .indicator li').index($(this).parent());
            showSlide(index + 1);
        });

        $('div.image-slide.mui button.prev').on('click', function () {
            $(this).find('img').stop(true).animate({ 'left': '-10px' }, 80).animate({ 'left': 0 }, 160);
            showSlide(slidePrev);
        });

        $('div.image-slide.mui button.next').on('click', function () {
            $(this).find('img').stop(true).animate({ 'right': '-10px' }, 80).animate({ 'right': 0 }, 160);
            showSlide(slideNext);
        });

        $('div.image-slide.mui button.play').on('click', function () {
            if (isTimerOn === true) {
                clearTimeout(timerId);
                $(this).removeClass('on');
                isTimerOn = false;
            } else {
                timerId = setTimeout(function () { showSlide(slideNext); }, timerSpeed);
                $(this).addClass('on');
                isTimerOn = true;
            }
        });

        $('div.image-slide.mui .slide').on('touchstart', function (e) {
            // e.preventDefault();
            $(this).css({ 'transition': 'none' });
            clearTimeout(timerId);
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            offsetX = $(this).position().left;
            // console.log(startX);
            document.addEventListener('touchmove', actTouchMove, { passive: false });
            $(document).on('touchend', function () {
                $(document).off('touchend');
                document.removeEventListener('touchmove', actTouchMove);
                if (delX < -50 && slideNow !== numSlide) {
                    showSlide(slideNext);
                } else if (delX > 50 && slideNow !== 1) {
                    showSlide(slidePrev);
                } else {
                    showSlide(slideNow);
                }
                delX = 0;
                direction = '';
            });
        });

        function actTouchMove(e) {
            // e.preventDefault();
            delX = e.touches[0].clientX - startX;
            delY = e.touches[0].clientY - startY;
            // console.log(delX + ' / ' + delY);
            if (direction === '') {
                if (Math.abs(delX) > 5) {
                    direction = 'horizon';
                } else if (Math.abs(delY) > 5) {
                    direction = 'vertical';
                }
            } else if (direction === 'horizon') {
                e.preventDefault();
                if ((slideNow === 1 && delX > 0) || (slideNow === numSlide && delX < 0)) {
                    delX = delX / 10;
                }
                $('div.image-slide.mui .slide').css({ 'left': (offsetX + delX) + 'px' });
            } else if (direction === 'vertical') {
                delX = 0;
            }
        }

        function showSlide(n) {
            if (slideNow === 0) {
                $('div.image-slide.mui .slide').css({ 'transition': 'none', 'left': -((n - 1) * 100) + '%' });
            } else {
                $('div.image-slide.mui .slide').css({ 'transition': 'left 0.5s', 'left': -((n - 1) * 100) + '%' });
            }
            $('div.image-slide.mui .indicator li').removeClass('on');
            $('div.image-slide.mui .indicator li:eq(' + (n - 1) + ')').addClass('on');
            slideNow = n;
            slidePrev = (n === 1) ? numSlide : (n - 1);
            slideNext = (n === numSlide) ? 1 : (n + 1);
            console.log(slidePrev + ' / ' + slideNow + ' / ' + slideNext);
            if (isTimerOn === true) {
                clearTimeout(timerId);
                timerId = setTimeout(function () { showSlide(slideNext); }, timerSpeed);
            }
        }


    }
    render() {
        return (
            <div className="image-slide mui">
                <div className="box">
                    <p className="dummy"><img alt="" src={Img1} /></p>
                    <ul className="slide">
                        <li><button><img alt="000000" src={Img1} /></button></li>
                        <li><button><img alt="000000" src={Img2} /></button></li>
                        <li><button><img alt="000000" src={Img3} /></button></li>
                        <li><button><img alt="000000" src={Img4} /></button></li>
                        <li><button><img alt="000000" src={Img5} /></button></li>
                        <li><button><img alt="000000" src={Img6} /></button></li>
                        <li><button><img alt="000000" src={Img7} /></button></li>
                    </ul>
                </div>
                <ul class="indicator">
                </ul>
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


export default MobileUI;