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
import ImgBtnLeft from '../../../img/image-slide/btn-left.png';
import ImgBtnRight from '../../../img/image-slide/btn-right.png';
import jQuery from 'jquery';
import $ from 'jquery'


class Image_Slide extends Component {
    render() {
        var _props = this.props;
        var _set = [];
        var funcSet = [IS_1(), IS_2(), IS_3(), IS_4(), IS_5(), IS_6(), IS_7(), IS_8(), IS_9(), IS_10()]
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
const IS_1 = () => {
    return (
        <IS_1compo></IS_1compo>
    );
}
const IS_2 = () => {
    return (
        <IS_2compo></IS_2compo>
    );
}
const IS_3 = () => {
    return (
        <IS_3compo></IS_3compo>
    )
}
const IS_4 = () => {
    return (
        <IS_4compo></IS_4compo>
    )
}
const IS_5 = () => {
    return (
        <IS_5compo></IS_5compo>
    )
}
const IS_6 = () => {
    return (
        <IS_6compo></IS_6compo>
    )
}
const IS_7 = () => {
    return (
        <IS_7compo></IS_7compo>
    )
}
const IS_8 = () => {
    return (
        <IS_8compo></IS_8compo>
    )
}
const IS_9 = () => {
    return (
        <IS_9compo></IS_9compo>
    )
}
const IS_10 = () => {
    return (
        <IS_10compo></IS_10compo>
    )
}
class IS_1compo extends Component {
    componentDidMount() {
        $('div.image-slide.is1 .indicator li button').on('click', function () {
            var index = $('div.image-slide.is1 .indicator li').index($(this).parent());
            $('div.image-slide.is1 .slide li').css({ 'display': 'none' });
            $('div.image-slide.is1 .slide li:eq(' + index + ')').css({ 'display': 'block' });
            $('div.image-slide.is1 .indicator li').removeClass('on');
            $('div.image-slide.is1 .indicator li:eq(' + index + ')').addClass('on');
        });
        $('div.image-slide.is1 button.prev').on('click', function () {
            var index = $('div.image-slide.is1 .indicator li').index($('div.image-slide.is1 .indicator li.on'));
            index = (index <= 0) ? 6 : (index - 1);
            $('div.image-slide.is1 .slide li').css({ 'display': 'none' });
            $('div.image-slide.is1 .slide li:eq(' + index + ')').css({ 'display': 'block' });
            $('div.image-slide.is1 .indicator li').removeClass('on');
            $('div.image-slide.is1 .indicator li:eq(' + index + ')').addClass('on');
        });
        $('div.image-slide.is1 button.next').on('click', function () {
            var index = $('div.image-slide.is1 .indicator li').index($('div.image-slide.is1 .indicator li.on'));
            index = (index >= 6) ? 0 : (index + 1);
            $('div.image-slide.is1 .slide li').css({ 'display': 'none' });
            $('div.image-slide.is1 .slide li:eq(' + index + ')').css({ 'display': 'block' });
            $('div.image-slide.is1 .indicator li').removeClass('on');
            $('div.image-slide.is1 .indicator li:eq(' + index + ')').addClass('on');
        });
    }
    render() {
        return (
            <div class="image-slide is1">
                <div class="box">
                    <p class="dummy"><img alt="" src={Img1} /></p>
                    <ul class="slide">
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
                    <li class="on"><button>1번 슬라이드</button></li>
                    <li><button>2번 슬라이드</button></li>
                    <li><button>3번 슬라이드</button></li>
                    <li><button>4번 슬라이드</button></li>
                    <li><button>5번 슬라이드</button></li>
                    <li><button>6번 슬라이드</button></li>
                    <li><button>7번 슬라이드</button></li>
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
class IS_2compo extends Component {
    constructor(props) {
        super(props)
        this.showSlide2 = this.showSlide2.bind(this)
    }
    componentDidMount() {
        $('div.image-slide.is2 .indicator li button').on('click', function () {
            var index = $('div.image-slide.is2 .indicator > li').index($(this).parent());
            showSlide2(index + 1);
        });
        $('div.image-slide.is2 button.prev').on('click', function () {
            var index = $('div.image-slide.is2 .indicator li').index($('div.image-slide.is2 .indicator li.on'));
            index = (index <= 0) ? 6 : (index - 1);
            showSlide2(index + 1);
        });
        $('div.image-slide.is2 button.next').on('click', function () {
            var index = $('div.image-slide.is2 .indicator li').index($('div.image-slide.is2 .indicator li.on'));
            index = (index >= 6) ? 0 : (index + 1);
            showSlide2(index + 1);
        });
        function showSlide2(n) {
            $('div.image-slide.is2 .slide li').css({ 'display': 'none' });
            $('div.image-slide.is2 .slide li:eq(' + (n - 1) + ')').css({ 'display': 'block' });
            $('div.image-slide.is2 .indicator li').removeClass('on');
            $('div.image-slide.is2 .indicator li:eq(' + (n - 1) + ')').addClass('on');
        }
    }
    render() {
        return (
            <div class="image-slide is2">
                <div class="box">
                    <p class="dummy"><img alt="" src={Img1} /></p>
                    <ul class="slide">
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
                    <li class="on"><button>1번 슬라이드</button></li>
                    <li><button>2번 슬라이드</button></li>
                    <li><button>3번 슬라이드</button></li>
                    <li><button>4번 슬라이드</button></li>
                    <li><button>5번 슬라이드</button></li>
                    <li><button>6번 슬라이드</button></li>
                    <li><button>7번 슬라이드</button></li>
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
        );
    }
}
class IS_3compo extends Component {
    componentDidMount() {
        $('div.image-slide.is3 .indicator li button').on('click', function () {
            var index = $('div.image-slide.is3 .indicator li').index($(this).parent());
            $('div.image-slide.is3 .slide li').css({ 'display': 'none' });
            $('div.image-slide.is3 .slide li:eq(' + index + ')').css({ 'display': 'block' });
            $('div.image-slide.is3 .indicator li').removeClass('on');
            $('div.image-slide.is3 .indicator li:eq(' + index + ')').addClass('on');
        });
        $('div.image-slide.is3 button.prev').on('click', function () {
            var index = $('div.image-slide.is3 .indicator li').index($('div.image-slide.is3 .indicator li.on'));
            index = (index <= 0) ? 6 : (index - 1);
            $('div.image-slide.is3 .slide li').css({ 'display': 'none' });
            $('div.image-slide.is3 .slide li:eq(' + index + ')').css({ 'display': 'block' });
            $('div.image-slide.is3 .indicator li').removeClass('on');
            $('div.image-slide.is3 .indicator li:eq(' + index + ')').addClass('on');
        });
        $('div.image-slide.is3 button.next').on('click', function () {
            var index = $('div.image-slide.is3 .indicator li').index($('div.image-slide.is3 .indicator li.on'));
            index = (index >= 6) ? 0 : (index + 1);
            $('div.image-slide.is3 .slide li').css({ 'display': 'none' });
            $('div.image-slide.is3 .slide li:eq(' + index + ')').css({ 'display': 'block' });
            $('div.image-slide.is3 .indicator li').removeClass('on');
            $('div.image-slide.is3 .indicator li:eq(' + index + ')').addClass('on');
        });
    }
    render() {
        return (
            <div class="image-slide is3">
                <div class="box">
                    <p class="dummy"><img alt="" src={Img1} /></p>
                    <ul class="slide">
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
                    <li class="on"><button>1번 슬라이드</button></li>
                    <li><button>2번 슬라이드</button></li>
                    <li><button>3번 슬라이드</button></li>
                    <li><button>4번 슬라이드</button></li>
                    <li><button>5번 슬라이드</button></li>
                    <li><button>6번 슬라이드</button></li>
                    <li><button>7번 슬라이드</button></li>
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
class IS_4compo extends Component {
    constructor(props) {
        super(props)
        this.showSlide4 = this.showSlide4.bind(this)
    }
    componentDidMount() {
        var numSlide = $('div.image-slide.is4 .slide li').length;
        var slideNow = 0;
        var slidePrev = 0;
        var slideNext = 0;
        var slideFirst = 1;
        var timerId = '';
        var isTimerOn = true;
        var timerSpeed = 3000;
        function showSlide4(n) {
            $('div.image-slide.is4 .slide li').css({ 'display': 'none' });
            $('div.image-slide.is4 .slide li:eq(' + (n - 1) + ')').css({ 'display': 'block' });
            $('div.image-slide.is4 .indicator li').removeClass('on');
            $('div.image-slide.is4 .indicator li:eq(' + (n - 1) + ')').addClass('on');
            slideNow = n;
            slidePrev = (n === 1) ? numSlide : (n - 1);
            slideNext = (n === numSlide) ? 1 : (n + 1);
            if (isTimerOn === true) {
                clearTimeout(timerId);
                timerId = setTimeout(function () { showSlide4(slideNext); }, timerSpeed);
            }
        }
        $('div.image-slide.is4 .slide li').each(function (i) {
            $('div.image-slide.is4 .indicator').append('<li><button>' + (i + 1) + '번 슬라이드</button></li>\n');
        });
        if (isTimerOn === true) {
            $('div.image-slide.is4 button.play').addClass('on');
        } else {
            $('div.image-slide.is4 button.play').removeClass('on');
        }
        showSlide4(slideFirst);

        $('div.image-slide.is4 .indicator li button').on('click', function () {
            var index = $('div.image-slide.is4 .indicator li').index($(this).parent());
            showSlide4(index + 1);
        });

        $('div.image-slide.is4 button.prev').on('click', function () {
            showSlide4(slidePrev);
        });

        $('div.image-slide.is4 button.next').on('click', function () {
            showSlide4(slideNext);
        });

        $('div.image-slide.is4 button.play').on('click', function () {
            if (isTimerOn === true) {
                clearTimeout(timerId);
                $(this).removeClass('on');
                isTimerOn = false;
            } else {
                timerId = setTimeout(function () { showSlide4(slideNext); }, timerSpeed);
                $(this).addClass('on');
                isTimerOn = true;
            }
        });
    }
    render() {
        return (
            <div class="image-slide is4">
                <div class="box">
                    <p class="dummy"><img alt="" src={Img1} /></p>
                    <ul class="slide">
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
                <p class="control">
                    <button class="prev"><img alt="이전" src={ImgBtnLeft} /></button>
                    <button class="next"><img alt="다음" src={ImgBtnRight} /></button>
                    <button class="play">
                        <i class="fas fa-play fa-fw"><span>타이머 시작</span></i>
                        <i class="fas fa-pause fa-fw"><span>타이머 정지</span></i>
                    </button>
                </p>
            </div>
        )
    }
}
class IS_5compo extends Component {
    constructor(props) {
        super(props)
        this.showSlide5 = this.showSlide5.bind(this)
    }
    componentDidMount() {
        var numSlide = $('div.image-slide.is5 .slide li').length;
        var slideNow = 0;
        var slidePrev = 0;
        var slideNext = 0;
        var slideFirst = 3;
        var timerId = '';
        var isTimerOn = false;
        var timerSpeed = 2000;

        $('div.image-slide.is5 .slide li').each(function (i) {
            $(this).css({ 'left': (i * 100) + '%', 'display': 'block' });
            $('div.image-slide.is5 .indicator').append('<li><button>' + (i + 1) + '번 슬라이드</button></li>\n');
        });
        if (isTimerOn === true) {
            $('div.image-slide.is5 button.play').addClass('on');
        } else {
            $('div.image-slide.is5 button.play').removeClass('on');
        }
        showSlide5(slideFirst);
        $('div.image-slide.is5 .indicator li button').on('click', function () {
            var index = $('div.image-slide.is5 .indicator li').index($(this).parent());
            showSlide5(index + 1);
        });
        $('div.image-slide.is5 button.prev').on('click', function () {
            $(this).find('img').stop(true).animate({ 'left': '-10px' }, 80).animate({ 'left': 0 }, 160);
            showSlide5(slidePrev);
        });
        $('div.image-slide.is5 button.next').on('click', function () {
            $(this).find('img').stop(true).animate({ 'right': '-10px' }, 80).animate({ 'right': 0 }, 160);
            showSlide5(slideNext);
        });
        $('div.image-slide.is5 button.play').on('click', function () {
            if (isTimerOn === true) {
                clearTimeout(timerId);
                $(this).removeClass('on');
                isTimerOn = false;
            } else {
                timerId = setTimeout(function () { showSlide5(slideNext); }, timerSpeed);
                $(this).addClass('on');
                isTimerOn = true;
            }
        });
        function showSlide5(n) {
            if (slideNow === 0) {
                $('div.image-slide.is5 .slide').css({ 'transition': 'none', 'left': -((n - 1) * 100) + '%' });
            } else {
                $('div.image-slide.is5 .slide').css({ 'transition': 'left 0.5s', 'left': -((n - 1) * 100) + '%' });
            }
            $('div.image-slide.is5 .indicator li').removeClass('on');
            $('div.image-slide.is5 .indicator li:eq(' + (n - 1) + ')').addClass('on');
            slideNow = n;
            slidePrev = (n === 1) ? numSlide : (n - 1);
            slideNext = (n === numSlide) ? 1 : (n + 1);
            if (isTimerOn === true) {
                clearTimeout(timerId);
                timerId = setTimeout(function () { showSlide5(slideNext); }, timerSpeed);
            }
        }
    }
    render() {
        return (
            <div class="image-slide is5">
                <div class="box">
                    <p class="dummy"><img alt="" src={Img1} /></p>
                    <ul class="slide">
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
                <p class="control">
                    <button class="prev"><img alt="이전" src={ImgBtnLeft} /></button>
                    <button class="next"><img alt="다음" src={ImgBtnRight} /></button>
                    <button class="play">
                        <i class="fas fa-play fa-fw"><span>타이머 시작</span></i>
                        <i class="fas fa-pause fa-fw"><span>타이머 정지</span></i>
                    </button>
                </p>
            </div>
        )
    }
}
class IS_6compo extends Component {
    constructor(props) {
        super(props)
        this.showSlide6 = this.showSlide6.bind(this)
    }
    componentDidMount() {
        setImageSlide('div.image-slide.is6:eq(0)', 1, true, 2000);
        setImageSlide('div.image-slide.is6:eq(1)', 3, false, 3000);
        setImageSlide('div.image-slide.is6:eq(2)', 5, true, 1000);
        function setImageSlide(selector, first, status, speed) {
            var $selector = $(selector);
            var numSlide = $selector.find('.slide li').length;
            var slideNow = 0;
            var slidePrev = 0;
            var slideNext = 0;
            var slideFirst = first;
            var timerId = '';
            var isTimerOn = status;
            var timerSpeed = speed;

            $selector.find('.slide li').each(function (i) {
                $(this).css({ 'left': (i * 100) + '%', 'display': 'block' });
                $selector.find('.indicator').append('<li><button>' + (i + 1) + '번 슬라이드</button></li>\n');
            });
            if (isTimerOn === true) {
                $selector.find('button.play').addClass('on');
            } else {
                $selector.find('button.play').removeClass('on');
            }
            showSlide6(slideFirst);
            $selector.find('.indicator li button').on('click', function () {
                var index = $selector.find('.indicator li').index($(this).parent());
                showSlide6(index + 1);
            });
            $selector.find('button.prev').on('click', function () {
                $(this).find('img').stop(true).animate({ 'left': '-10px' }, 80).animate({ 'left': 0 }, 160);
                showSlide6(slidePrev);
            });
            $selector.find('button.next').on('click', function () {
                $(this).find('img').stop(true).animate({ 'right': '-10px' }, 80).animate({ 'right': 0 }, 160);
                showSlide6(slideNext);
            });
            $selector.find('button.play').on('click', function () {
                if (isTimerOn === true) {
                    clearTimeout(timerId);
                    $(this).removeClass('on');
                    isTimerOn = false;
                } else {
                    timerId = setTimeout(function () { showSlide6(slideNext); }, timerSpeed);
                    $(this).addClass('on');
                    isTimerOn = true;
                }
            });
            function showSlide6(n) {
                if (slideNow === 0) {
                    $selector.find('.slide').css({ 'transition': 'none', 'left': -((n - 1) * 100) + '%' });
                } else {
                    $selector.find('.slide').css({ 'transition': 'left 0.5s', 'left': -((n - 1) * 100) + '%' });
                }
                $selector.find('.indicator li').removeClass('on');
                $selector.find('.indicator li:eq(' + (n - 1) + ')').addClass('on');
                slideNow = n;
                slidePrev = (n === 1) ? numSlide : (n - 1);
                slideNext = (n === numSlide) ? 1 : (n + 1);
                if (isTimerOn === true) {
                    clearTimeout(timerId);
                    timerId = setTimeout(function () { showSlide6(slideNext); }, timerSpeed);
                }
            }
        }
    }
    render() {
        return (
            <div>
                <div class="image-slide is6">
                    <div class="box">
                        <p class="dummy"><img alt="" src={Img1} /></p>
                        <ul class="slide">
                            <li><img alt="000000" src={Img1} /></li>
                            <li><img alt="000000" src={Img2} /></li>
                            <li><img alt="000000" src={Img3} /></li>
                            <li><img alt="000000" src={Img4} /></li>
                            <li><img alt="000000" src={Img5} /></li>
                            <li><img alt="000000" src={Img6} /></li>
                            <li><img alt="000000" src={Img7} /></li>
                        </ul>
                    </div>
                    <ul class="indicator">
                    </ul>
                    <p class="control">
                        <button class="prev"><img alt="이전" src={ImgBtnLeft} /></button>
                        <button class="next"><img alt="다음" src={ImgBtnRight} /></button>
                        <button class="play">
                            <i class="fas fa-play fa-fw"><span>타이머 시작</span></i>
                            <i class="fas fa-pause fa-fw"><span>타이머 정지</span></i>
                        </button>
                    </p>
                </div>
                <div class="image-slide is6">
                    <div class="box">
                        <p class="dummy"><img alt="" src={Img1} /></p>
                        <ul class="slide">
                            <li><img alt="000000" src={Img1} /></li>
                            <li><img alt="000000" src={Img2} /></li>
                            <li><img alt="000000" src={Img3} /></li>
                            <li><img alt="000000" src={Img4} /></li>
                            <li><img alt="000000" src={Img5} /></li>
                            <li><img alt="000000" src={Img6} /></li>
                            <li><img alt="000000" src={Img7} /></li>
                        </ul>
                    </div>
                    <ul class="indicator">
                    </ul>
                    <p class="control">
                        <button class="prev"><img alt="이전" src={ImgBtnLeft} /></button>
                        <button class="next"><img alt="다음" src={ImgBtnRight} /></button>
                        <button class="play">
                            <i class="fas fa-play fa-fw"><span>타이머 시작</span></i>
                            <i class="fas fa-pause fa-fw"><span>타이머 정지</span></i>
                        </button>
                    </p>
                </div>
                <div class="image-slide is6">
                    <div class="box">
                        <p class="dummy"><img alt="" src={Img1} /></p>
                        <ul class="slide">
                            <li><img alt="000000" src={Img1} /></li>
                            <li><img alt="000000" src={Img2} /></li>
                            <li><img alt="000000" src={Img3} /></li>
                            <li><img alt="000000" src={Img4} /></li>
                            <li><img alt="000000" src={Img5} /></li>
                            <li><img alt="000000" src={Img6} /></li>
                            <li><img alt="000000" src={Img7} /></li>
                        </ul>
                    </div>
                    <ul class="indicator">
                    </ul>
                    <p class="control">
                        <button class="prev"><img alt="이전" src={ImgBtnLeft} /></button>
                        <button class="next"><img alt="다음" src={ImgBtnRight} /></button>
                        <button class="play">
                            <i class="fas fa-play fa-fw"><span>타이머 시작</span></i>
                            <i class="fas fa-pause fa-fw"><span>타이머 정지</span></i>
                        </button>
                    </p>
                </div>
            </div>
        )
    }
}
class IS_7compo extends Component {
    constructor(props) {
        super(props)
        this.ImageSlide = this.ImageSlide.bind(this)
    }
    componentDidMount() {
        var slide1 = new ImageSlide('is7');

        function ImageSlide(id, options) {
            var $selector = $('.' + id);
            var numSlide = $selector.find('.slide li').length;
            var slideNow = 0;
            var slidePrev = 0;
            var slideNext = 0;
            var slideFirst = (options === undefined || options.firstSlide === undefined) ? 1 : options.firstSlide;
            var timerId = '';
            var isTimerOn = (options === undefined || options.timerStatus === undefined) ? false : options.timerStatus;
            var timerSpeed = (options === undefined || options.timerSpeed === undefined) ? 3000 : options.timerSpeed;

            $selector.find('.slide li').each(function (i) {
                $(this).css({ 'left': (i * 100) + '%', 'display': 'block' });
                $selector.find('.indicator').append('<li><button>' + (i + 1) + '번 슬라이드</button></li>\n');
            });
            if (isTimerOn === true) {
                $selector.find('button.play').addClass('on');
            } else {
                $selector.find('button.play').removeClass('on');
            }
            showSlide7(slideFirst);

            $selector.find('.indicator li button').on('click', function () {
                var index = $selector.find('.indicator li').index($(this).parent());
                showSlide7(index + 1);
            });

            $selector.find('button.prev').on('click', function () {
                $(this).find('img').stop(true).animate({ 'left': '-10px' }, 80).animate({ 'left': 0 }, 160);
                showSlide7(slidePrev);
            });

            $selector.find('button.next').on('click', function () {
                $(this).find('img').stop(true).animate({ 'right': '-10px' }, 80).animate({ 'right': 0 }, 160);
                showSlide7(slideNext);
            });

            $selector.find('button.play').on('click', function () {
                if (isTimerOn === true) {
                    clearTimeout(timerId);
                    $(this).removeClass('on');
                    isTimerOn = false;
                } else {
                    timerId = setTimeout(function () { showSlide7(slideNext); }, timerSpeed);
                    $(this).addClass('on');
                    isTimerOn = true;
                }
            });

            function showSlide7(n) {
                if (slideNow === 0) {
                    $selector.find('.slide').css({ 'transition': 'none', 'left': -((n - 1) * 100) + '%' });
                } else {
                    $selector.find('.slide').css({ 'transition': 'left 0.5s', 'left': -((n - 1) * 100) + '%' });
                }
                $selector.find('.indicator li').removeClass('on');
                $selector.find('.indicator li:eq(' + (n - 1) + ')').addClass('on');
                slideNow = n;
                slidePrev = (n === 1) ? numSlide : (n - 1);
                slideNext = (n === numSlide) ? 1 : (n + 1);
                if (isTimerOn === true) {
                    clearTimeout(timerId);
                    timerId = setTimeout(function () { showSlide7(slideNext); }, timerSpeed);
                }
            }
            this.showPrev = function () {
                showSlide7(slidePrev);
            }
            this.showNext = function () {
                showSlide7(slideNext);
            }
            this.showSlide = function (n) {
                showSlide7(n);
            }
            this.stopTimer = function () {
                clearTimeout(timerId);
                $selector.find('button.play').removeClass('on');
                isTimerOn = false;
            }
            this.startTimer = function () {
                timerId = setTimeout(function () { showSlide7(slideNext); }, timerSpeed);
                $selector.find('button.play').addClass('on');
                isTimerOn = true;
            }
            this.getSlideNow = function () {
                return slideNow;
            }
        }

        // 외부에서 슬라이드 기능 접근
        $('#test1').on('click', function () {
            slide1.showPrev();
        });
        $('#test2').on('click', function () {
            slide1.showSlide7(5);
        });
        $('#test3').on('click', function () {
            slide1.showNext();
        });
        $('#test4').on('click', function () {
            slide1.stopTimer();
        });
    }
    render() {
        return (
            <div>
                <p class="test-button">
                    <button id="test1">테스트 버튼 1 이전슬라이드</button>
                    <button id="test2">테스트 버튼 2 5번슬라이드</button>
                    <button id="test3">테스트 버튼 3 다음슬라이드</button>
                    <button id="test4">테스트 버튼 4 타이머정지</button>
                </p>
                <div class="image-slide is7">
                    <div class="box">
                        <p class="dummy"><img alt="" src={Img1} /></p>
                        <ul class="slide">
                            <li><img alt="000000" src={Img1} /></li>
                            <li><img alt="000000" src={Img2} /></li>
                            <li><img alt="000000" src={Img3} /></li>
                            <li><img alt="000000" src={Img4} /></li>
                            <li><img alt="000000" src={Img5} /></li>
                            <li><img alt="000000" src={Img6} /></li>
                            <li><img alt="000000" src={Img7} /></li>
                        </ul>
                    </div>
                    <ul class="indicator">
                    </ul>
                    <p class="control">
                        <button class="prev"><img alt="이전" src={ImgBtnLeft} /></button>
                        <button class="next"><img alt="다음" src={ImgBtnRight} /></button>
                        <button class="play">
                            <i class="fas fa-play fa-fw"><span>타이머 시작</span></i>
                            <i class="fas fa-pause fa-fw"><span>타이머 정지</span></i>
                        </button>
                    </p>
                </div>
            </div>
        )
    }
}
class IS_8compo extends Component {
    componentDidMount() {
        class ImageSlide {
            #selector = null;
            #numSlide = 0;
            #slideNow = 0;
            #slidePrev = 0;
            #slideNext = 0;
            #slideFirst = 0;
            #timerId = '';
            #isTimerOn = 0;
            #timerSpeed = 0;

            constructor(id, options) {
                var slide = this;
                var $selector = $('#' + id);
                this.#selector = $('#' + id);
                this.#numSlide = this.#selector.find('.slide li').length;
                this.#slideFirst = (options === undefined || options.slideFirst === undefined) ? 1 : options.slideFirst;
                this.#isTimerOn = (options === undefined || options.timerStatus === undefined) ? false : options.timerStatus;
                this.#timerSpeed = (options === undefined || options.timerSpeed === undefined) ? 3000 : options.timerSpeed;
                // 초기상태 설정
                this.#selector.find('.slide li').each(function (i) {
                    $(this).css({ 'left': (i * 100) + '%', 'display': 'block' });
                    slide.#selector.find('.indicator').append('<li><button>' + (i + 1) + '번 슬라이드</button></li>\n');
                    // this.#selector  --> 내부에서 this는 ImageSlide 객체로 인식되지 못함(li가 this)
                });
                if (this.#isTimerOn === true) {
                    this.#selector.find('button.play').addClass('on');
                } else {
                    this.#selector.find('button.play').removeClass('on');
                }
                this.#showSlide(this.#slideFirst);
                this.#selector.find('.indicator li button').on('click', function () {
                    var index = slide.#selector.find('.indicator li').index($(this).parent());
                    slide.#showSlide(index + 1);
                });
                this.#selector.find('button.prev').on('click', function () {
                    slide.#showSlide(slide.#slidePrev);
                });
                this.#selector.find('button.next').on('click', function () {
                    slide.#showSlide(slide.#slideNext);
                });
                this.#selector.find('button.play').on('click', function () {
                    if (slide.#isTimerOn === true) {
                        slide.#stopTimer();
                    } else {
                        slide.#startTimer();
                    }
                });
            }
            #stopTimer() {
                clearTimeout(this.#timerId);
                this.#selector.find('button.play').removeClass('on');
                this.#isTimerOn = false;
            }
            #startTimer() {
                var slide = this;
                this.#timerId = setTimeout(function () { slide.#showSlide(slide.#slideNext); }, slide.#timerSpeed);
                this.#selector.find('button.play').addClass('on');
                this.#isTimerOn = true;
            }
            #showPrev() {
                this.#showSlide(this.#slidePrev);
            }
            #showNext() {
                this.#showSlide(this.#slideNext);
            }
            #showSlide(n) {
                var slide = this;
                if (this.#slideNow === 0) {
                    this.#selector.find('.slide').css({ 'transition': 'nont', 'left': -((n - 1) * 100) + '%' });
                } else {
                    this.#selector.find('.slide').css({ 'transition': 'left 0.5s', 'left': -((n - 1) * 100) + '%' });
                }
                this.#selector.find('.indicator li').removeClass('on');
                this.#selector.find('.indicator li:eq(' + (n - 1) + ')').addClass('on');
                this.#slideNow = n;
                this.#slidePrev = (n === 1) ? this.#numSlide : (n - 1);
                this.#slideNext = (n === this.#numSlide) ? 1 : (n + 1);
                // console.log(this.#slidePrev + ' / ' + this.#slideNow + ' / ' + this.#slideNext);
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
        }
        var slide1 = new ImageSlide('is8_1', {
            slideFirst: 4,
            timerSpeed: 2000
        });
        var slide2 = new ImageSlide('is8_2', {
            slideFirst: 2,
            timerStatus: false,
            timerSpeed: 1000
        });
        // 외부에서 슬라이드 기능 접근
        $('#test1').on('click', function () {
            slide1.showPrev();
        });
        $('#test2').on('click', function () {
            slide1.showSlide(5);
        });
        $('#test3').on('click', function () {
            slide1.showNext();
        });
        $('#test4').on('click', function () {
            slide1.toggleTimer();
        });
    }
    render() {
        return (
            <div>
                <p class="test-button">
                    <button id="test1">테스트 버튼 1 이전슬라이드</button>
                    <button id="test2">테스트 버튼 2 5번슬라이드</button>
                    <button id="test3">테스트 버튼 3 다음슬라이드</button>
                    <button id="test4">테스트 버튼 4 토글타이머</button>
                </p>
                <div>
                    <div class="image-slide is8" id="is8_1">
                        <div class="box">
                            <p class="dummy"><img alt="" src={Img1} /></p>
                            <ul class="slide">
                                <li><img alt="000000" src={Img1} /></li>
                                <li><img alt="000000" src={Img2} /></li>
                                <li><img alt="000000" src={Img3} /></li>
                                <li><img alt="000000" src={Img4} /></li>
                                <li><img alt="000000" src={Img5} /></li>
                                <li><img alt="000000" src={Img6} /></li>
                                <li><img alt="000000" src={Img7} /></li>
                            </ul>
                        </div>
                        <ul class="indicator">
                        </ul>
                        <p class="control">
                            <button class="prev"><img alt="이전" src={ImgBtnLeft} /></button>
                            <button class="next"><img alt="다음" src={ImgBtnRight} /></button>
                            <button class="play">
                                <i class="fas fa-play fa-fw"><span>타이머 시작</span></i>
                                <i class="fas fa-pause fa-fw"><span>타이머 정지</span></i>
                            </button>
                        </p>
                    </div>
                </div>
                <div>
                    <div class="image-slide is8" id="is8_2">
                        <div class="box">
                            <p class="dummy"><img alt="" src={Img1} /></p>
                            <ul class="slide">
                                <li><img alt="000000" src={Img1} /></li>
                                <li><img alt="000000" src={Img2} /></li>
                                <li><img alt="000000" src={Img3} /></li>
                                <li><img alt="000000" src={Img4} /></li>
                                <li><img alt="000000" src={Img5} /></li>
                                <li><img alt="000000" src={Img6} /></li>
                                <li><img alt="000000" src={Img7} /></li>
                            </ul>
                        </div>
                        <ul class="indicator">
                        </ul>
                        <p class="control">
                            <button class="prev"><img alt="이전" src={ImgBtnLeft} /></button>
                            <button class="next"><img alt="다음" src={ImgBtnRight} /></button>
                            <button class="play">
                                <i class="fas fa-play fa-fw"><span>타이머 시작</span></i>
                                <i class="fas fa-pause fa-fw"><span>타이머 정지</span></i>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
class IS_9compo extends Component {
    componentDidMount() {
        var numSlide = $('div.image-slide .slide li').length;
        var slideNow = 0;
        var slidePrev = 0;
        var slideNext = 0;
        var slideFirst = 3;
        var timerId = '';
        var isTimerOn = false;
        var timerSpeed = 2000;
        var startX = 0;
        var delX = 0;
        var offsetX = 0;
        var isBlocked = false;
        $('div.image-slide.isdrag .slide li').each(function (i) {
            $(this).css({ 'left': (i * 100) + '%', 'display': 'block' });
            $('div.image-slide.isdrag .indicator').append('<li><button>' + (i + 1) + '번 슬라이드</button></li>\n');
        });
        if (isTimerOn === true) {
            $('div.image-slide.isdrag button.play').addClass('on');
        } else {
            $('div.image-slide.isdrag button.play').removeClass('on');
        }
        showSlide9(slideFirst);

        $('div.image-slide.isdrag .indicator li button').on('click', function () {
            var index = $('div.image-slide.isdrag .indicator li').index($(this).parent());
            showSlide9(index + 1);
        });

        $('div.image-slide.isdrag button.prev').on('click', function () {
            $(this).find('img').stop(true).animate({ 'left': '-10px' }, 80).animate({ 'left': 0 }, 160);
            showSlide9(slidePrev);
        });

        $('div.image-slide.isdrag button.next').on('click', function () {
            $(this).find('img').stop(true).animate({ 'right': '-10px' }, 80).animate({ 'right': 0 }, 160);
            showSlide9(slideNext);
        });

        $('div.image-slide.isdrag button.play').on('click', function () {
            if (isTimerOn === true) {
                clearTimeout(timerId);
                $(this).removeClass('on');
                isTimerOn = false;
            } else {
                timerId = setTimeout(function () { showSlide9(slideNext); }, timerSpeed);
                $(this).addClass('on');
                isTimerOn = true;
            }
        });

        $('div.image-slide.isdrag .slide').on('mousedown', function (e) {
            e.preventDefault();
            $(this).css({ 'transition': 'none' });
            clearTimeout(timerId);
            startX = e.clientX;
            offsetX = $(this).position().left;
            $(document).on('mousemove', function (e) {
                delX = e.clientX - startX;
                if (Math.abs(delX) > 5) isBlocked = true;
                if ((slideNow === 1 && delX > 0) || (slideNow === numSlide && delX < 0)) {
                    delX = delX / 10;
                }
                $('div.image-slide.isdrag .slide').css({ 'left': (offsetX + delX) + 'px' });
            });
            $(document).on('mouseup', function () {
                $(document).off('mousemove mouseup');
                if (delX < -50 && slideNow !== numSlide) {
                    showSlide9(slideNext);
                } else if (delX > 50 && slideNow !== 1) {
                    showSlide9(slidePrev);
                } else {
                    showSlide9(slideNow);
                }
                delX = 0;
            });
        });
        $('div.image-slide.isdrag .slide').on('click', function (e) {
            if (isBlocked === true) {
                e.preventDefault();
                isBlocked = false;
            }
        });
        function showSlide9(n) {
            if (slideNow === 0) {
                $('div.image-slide.isdrag .slide').css({ 'transition': 'none', 'left': -((n - 1) * 100) + '%' });
            } else {
                $('div.image-slide.isdrag .slide').css({ 'transition': 'left 0.5s', 'left': -((n - 1) * 100) + '%' });
            }
            $('div.image-slide.isdrag .indicator li').removeClass('on');
            $('div.image-slide.isdrag .indicator li:eq(' + (n - 1) + ')').addClass('on');
            slideNow = n;
            slidePrev = (n === 1) ? numSlide : (n - 1);
            slideNext = (n === numSlide) ? 1 : (n + 1);
            if (isTimerOn === true) {
                clearTimeout(timerId);
                timerId = setTimeout(function () { showSlide9(slideNext); }, timerSpeed);
            }
        }
    }
    render() {
        return (
            <div>
                <p class="test-button">
                    <button id="test1">테스트 버튼 1</button>
                    <button id="test2">테스트 버튼 2</button>
                    <button id="test3">테스트 버튼 3</button>
                    <button id="test4">테스트 버튼 4</button>
                </p>
                <div class="image-slide isdrag" id="isdrag1">
                    <div class="box">
                        <p class="dummy"><img alt="" src={Img1} /></p>
                        <ul class="slide">
                            <li><img alt="000000" src={Img1} /></li>
                            <li><img alt="000000" src={Img2} /></li>
                            <li><img alt="000000" src={Img3} /></li>
                            <li><img alt="000000" src={Img4} /></li>
                            <li><img alt="000000" src={Img5} /></li>
                            <li><img alt="000000" src={Img6} /></li>
                            <li><img alt="000000" src={Img7} /></li>
                        </ul>
                    </div>
                    <ul class="indicator">
                    </ul>
                    <p class="control">
                        <button class="prev"><img alt="이전" src={ImgBtnLeft} /></button>
                        <button class="next"><img alt="다음" src={ImgBtnRight} /></button>
                        <button class="play">
                            <i class="fas fa-play fa-fw"><span>타이머 시작</span></i>
                            <i class="fas fa-pause fa-fw"><span>타이머 정지</span></i>
                        </button>
                    </p>
                </div>

            </div>
        )
    }
}
class IS_10compo extends Component {
    componentDidMount() {
        var slide1 = new ImageSlide('isfinal1');
        var slide2 = new ImageSlide('isfinal2', {
            slideFirst: 5
        });
        var slide3 = new ImageSlideInfinite('isfinal3', {
            slideFirst: 4,
            isTimerOn: true,
            timerSpeed: 2000
        });

        function ImageSlide(id, options) {
            var $selector = $('#' + id);
            var numSlide = $selector.find('.slide li').length;
            var slideNow = 0;
            var slidePrev = 0;
            var slideNext = 0;
            var slideFirst = (options === undefined || options.slideFirst === undefined) ? 1 : options.slideFirst;
            var timerId = '';
            var isTimerOn = (options === undefined || options.isTimerOn === undefined) ? false : options.isTimerOn;
            var timerSpeed = (options === undefined || options.timerSpeed === undefined) ? 3000 : options.timerSpeed;
            var startX = 0;
            var startY = 0;
            var delX = 0;
            var delY = 0;
            var offsetX = 0;
            var isBlocked = false;
            var direction = '';

            setInitialStatus();
            setEvent();
            setSwipe();

            function setInitialStatus() {
                $selector.find('.slide li').each(function (i) {
                    $(this).css({ 'left': (i * 100) + '%', 'display': 'block' });
                    $selector.find('.indicator').append('<li><button>' + (i + 1) + '번 슬라이드</button></li>\n');
                });
                if (isTimerOn === true) {
                    $selector.find('button.play').addClass('on');
                } else {
                    $selector.find('button.play').removeClass('on');
                }
                showSlideFinal(slideFirst);
            }

            function setEvent() {
                $selector.find('.indicator li button').on('click', function () {
                    var index = $selector.find('.indicator li').index($(this).parent());
                    showSlideFinal(index + 1);
                });

                $selector.find('button.prev').on('click', function () {
                    $(this).find('img').stop(true).animate({ 'left': '-10px' }, 80).animate({ 'left': 0 }, 160);
                    showSlideFinal(slidePrev);
                });

                $selector.find('button.next').on('click', function () {
                    $(this).find('img').stop(true).animate({ 'right': '-10px' }, 80).animate({ 'right': 0 }, 160);
                    showSlideFinal(slideNext);
                });

                $selector.find('button.play').on('click', function () {
                    if (isTimerOn === true) {
                        stopTimer();
                    } else {
                        startTimer();
                    }
                });
            }
            function setSwipe() {
                $selector.find('.slide').on('mousedown touchstart', function (e) {
                    $(this).css({ 'transition': 'none' });
                    clearTimeout(timerId);
                    if (!e.touches) e.preventDefault();
                    startX = (e.touches) ? e.touches[0].clientX : e.clientX;
                    startY = (e.touches) ? e.touches[0].clientY : e.clientY;
                    offsetX = $(this).position().left;

                    document.addEventListener('mousemove', move, { passive: false });
                    document.addEventListener('touchmove', move, { passive: false });

                    $(document).on('mouseup touchend', function () {
                        document.removeEventListener('mousemove', move);
                        document.removeEventListener('touchmove', move);
                        $(document).off('mouseup touchend');
                        if (delX < -50 && slideNow !== numSlide) {
                            showSlideFinal(slideNext);
                        } else if (delX > 50 && slideNow !== 1) {
                            showSlideFinal(slidePrev);
                        } else {
                            showSlideFinal(slideNow);
                        }
                        delX = 0;
                        direction = '';
                    });
                }).on('click', function (e) {
                    if (isBlocked === true) {
                        e.preventDefault();
                        isBlocked = false;
                    }
                });

                function move(e) {
                    delX = ((e.touches) ? e.touches[0].clientX : e.clientX) - startX;
                    delY = ((e.touches) ? e.touches[0].clientX : e.clientY) - startY;
                    if (direction === '') {
                        if (Math.abs(delX) > 5) {
                            direction = 'horizon';
                            isBlocked = true;
                        } else if (Math.abs(delY) > 5) {
                            direction = 'vertical';
                            isBlocked = true;
                        }
                    } else if (direction === 'horizon') {
                        e.preventDefault();
                        if ((slideNow === 1 && delX > 0) || (slideNow === numSlide && delX < 0)) {
                            delX = delX / 10;
                        }
                        $selector.find('.slide').css({ 'left': (offsetX + delX) + 'px' });
                    } else if (direction === 'vertical') {
                        delX = 0;
                    }
                }
            }

            function removeEvent() {
                $selector.find('.indicator li button, button.prev, button.next, button.play').off('click');
                $selector.find('.slide').off('mousedown touchstart');
            }

            function stopTimer() {
                clearTimeout(timerId);
                $selector.find('button.play').removeClass('on');
                isTimerOn = false;
                $selector.find('span.bar').remove();
            }

            function startTimer() {
                timerId = setTimeout(function () { showSlideFinal(slideNext); }, timerSpeed);
                $selector.find('button.play').addClass('on');
                isTimerOn = true;
                $selector.append('<span class="bar on" style="animation-duration: ' + timerSpeed + 'ms"></span>');
            }

            function restartTimer() {
                clearTimeout(timerId);
                $selector.find('span.bar').remove();
                timerId = setTimeout(function () { showSlideFinal(slideNext); }, timerSpeed);
                $selector.append('<span class="bar on" style="animation-duration: ' + timerSpeed + 'ms"></span>');
            }

            function showSlideFinal(n) {
                if (slideNow === 0) {
                    $selector.find('.slide').css({ 'transition': 'none', 'left': -((n - 1) * 100) + '%' });
                } else {
                    $selector.find('.slide').css({ 'transition': 'left 0.5s', 'left': -((n - 1) * 100) + '%' });
                }
                $selector.find('.indicator li').removeClass('on');
                $selector.find('.indicator li:eq(' + (n - 1) + ')').addClass('on');
                slideNow = n;
                slidePrev = (n === 1) ? numSlide : (n - 1);
                slideNext = (n === numSlide) ? 1 : (n + 1);
                if (isTimerOn === true) restartTimer();
            }


            // 외부 접근용 기능
            this.showPrev = function () {
                showSlideFinal(slidePrev);
            }
            this.showNext = function () {
                showSlideFinal(slideNext);
            }
            this.showSlideFinal = function (n) {
                showSlideFinal(n);
            }
            this.stopTimer = function () {
                stopTimer();
            }
            this.startTimer = function () {
                startTimer();
            }
            this.getSlideNow = function () {
                return slideNow;
            }
        }
        function ImageSlideInfinite(id, options) {
            var $selector = $('#' + id);
            var numSlide = $selector.find('.slide li').length;
            var slideNow = 0;
            var slidePrev = 0;
            var slideNext = 0;
            var slideFirst = (options === undefined || options.slideFirst === undefined) ? 1 : options.slideFirst;
            var timerId = '';
            var isTimerOn = (options === undefined || options.isTimerOn === undefined) ? false : options.isTimerOn;
            var timerSpeed = (options === undefined || options.timerSpeed === undefined) ? 3000 : options.timerSpeed;
            var startX = 0;
            var startY = 0;
            var delX = 0;
            var delY = 0;
            var offsetX = 0;
            var isBlocked = false;
            var direction = '';
            var onAnimation = false;

            setInitialStatus();
            setEvent();
            setSwipe();

            function setInitialStatus() {
                $selector.find('.slide li').each(function (i) {
                    // $(this).css({'left': (i * 100) + '%', 'display': 'block'});
                    $selector.find('.indicator').append('<li><button>' + (i + 1) + '번 슬라이드</button></li>\n');
                });
                if (isTimerOn === true) {
                    $selector.find('button.play').addClass('on');
                } else {
                    $selector.find('button.play').removeClass('on');
                }
                setSlide(slideFirst);
            }

            function setEvent() {
                $selector.find('.indicator li button').on('click', function () {
                    var index = $selector.find('.indicator li').index($(this).parent());
                    setSlide(index + 1);
                });

                $selector.find('button.prev').on('click', function () {
                    $(this).find('img').stop(true).animate({ 'left': '-10px' }, 80).animate({ 'left': 0 }, 160);
                    showPrev();
                });

                $selector.find('button.next').on('click', function () {
                    $(this).find('img').stop(true).animate({ 'right': '-10px' }, 80).animate({ 'right': 0 }, 160);
                    showNext();
                });

                $selector.find('button.play').on('click', function () {
                    if (isTimerOn === true) {
                        stopTimer();
                    } else {
                        startTimer();
                    }
                });
            }

            function setSwipe() {
                $selector.find('.slide').on('mousedown touchstart', function (e) {
                    $(this).trigger('transitionend');
                    $(this).css({ 'transition': 'none' });
                    clearTimeout(timerId);
                    if (!e.touches) e.preventDefault();
                    startX = (e.touches) ? e.touches[0].clientX : e.clientX;
                    startY = (e.touches) ? e.touches[0].clientY : e.clientY;
                    offsetX = $(this).position().left;

                    document.addEventListener('mousemove', move, { passive: false });
                    document.addEventListener('touchmove', move, { passive: false });

                    $(document).on('mouseup touchend', function () {
                        document.removeEventListener('mousemove', move);
                        document.removeEventListener('touchmove', move);
                        $(document).off('mouseup touchend');
                        if (delX < -50) {
                            showNext();
                        } else if (delX > 50) {
                            showPrev();
                        } else {
                            showNow();
                        }
                        delX = 0;
                        direction = '';
                    });
                }).on('click', function (e) {
                    if (isBlocked === true) {
                        e.preventDefault();
                        isBlocked = false;
                    }
                });

                function move(e) {
                    delX = ((e.touches) ? e.touches[0].clientX : e.clientX) - startX;
                    delY = ((e.touches) ? e.touches[0].clientX : e.clientY) - startY;
                    if (direction === '') {
                        if (Math.abs(delX) > 5) {
                            direction = 'horizon';
                            isBlocked = true;
                        } else if (Math.abs(delY) > 5) {
                            direction = 'vertical';
                            isBlocked = true;
                        }
                    } else if (direction === 'horizon') {
                        e.preventDefault();
                        $selector.find('.slide').css({ 'left': (offsetX + delX) + 'px' });
                    } else if (direction === 'vertical') {
                        delX = 0;
                    }
                }
            }

            function removeEvent() {
                $selector.find('.indicator li button, button.prev, button.next, button.play').off('click');
                $selector.find('.slide').off('mousedown touchstart');
            }

            function stopTimer() {
                clearTimeout(timerId);
                $selector.find('button.play').removeClass('on');
                isTimerOn = false;
                $selector.find('span.bar').remove();
            }

            function startTimer() {
                timerId = setTimeout(function () { setSlide(slideNext); }, timerSpeed);
                $selector.find('button.play').addClass('on');
                isTimerOn = true;
                $selector.append('<span class="bar on" style="animation-duration: ' + timerSpeed + 'ms"></span>');
            }

            function restartTimer() {
                clearTimeout(timerId);
                $selector.find('span.bar').remove();
                timerId = setTimeout(function () { setSlide(slideNext); }, timerSpeed);
                $selector.append('<span class="bar on" style="animation-duration: ' + timerSpeed + 'ms"></span>');
            }

            function showPrev() {
                $selector.find('.slide').css({ 'transition': 'left 0.5s', 'left': '100%' }).one('transitionend', function () {
                    setSlide(slidePrev);
                });
            }

            function showNext() {
                $selector.find('.slide').css({ 'transition': 'left 0.5s', 'left': '-100%' }).one('transitionend', function () {
                    setSlide(slideNext);
                });
            }

            function showNow() {
                $selector.find('.slide').css({ 'transition': 'left 0.5s', 'left': 0 }).one('transitionend', function () {
                    setSlide(slideNow);
                });
            }

            function setSlide(n) {
                slideNow = n;
                slidePrev = (n === 1) ? numSlide : (n - 1);
                slideNext = (n === numSlide) ? 1 : (n + 1);
                $selector.find('.slide li').css({ 'display': 'none', 'transition': 'none' });
                $selector.find('.slide').css({ 'transition': 'none', 'left': 0 });
                $selector.find('.slide li:eq(' + (slidePrev - 1) + ')').css({ 'display': 'block', 'left': '-100%' });
                $selector.find('.slide li:eq(' + (slideNow - 1) + ')').css({ 'display': 'block', 'left': 0 });
                $selector.find('.slide li:eq(' + (slideNext - 1) + ')').css({ 'display': 'block', 'left': '100%' });
                $selector.find('.indicator li').removeClass('on');
                $selector.find('.indicator li:eq(' + (slideNow - 1) + ')').addClass('on');
            }
            // 외부 접근용 기능
            this.showPrev = function () {
                setSlide(slidePrev);
            }
            this.showNext = function () {
                setSlide(slideNext);
            }
            this.setSlide = function (n) {
                setSlide(n);
            }
            this.stopTimer = function () {
                stopTimer();
            }
            this.startTimer = function () {
                startTimer();
            }
            this.getSlideNow = function () {
                return slideNow;
            }
        }
    }
    render() {
        return (
            <div>
                <p class="test-button">
                    <button id="test1">테스트 버튼 1</button>
                    <button id="test2">테스트 버튼 2</button>
                    <button id="test3">테스트 버튼 3</button>
                    <button id="test4">테스트 버튼 4</button>
                </p>
                <div class="image-slide isfinal" id="isfinal1">
                    <div class="box">
                        <p class="dummy"><img alt="" src={Img1} /></p>
                        <ul class="slide">
                            <li><img alt="000000" src={Img1} /></li>
                            <li><img alt="000000" src={Img2} /></li>
                            <li><img alt="000000" src={Img3} /></li>
                            <li><img alt="000000" src={Img4} /></li>
                            <li><img alt="000000" src={Img5} /></li>
                            <li><img alt="000000" src={Img6} /></li>
                            <li><img alt="000000" src={Img7} /></li>
                        </ul>
                    </div>
                    <ul class="indicator">
                    </ul>
                    <p class="control">
                        <button class="prev"><img alt="이전" src={ImgBtnLeft} /></button>
                        <button class="next"><img alt="다음" src={ImgBtnRight} /></button>
                        <button class="play">
                            <i class="fas fa-play fa-fw"><span>타이머 시작</span></i>
                            <i class="fas fa-pause fa-fw"><span>타이머 정지</span></i>
                        </button>
                    </p>
                </div>
                <div class="image-slide isfinal" id="isfinal2">
                    <div class="box">
                        <p class="dummy"><img alt="" src={Img1} /></p>
                        <ul class="slide">
                            <li><img alt="000000" src={Img1} /></li>
                            <li><img alt="000000" src={Img2} /></li>
                            <li><img alt="000000" src={Img3} /></li>
                            <li><img alt="000000" src={Img4} /></li>
                            <li><img alt="000000" src={Img5} /></li>
                            <li><img alt="000000" src={Img6} /></li>
                            <li><img alt="000000" src={Img7} /></li>
                        </ul>
                    </div>
                    <ul class="indicator">
                    </ul>
                    <p class="control">
                        <button class="prev"><img alt="이전" src={ImgBtnLeft} /></button>
                        <button class="next"><img alt="다음" src={ImgBtnRight} /></button>
                        <button class="play">
                            <i class="fas fa-play fa-fw"><span>타이머 시작</span></i>
                            <i class="fas fa-pause fa-fw"><span>타이머 정지</span></i>
                        </button>
                    </p>
                </div>
                <div class="image-slide isfinal" id="isfinal3">
                    <div class="box">
                        <p class="dummy"><img alt="" src={Img1} /></p>
                        <ul class="slide">
                            <li><img alt="000000" src={Img1} /></li>
                            <li><img alt="000000" src={Img2} /></li>
                            <li><img alt="000000" src={Img3} /></li>
                            <li><img alt="000000" src={Img4} /></li>
                            <li><img alt="000000" src={Img5} /></li>
                            <li><img alt="000000" src={Img6} /></li>
                            <li><img alt="000000" src={Img7} /></li>
                        </ul>
                    </div>
                    <ul class="indicator">
                    </ul>
                    <p class="control">
                        <button class="prev"><img alt="이전" src={ImgBtnLeft} /></button>
                        <button class="next"><img alt="다음" src={ImgBtnRight} /></button>
                        <button class="play">
                            <i class="fas fa-play fa-fw"><span>타이머 시작</span></i>
                            <i class="fas fa-pause fa-fw"><span>타이머 정지</span></i>
                        </button>
                    </p>
                </div>
            </div>
        )
    }
}
export default Image_Slide;