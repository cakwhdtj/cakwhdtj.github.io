import React, { Component } from 'react';
import $ from 'jquery'
import getInfo from '../UiInfoGetter';


class MobileUI extends Component {
    render() {
        let index = getInfo(this.props)[0];
        let img4Compo = this.props.imgSet.map((sr)=>sr);
        let compArry = [<MUI1compo img={img4Compo} />]
        return (
            <div>
                <div>{compArry[index]}</div> 
                <div style={{
                    position : "absolute",
                    left : "50%",
                    transform : "translate(-50%,0)"
                }}>
                모바일 환경에서 swipe가 가능합니다
                </div>
            </div>
        )}
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
        let pre = this.props.img.map((imageset)=>imageset);
        return (
            <div className="image-slide mui">
                <div className="box">
                    <p className="dummy"><img alt="" src={pre[0].Img1} /></p>
                    <ul className="slide">
                        <li><button><img alt="000000" src={pre[0].Img1} /></button></li>
                        <li><button><img alt="000000" src={pre[1].Img2} /></button></li>
                        <li><button><img alt="000000" src={pre[2].Img3} /></button></li>
                        <li><button><img alt="000000" src={pre[3].Img4} /></button></li>
                        <li><button><img alt="000000" src={pre[4].Img5} /></button></li>
                        <li><button><img alt="000000" src={pre[5].Img6} /></button></li>
                        <li><button><img alt="000000" src={pre[6].Img7} /></button></li>
                    </ul>
                </div>
                <ul className="indicator">
                </ul>
                <p className="control">
                    <button className="prev"><img alt="이전" src={pre[15].ImgBtnLeft} /></button>
                    <button className="next"><img alt="다음" src={pre[16].ImgBtnRight} /></button>
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