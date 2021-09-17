// import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
// import '../../../fa/css/all.min.css'
// import Img1 from '../../../img/image-slide/slide-image-01.jpg';
// import Img2 from '../../../img/image-slide/slide-image-02.jpg';
// import Img3 from '../../../img/image-slide/slide-image-03.jpg';
// import Img4 from '../../../img/image-slide/slide-image-04.jpg';
// import Img5 from '../../../img/image-slide/slide-image-05.jpg';
// import Img6 from '../../../img/image-slide/slide-image-06.jpg';
// import Img7 from '../../../img/image-slide/slide-image-07.jpg';
// import ImgBtnLeft from '../../../img/image-slide/btn-left.png';
// import ImgBtnRight from '../../../img/image-slide/btn-right.png';
// // import jQuery from 'jquery';
// import $ from 'jquery'


// class Image_Slide extends Component {
//     render() {
//         var _props = this.props;
//         var _set = [];
//         var funcSet = [IS1(), IS2(), IS3(), IS4(), IS5(), IS6(),]
//         function show() {
//             for (let i = 0; i < _props.data.listLength[_props.match]; i++) {
//                 _set.push(
//                     <Route path={"/react-pages/UIPage/" + _props.data.KnN.data[0] + "_" + (i + 1)}>
//                         <div>{funcSet[i]}</div>
//                     </Route>
//                 );
//             }
//             return (<div>{_set}</div>)
//         }
//         return show();
//     }
// }
// const IS1 = () => {
//     return (
//         <IS1compo></IS1compo>
//     );
// }
// const IS2 = () => {
//     return (
//         <IS2compo></IS2compo>
//     );
// }
// const IS3 = () => {
//     return (
//         <IS3compo></IS3compo>
//     )
// }
// const IS4 = () => {
//     return (
//         <IS4compo></IS4compo>
//     )
// }
// const IS5 = () => {
//     return (
//         <IS5compo></IS5compo>
//     )
// }
// const IS6 = () => {
//     return (
//         <IS6compo></IS6compo>
//     )
// }
// class IS1compo extends Component {
//     componentDidMount() {
//         var numSlide = $('div.image-slide.is1 .slide li').length;
//         var slideNow = 0;
//         var slidePrev = 0;
//         var slideNext = 0;
//         var slideFirst = 3;
//         var timerId = '';
//         var isTimerOn = false;
//         var timerSpeed = 2000;
//         const showSlideIS1 = (n) => {
//             if (slideNow === 0) {
//                 $('div.image-slide.is1 .slide').css({ 'transition': 'none', 'left': -((n - 1) * 100) + '%' });
//             } else {
//                 $('div.image-slide.is1 .slide').css({ 'transition': 'left 0.5s', 'left': -((n - 1) * 100) + '%' });
//             }
//             $('div.image-slide.is1 .indicator li').removeClass('on');
//             $('div.image-slide.is1 .indicator li:eq(' + (n - 1) + ')').addClass('on');
//             slideNow = n;
//             slidePrev = (n === 1) ? numSlide : (n - 1);
//             slideNext = (n === numSlide) ? 1 : (n + 1);
//             if (isTimerOn === true) {
//                 clearTimeout(timerId);
//                 timerId = setTimeout(() => { showSlideIS1(slideNext); }, timerSpeed);
//             }
//         }
//         $('div.image-slide.is1 .slide li').each(function (i) {
//             $(this).css({ 'left': (i * 100) + '%', 'display': 'block' });
//             $('div.image-slide.is1 .indicator').append('<li><button>' + (i + 1) + '번 슬라이드</button></li>\n');
//         });
//         if (isTimerOn === true) {
//             $('div.image-slide.is1 button.play').addClass('on');
//         } else {
//             $('div.image-slide.is1 button.play').removeClass('on');
//         }
//         showSlideIS1(slideFirst);
//         $('div.image-slide.is1 .indicator li button').each(function (i) {
//             $(this).on('click', () => {
//                 showSlideIS1(($(this).parent().index()) + 1);
//             });
//         });
//         $('div.image-slide.is1 button.prev').on('click', () => {
//             $(this).find('img').stop(true).animate({ 'left': '-10px' }, 80).animate({ 'left': 0 }, 160);
//             showSlideIS1(slidePrev);
//         });
//         $('div.image-slide.is1 button.next').on('click', () => {
//             $(this).find('img').stop(true).animate({ 'right': '-10px' }, 80).animate({ 'right': 0 }, 160);
//             showSlideIS1(slideNext);
//         });
//         $('div.image-slide.is1 button.play').on('click', () => {
//             if (isTimerOn === true) {
//                 clearTimeout(timerId);
//                 $(this).removeClass('on');
//                 isTimerOn = false;
//             } else {
//                 timerId = setTimeout(() => { showSlideIS1(slideNext); }, timerSpeed);
//                 $(this).addClass('on');
//                 isTimerOn = true;
//             }
//         });

//     }
//     render() {
//         return (
//             <div className="image-slide is1">
//                 <div className="box">
//                     <p className="dummy"><img alt="" src={Img1} /></p>
//                     <ul className="slide">
//                         <li><button><img alt="000000" src={Img1} /></button></li>
//                         <li><button><img alt="000000" src={Img2} /></button></li>
//                         <li><button><img alt="000000" src={Img3} /></button></li>
//                         <li><button><img alt="000000" src={Img4} /></button></li>
//                         <li><button><img alt="000000" src={Img5} /></button></li>
//                         <li><button><img alt="000000" src={Img6} /></button></li>
//                         <li><button><img alt="000000" src={Img7} /></button></li>
//                     </ul>
//                 </div>
//                 <ul className="indicator">
//                 </ul>
//                 <p className="control">
//                     <button className="prev"><img alt="이전" src={ImgBtnLeft} /></button>
//                     <button className="next"><img alt="다음" src={ImgBtnRight} /></button>
//                     <button className="play">
//                         <i className="fas fa-play fa-fw"><span>타이머 시작</span></i>
//                         <i className="fas fa-pause fa-fw"><span>타이머 정지</span></i>
//                     </button>
//                 </p>
//             </div>
//         )
//     }
// }
// class IS2compo extends Component {
//     componentDidMount() {
//         setImageSlide('div.image-slide.is6:eq(0)', 1, true, 2000);
//         setImageSlide('div.image-slide.is6:eq(1)', 3, false, 3000);
//         setImageSlide('div.image-slide.is6:eq(2)', 5, true, 1000);
//         function setImageSlide(selector, first, status, speed) {
//             var $selector = $(selector);
//             var numSlide = $selector.find('.slide li').length;
//             var slideNow = 0;
//             var slidePrev = 0;
//             var slideNext = 0;
//             var slideFirst = first;
//             var timerId = '';
//             var isTimerOn = status;
//             var timerSpeed = speed;

//             $selector.find('.slide li').each(function (i) {
//                 $(this).css({ 'left': (i * 100) + '%', 'display': 'block' });
//                 $selector.find('.indicator').append('<li><button>' + (i + 1) + '번 슬라이드</button></li>\n');
//             });
//             if (isTimerOn === true) {
//                 $selector.find('button.play').addClass('on');
//             } else {
//                 $selector.find('button.play').removeClass('on');
//             }
//             showSlide6(slideFirst);
//             $selector.find('.indicator li button').on('click', () => {
//                 var index = $selector.find('.indicator li').index($(this).parent());
//                 showSlide6(index + 1);
//             });
//             $selector.find('button.prev').on('click', () => {
//                 $(this).find('img').stop(true).animate({ 'left': '-10px' }, 80).animate({ 'left': 0 }, 160);
//                 showSlide6(slidePrev);
//             });
//             $selector.find('button.next').on('click', () => {
//                 $(this).find('img').stop(true).animate({ 'right': '-10px' }, 80).animate({ 'right': 0 }, 160);
//                 showSlide6(slideNext);
//             });
//             $selector.find('button.play').on('click', () => {
//                 if (isTimerOn === true) {
//                     clearTimeout(timerId);
//                     $(this).removeClass('on');
//                     isTimerOn = false;
//                 } else {
//                     timerId = setTimeout(() => { showSlide6(slideNext); }, timerSpeed);
//                     $(this).addClass('on');
//                     isTimerOn = true;
//                 }
//             });
//             function showSlide6(n) {
//                 if (slideNow === 0) {
//                     $selector.find('.slide').css({ 'transition': 'none', 'left': -((n - 1) * 100) + '%' });
//                 } else {
//                     $selector.find('.slide').css({ 'transition': 'left 0.5s', 'left': -((n - 1) * 100) + '%' });
//                 }
//                 $selector.find('.indicator li').removeClass('on');
//                 $selector.find('.indicator li:eq(' + (n - 1) + ')').addClass('on');
//                 slideNow = n;
//                 slidePrev = (n === 1) ? numSlide : (n - 1);
//                 slideNext = (n === numSlide) ? 1 : (n + 1);
//                 if (isTimerOn === true) {
//                     clearTimeout(timerId);
//                     timerId = setTimeout(() => { showSlide6(slideNext); }, timerSpeed);
//                 }
//             }
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <div className="image-slide is6">
//                     <div className="box">
//                         <p className="dummy"><img alt="" src={Img1} /></p>
//                         <ul className="slide">
//                             <li><img alt="000000" src={Img1} /></li>
//                             <li><img alt="000000" src={Img2} /></li>
//                             <li><img alt="000000" src={Img3} /></li>
//                             <li><img alt="000000" src={Img4} /></li>
//                             <li><img alt="000000" src={Img5} /></li>
//                             <li><img alt="000000" src={Img6} /></li>
//                             <li><img alt="000000" src={Img7} /></li>
//                         </ul>
//                     </div>
//                     <ul className="indicator">
//                     </ul>
//                     <p className="control">
//                         <button className="prev"><img alt="이전" src={ImgBtnLeft} /></button>
//                         <button className="next"><img alt="다음" src={ImgBtnRight} /></button>
//                         <button className="play">
//                             <i className="fas fa-play fa-fw"><span>타이머 시작</span></i>
//                             <i className="fas fa-pause fa-fw"><span>타이머 정지</span></i>
//                         </button>
//                     </p>
//                 </div>
//                 <div className="image-slide is6">
//                     <div className="box">
//                         <p className="dummy"><img alt="" src={Img1} /></p>
//                         <ul className="slide">
//                             <li><img alt="000000" src={Img1} /></li>
//                             <li><img alt="000000" src={Img2} /></li>
//                             <li><img alt="000000" src={Img3} /></li>
//                             <li><img alt="000000" src={Img4} /></li>
//                             <li><img alt="000000" src={Img5} /></li>
//                             <li><img alt="000000" src={Img6} /></li>
//                             <li><img alt="000000" src={Img7} /></li>
//                         </ul>
//                     </div>
//                     <ul className="indicator">
//                     </ul>
//                     <p className="control">
//                         <button className="prev"><img alt="이전" src={ImgBtnLeft} /></button>
//                         <button className="next"><img alt="다음" src={ImgBtnRight} /></button>
//                         <button className="play">
//                             <i className="fas fa-play fa-fw"><span>타이머 시작</span></i>
//                             <i className="fas fa-pause fa-fw"><span>타이머 정지</span></i>
//                         </button>
//                     </p>
//                 </div>
//                 <div className="image-slide is6">
//                     <div className="box">
//                         <p className="dummy"><img alt="" src={Img1} /></p>
//                         <ul className="slide">
//                             <li><img alt="000000" src={Img1} /></li>
//                             <li><img alt="000000" src={Img2} /></li>
//                             <li><img alt="000000" src={Img3} /></li>
//                             <li><img alt="000000" src={Img4} /></li>
//                             <li><img alt="000000" src={Img5} /></li>
//                             <li><img alt="000000" src={Img6} /></li>
//                             <li><img alt="000000" src={Img7} /></li>
//                         </ul>
//                     </div>
//                     <ul className="indicator">
//                     </ul>
//                     <p className="control">
//                         <button className="prev"><img alt="이전" src={ImgBtnLeft} /></button>
//                         <button className="next"><img alt="다음" src={ImgBtnRight} /></button>
//                         <button className="play">
//                             <i className="fas fa-play fa-fw"><span>타이머 시작</span></i>
//                             <i className="fas fa-pause fa-fw"><span>타이머 정지</span></i>
//                         </button>
//                     </p>
//                 </div>
//             </div>
//         )
//     }
// }
// class IS3compo extends Component {
//     // constructor(props) {
//     //     super(props)
//     //     this.ImageSlide = this.ImageSlide.bind(this);
//     // }
//     componentDidMount() {
//         var slide1 = new ImageSlide('is7');

//         function ImageSlide(id, options) {
//             var $selector = $('.' + id);
//             var numSlide = $selector.find('.slide li').length;
//             var slideNow = 0;
//             var slidePrev = 0;
//             var slideNext = 0;
//             var slideFirst = (options === undefined || options.firstSlide === undefined) ? 1 : options.firstSlide;
//             var timerId = '';
//             var isTimerOn = (options === undefined || options.timerStatus === undefined) ? false : options.timerStatus;
//             var timerSpeed = (options === undefined || options.timerSpeed === undefined) ? 3000 : options.timerSpeed;


//             var showSlide7 = n => {
//                 if (slideNow === 0) {
//                     $selector.find('.slide').css({ 'transition': 'none', 'left': -((n - 1) * 100) + '%' });
//                 } else {
//                     $selector.find('.slide').css({ 'transition': 'left 0.5s', 'left': -((n - 1) * 100) + '%' });
//                 }
//                 $selector.find('.indicator li').removeClass('on');
//                 $selector.find('.indicator li:eq(' + (n - 1) + ')').addClass('on');
//                 slideNow = n;
//                 slidePrev = (n === 1) ? numSlide : (n - 1);
//                 slideNext = (n === numSlide) ? 1 : (n + 1);
//                 if (isTimerOn === true) {
//                     clearTimeout(timerId);
//                     timerId = setTimeout(() => { showSlide7(slideNext); }, timerSpeed);
//                 }
//             }

//             $selector.find('.slide li').each(function (i) {
//                 $(this).css({ 'left': (i * 100) + '%', 'display': 'block' });
//                 $selector.find('.indicator').append('<li><button>' + (i + 1) + '번 슬라이드</button></li>\n');
//             });
//             if (isTimerOn === true) {
//                 $selector.find('button.play').addClass('on');
//             } else {
//                 $selector.find('button.play').removeClass('on');
//             }
//             showSlide7(slideFirst);

//             $selector.find('.indicator li button').on('click', () => {
//                 var index = $selector.find('.indicator li').index($(this).parent());
//                 showSlide7(index + 1);
//             });

//             $selector.find('button.prev').on('click', () => {
//                 $(this).find('img').stop(true).animate({ 'left': '-10px' }, 80).animate({ 'left': 0 }, 160);
//                 showSlide7(slidePrev);
//             });

//             $selector.find('button.next').on('click', () => {
//                 $(this).find('img').stop(true).animate({ 'right': '-10px' }, 80).animate({ 'right': 0 }, 160);
//                 showSlide7(slideNext);
//             });

//             $selector.find('button.play').on('click', () => {
//                 if (isTimerOn === true) {
//                     clearTimeout(timerId);
//                     $(this).removeClass('on');
//                     isTimerOn = false;
//                 } else {
//                     timerId = setTimeout(() => { showSlide7(slideNext); }, timerSpeed);
//                     $(this).addClass('on');
//                     isTimerOn = true;
//                 }
//             });
//             this.showPrev = () => {
//                 showSlide7(slidePrev);
//             }
//             this.showNext = () => {
//                 showSlide7(slideNext);
//             }
//             this.showSlide = (n) => {
//                 showSlide7(n);
//             }
//             this.stopTimer = () => {
//                 clearTimeout(timerId);
//                 $selector.find('button.play').removeClass('on');
//                 isTimerOn = false;
//             }
//             this.startTimer = () => {
//                 timerId = setTimeout(() => { showSlide7(slideNext); }, timerSpeed);
//                 $selector.find('button.play').addClass('on');
//                 isTimerOn = true;
//             }
//             this.getSlideNow = () => {
//                 return slideNow;
//             }
//         }

//         // 외부에서 슬라이드 기능 접근
//         $('#test1').on('click', () => {
//             slide1.showPrev();
//         });
//         $('#test2').on('click', () => {
//             slide1.showSlide7(5);
//         });
//         $('#test3').on('click', () => {
//             slide1.showNext();
//         });
//         $('#test4').on('click', () => {
//             slide1.stopTimer();
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <p className="test-button">
//                     <button id="test1">테스트 버튼 1 이전슬라이드</button>
//                     <button id="test2">테스트 버튼 2 5번슬라이드</button>
//                     <button id="test3">테스트 버튼 3 다음슬라이드</button>
//                     <button id="test4">테스트 버튼 4 타이머정지</button>
//                 </p>
//                 <div className="image-slide is7">
//                     <div className="box">
//                         <p className="dummy"><img alt="" src={Img1} /></p>
//                         <ul className="slide">
//                             <li><img alt="000000" src={Img1} /></li>
//                             <li><img alt="000000" src={Img2} /></li>
//                             <li><img alt="000000" src={Img3} /></li>
//                             <li><img alt="000000" src={Img4} /></li>
//                             <li><img alt="000000" src={Img5} /></li>
//                             <li><img alt="000000" src={Img6} /></li>
//                             <li><img alt="000000" src={Img7} /></li>
//                         </ul>
//                     </div>
//                     <ul className="indicator">
//                     </ul>
//                     <p className="control">
//                         <button className="prev"><img alt="이전" src={ImgBtnLeft} /></button>
//                         <button className="next"><img alt="다음" src={ImgBtnRight} /></button>
//                         <button className="play">
//                             <i className="fas fa-play fa-fw"><span>타이머 시작</span></i>
//                             <i className="fas fa-pause fa-fw"><span>타이머 정지</span></i>
//                         </button>
//                     </p>
//                 </div>
//             </div>
//         )
//     }
// }
// class IS4compo extends Component {
//     componentDidMount() {
//         class ImageSlide {
//             #selector = null;
//             #numSlide = 0;
//             #slideNow = 0;
//             #slidePrev = 0;
//             #slideNext = 0;
//             #slideFirst = 0;
//             #timerId = '';
//             #isTimerOn = 0;
//             #timerSpeed = 0;

//             constructor(id, options) {
//                 var slide = this;
//                 var $selector = $('#' + id);
//                 this.#selector = $('#' + id);
//                 this.#numSlide = this.#selector.find('.slide li').length;
//                 this.#slideFirst = (options === undefined || options.slideFirst === undefined) ? 1 : options.slideFirst;
//                 this.#isTimerOn = (options === undefined || options.timerStatus === undefined) ? false : options.timerStatus;
//                 this.#timerSpeed = (options === undefined || options.timerSpeed === undefined) ? 3000 : options.timerSpeed;
//                 // 초기상태 설정
//                 this.#selector.find('.slide li').each(function (i) {
//                     $(this).css({ 'left': (i * 100) + '%', 'display': 'block' });
//                     slide.#selector.find('.indicator').append('<li><button>' + (i + 1) + '번 슬라이드</button></li>\n');
//                     // this.#selector  --> 내부에서 this는 ImageSlide 객체로 인식되지 못함(li가 this)
//                 });
//                 if (this.#isTimerOn === true) {
//                     this.#selector.find('button.play').addClass('on');
//                 } else {
//                     this.#selector.find('button.play').removeClass('on');
//                 }
//                 this.#showSlide(this.#slideFirst);
//                 this.#selector.find('.indicator li button').on('click', () => {
//                     var index = slide.#selector.find('.indicator li').index($(this).parent());
//                     slide.#showSlide(index + 1);
//                 });
//                 this.#selector.find('button.prev').on('click', () => {
//                     slide.#showSlide(slide.#slidePrev);
//                 });
//                 this.#selector.find('button.next').on('click', () => {
//                     slide.#showSlide(slide.#slideNext);
//                 });
//                 this.#selector.find('button.play').on('click', () => {
//                     if (slide.#isTimerOn === true) {
//                         slide.#stopTimer();
//                     } else {
//                         slide.#startTimer();
//                     }
//                 });
//             }
//             #stopTimer() {
//                 clearTimeout(this.#timerId);
//                 this.#selector.find('button.play').removeClass('on');
//                 this.#isTimerOn = false;
//             }
//             #startTimer() {
//                 var slide = this;
//                 this.#timerId = setTimeout(() => { slide.#showSlide(slide.#slideNext); }, slide.#timerSpeed);
//                 this.#selector.find('button.play').addClass('on');
//                 this.#isTimerOn = true;
//             }
//             #showPrev() {
//                 this.#showSlide(this.#slidePrev);
//             }
//             #showNext() {
//                 this.#showSlide(this.#slideNext);
//             }
//             #showSlide(n) {
//                 var slide = this;
//                 if (this.#slideNow === 0) {
//                     this.#selector.find('.slide').css({ 'transition': 'nont', 'left': -((n - 1) * 100) + '%' });
//                 } else {
//                     this.#selector.find('.slide').css({ 'transition': 'left 0.5s', 'left': -((n - 1) * 100) + '%' });
//                 }
//                 this.#selector.find('.indicator li').removeClass('on');
//                 this.#selector.find('.indicator li:eq(' + (n - 1) + ')').addClass('on');
//                 this.#slideNow = n;
//                 this.#slidePrev = (n === 1) ? this.#numSlide : (n - 1);
//                 this.#slideNext = (n === this.#numSlide) ? 1 : (n + 1);
//                 // console.log(this.#slidePrev + ' / ' + this.#slideNow + ' / ' + this.#slideNext);
//                 if (this.#isTimerOn === true) {
//                     clearTimeout(this.#timerId);
//                     this.#timerId = setTimeout(() => { slide.#showSlide(slide.#slideNext); }, this.#timerSpeed);
//                 }
//             }
//             showPrev() {
//                 this.#showPrev();
//             }
//             showNext() {
//                 this.#showNext();
//             }
//             toggleTimer() {
//                 if (this.#isTimerOn === true) {
//                     this.#stopTimer();
//                 } else {
//                     this.#startTimer();
//                 }
//             }
//             showSlide(n) {
//                 this.#showSlide(n);
//             }
//         }
//         var slide1 = new ImageSlide('is8_1', {
//             slideFirst: 4,
//             timerSpeed: 2000
//         });
//         var slide2 = new ImageSlide('is8_2', {
//             slideFirst: 2,
//             timerStatus: false,
//             timerSpeed: 1000
//         });
//         // 외부에서 슬라이드 기능 접근
//         $('#test1').on('click', () => {
//             slide1.showPrev();
//         });
//         $('#test2').on('click', () => {
//             slide1.showSlide(5);
//         });
//         $('#test3').on('click', () => {
//             slide1.showNext();
//         });
//         $('#test4').on('click', () => {
//             slide1.toggleTimer();
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <p className="test-button">
//                     <button id="test1">테스트 버튼 1 이전슬라이드</button>
//                     <button id="test2">테스트 버튼 2 5번슬라이드</button>
//                     <button id="test3">테스트 버튼 3 다음슬라이드</button>
//                     <button id="test4">테스트 버튼 4 토글타이머</button>
//                 </p>
//                 <div>
//                     <div className="image-slide is8" id="is8_1">
//                         <div className="box">
//                             <p className="dummy"><img alt="" src={Img1} /></p>
//                             <ul className="slide">
//                                 <li><img alt="000000" src={Img1} /></li>
//                                 <li><img alt="000000" src={Img2} /></li>
//                                 <li><img alt="000000" src={Img3} /></li>
//                                 <li><img alt="000000" src={Img4} /></li>
//                                 <li><img alt="000000" src={Img5} /></li>
//                                 <li><img alt="000000" src={Img6} /></li>
//                                 <li><img alt="000000" src={Img7} /></li>
//                             </ul>
//                         </div>
//                         <ul className="indicator">
//                         </ul>
//                         <p className="control">
//                             <button className="prev"><img alt="이전" src={ImgBtnLeft} /></button>
//                             <button className="next"><img alt="다음" src={ImgBtnRight} /></button>
//                             <button className="play">
//                                 <i className="fas fa-play fa-fw"><span>타이머 시작</span></i>
//                                 <i className="fas fa-pause fa-fw"><span>타이머 정지</span></i>
//                             </button>
//                         </p>
//                     </div>
//                 </div>
//                 <div>
//                     <div className="image-slide is8" id="is8_2">
//                         <div className="box">
//                             <p className="dummy"><img alt="" src={Img1} /></p>
//                             <ul className="slide">
//                                 <li><img alt="000000" src={Img1} /></li>
//                                 <li><img alt="000000" src={Img2} /></li>
//                                 <li><img alt="000000" src={Img3} /></li>
//                                 <li><img alt="000000" src={Img4} /></li>
//                                 <li><img alt="000000" src={Img5} /></li>
//                                 <li><img alt="000000" src={Img6} /></li>
//                                 <li><img alt="000000" src={Img7} /></li>
//                             </ul>
//                         </div>
//                         <ul className="indicator">
//                         </ul>
//                         <p className="control">
//                             <button className="prev"><img alt="이전" src={ImgBtnLeft} /></button>
//                             <button className="next"><img alt="다음" src={ImgBtnRight} /></button>
//                             <button className="play">
//                                 <i className="fas fa-play fa-fw"><span>타이머 시작</span></i>
//                                 <i className="fas fa-pause fa-fw"><span>타이머 정지</span></i>
//                             </button>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// class IS5compo extends Component {
//     componentDidMount() {
//         var numSlide = $('div.image-slide .slide li').length;
//         var slideNow = 0;
//         var slidePrev = 0;
//         var slideNext = 0;
//         var slideFirst = 3;
//         var timerId = '';
//         var isTimerOn = false;
//         var timerSpeed = 2000;
//         var startX = 0;
//         var delX = 0;
//         var offsetX = 0;
//         var isBlocked = false;
//         $('div.image-slide.isdrag .slide li').each(function (i) {
//             $(this).css({ 'left': (i * 100) + '%', 'display': 'block' });
//             $('div.image-slide.isdrag .indicator').append('<li><button>' + (i + 1) + '번 슬라이드</button></li>\n');
//         });
//         if (isTimerOn === true) {
//             $('div.image-slide.isdrag button.play').addClass('on');
//         } else {
//             $('div.image-slide.isdrag button.play').removeClass('on');
//         }
//         showSlide9(slideFirst);

//         $('div.image-slide.isdrag .indicator li button').on('click', () => {
//             var index = $('div.image-slide.isdrag .indicator li').index($(this).parent());
//             showSlide9(index + 1);
//         });

//         $('div.image-slide.isdrag button.prev').on('click', () => {
//             $(this).find('img').stop(true).animate({ 'left': '-10px' }, 80).animate({ 'left': 0 }, 160);
//             showSlide9(slidePrev);
//         });

//         $('div.image-slide.isdrag button.next').on('click', () => {
//             $(this).find('img').stop(true).animate({ 'right': '-10px' }, 80).animate({ 'right': 0 }, 160);
//             showSlide9(slideNext);
//         });

//         $('div.image-slide.isdrag button.play').on('click', () => {
//             if (isTimerOn === true) {
//                 clearTimeout(timerId);
//                 $(this).removeClass('on');
//                 isTimerOn = false;
//             } else {
//                 timerId = setTimeout(() => { showSlide9(slideNext); }, timerSpeed);
//                 $(this).addClass('on');
//                 isTimerOn = true;
//             }
//         });

//         $('div.image-slide.isdrag .slide').on('mousedown', function (e) {
//             e.preventDefault();
//             $(this).css({ 'transition': 'none' });
//             clearTimeout(timerId);
//             startX = e.clientX;
//             offsetX = $(this).position().left;
//             $(document).on('mousemove', function (e) {
//                 delX = e.clientX - startX;
//                 if (Math.abs(delX) > 5) isBlocked = true;
//                 if ((slideNow === 1 && delX > 0) || (slideNow === numSlide && delX < 0)) {
//                     delX = delX / 10;
//                 }
//                 $('div.image-slide.isdrag .slide').css({ 'left': (offsetX + delX) + 'px' });
//             });
//             $(document).on('mouseup', () => {
//                 $(document).off('mousemove mouseup');
//                 if (delX < -50 && slideNow !== numSlide) {
//                     showSlide9(slideNext);
//                 } else if (delX > 50 && slideNow !== 1) {
//                     showSlide9(slidePrev);
//                 } else {
//                     showSlide9(slideNow);
//                 }
//                 delX = 0;
//             });
//         });
//         $('div.image-slide.isdrag .slide').on('click', function (e) {
//             if (isBlocked === true) {
//                 e.preventDefault();
//                 isBlocked = false;
//             }
//         });
//         function showSlide9(n) {
//             if (slideNow === 0) {
//                 $('div.image-slide.isdrag .slide').css({ 'transition': 'none', 'left': -((n - 1) * 100) + '%' });
//             } else {
//                 $('div.image-slide.isdrag .slide').css({ 'transition': 'left 0.5s', 'left': -((n - 1) * 100) + '%' });
//             }
//             $('div.image-slide.isdrag .indicator li').removeClass('on');
//             $('div.image-slide.isdrag .indicator li:eq(' + (n - 1) + ')').addClass('on');
//             slideNow = n;
//             slidePrev = (n === 1) ? numSlide : (n - 1);
//             slideNext = (n === numSlide) ? 1 : (n + 1);
//             if (isTimerOn === true) {
//                 clearTimeout(timerId);
//                 timerId = setTimeout(() => { showSlide9(slideNext); }, timerSpeed);
//             }
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <p className="test-button">
//                     <button id="test1">테스트 버튼 1</button>
//                     <button id="test2">테스트 버튼 2</button>
//                     <button id="test3">테스트 버튼 3</button>
//                     <button id="test4">테스트 버튼 4</button>
//                 </p>
//                 <div className="image-slide isdrag" id="isdrag1">
//                     <div className="box">
//                         <p className="dummy"><img alt="" src={Img1} /></p>
//                         <ul className="slide">
//                             <li><img alt="000000" src={Img1} /></li>
//                             <li><img alt="000000" src={Img2} /></li>
//                             <li><img alt="000000" src={Img3} /></li>
//                             <li><img alt="000000" src={Img4} /></li>
//                             <li><img alt="000000" src={Img5} /></li>
//                             <li><img alt="000000" src={Img6} /></li>
//                             <li><img alt="000000" src={Img7} /></li>
//                         </ul>
//                     </div>
//                     <ul className="indicator">
//                     </ul>
//                     <p className="control">
//                         <button className="prev"><img alt="이전" src={ImgBtnLeft} /></button>
//                         <button className="next"><img alt="다음" src={ImgBtnRight} /></button>
//                         <button className="play">
//                             <i className="fas fa-play fa-fw"><span>타이머 시작</span></i>
//                             <i className="fas fa-pause fa-fw"><span>타이머 정지</span></i>
//                         </button>
//                     </p>
//                 </div>

//             </div>
//         )
//     }
// }
// class IS6compo extends Component {
//     componentDidMount() {
//         var slide1 = new ImageSlide('isfinal1');
//         var slide2 = new ImageSlide('isfinal2', {
//             slideFirst: 5
//         });
//         var slide3 = new ImageSlideInfinite('isfinal3', {
//             slideFirst: 4,
//             isTimerOn: true,
//             timerSpeed: 2000
//         });

//         function ImageSlide(id, options) {
//             var $selector = $('#' + id);
//             var numSlide = $selector.find('.slide li').length;
//             var slideNow = 0;
//             var slidePrev = 0;
//             var slideNext = 0;
//             var slideFirst = (options === undefined || options.slideFirst === undefined) ? 1 : options.slideFirst;
//             var timerId = '';
//             var isTimerOn = (options === undefined || options.isTimerOn === undefined) ? false : options.isTimerOn;
//             var timerSpeed = (options === undefined || options.timerSpeed === undefined) ? 3000 : options.timerSpeed;
//             var startX = 0;
//             var startY = 0;
//             var delX = 0;
//             var delY = 0;
//             var offsetX = 0;
//             var isBlocked = false;
//             var direction = '';

//             setInitialStatus();
//             setEvent();
//             setSwipe();

//             function setInitialStatus() {
//                 $selector.find('.slide li').each(function (i) {
//                     $(this).css({ 'left': (i * 100) + '%', 'display': 'block' });
//                     $selector.find('.indicator').append('<li><button>' + (i + 1) + '번 슬라이드</button></li>\n');
//                 });
//                 if (isTimerOn === true) {
//                     $selector.find('button.play').addClass('on');
//                 } else {
//                     $selector.find('button.play').removeClass('on');
//                 }
//                 showSlideFinal(slideFirst);
//             }

//             function setEvent() {
//                 $selector.find('.indicator li button').on('click', () => {
//                     var index = $selector.find('.indicator li').index($(this).parent());
//                     showSlideFinal(index + 1);
//                 });

//                 $selector.find('button.prev').on('click', () => {
//                     $(this).find('img').stop(true).animate({ 'left': '-10px' }, 80).animate({ 'left': 0 }, 160);
//                     showSlideFinal(slidePrev);
//                 });

//                 $selector.find('button.next').on('click', () => {
//                     $(this).find('img').stop(true).animate({ 'right': '-10px' }, 80).animate({ 'right': 0 }, 160);
//                     showSlideFinal(slideNext);
//                 });

//                 $selector.find('button.play').on('click', () => {
//                     if (isTimerOn === true) {
//                         stopTimer();
//                     } else {
//                         startTimer();
//                     }
//                 });
//             }
//             function setSwipe() {
//                 $selector.find('.slide').on('mousedown touchstart', function (e) {
//                     $(this).css({ 'transition': 'none' });
//                     clearTimeout(timerId);
//                     if (!e.touches) e.preventDefault();
//                     startX = (e.touches) ? e.touches[0].clientX : e.clientX;
//                     startY = (e.touches) ? e.touches[0].clientY : e.clientY;
//                     offsetX = $(this).position().left;

//                     document.addEventListener('mousemove', move, { passive: false });
//                     document.addEventListener('touchmove', move, { passive: false });

//                     $(document).on('mouseup touchend', () => {
//                         document.removeEventListener('mousemove', move);
//                         document.removeEventListener('touchmove', move);
//                         $(document).off('mouseup touchend');
//                         if (delX < -50 && slideNow !== numSlide) {
//                             showSlideFinal(slideNext);
//                         } else if (delX > 50 && slideNow !== 1) {
//                             showSlideFinal(slidePrev);
//                         } else {
//                             showSlideFinal(slideNow);
//                         }
//                         delX = 0;
//                         direction = '';
//                     });
//                 }).on('click', function (e) {
//                     if (isBlocked === true) {
//                         e.preventDefault();
//                         isBlocked = false;
//                     }
//                 });

//                 function move(e) {
//                     delX = ((e.touches) ? e.touches[0].clientX : e.clientX) - startX;
//                     delY = ((e.touches) ? e.touches[0].clientX : e.clientY) - startY;
//                     if (direction === '') {
//                         if (Math.abs(delX) > 5) {
//                             direction = 'horizon';
//                             isBlocked = true;
//                         } else if (Math.abs(delY) > 5) {
//                             direction = 'vertical';
//                             isBlocked = true;
//                         }
//                     } else if (direction === 'horizon') {
//                         e.preventDefault();
//                         if ((slideNow === 1 && delX > 0) || (slideNow === numSlide && delX < 0)) {
//                             delX = delX / 10;
//                         }
//                         $selector.find('.slide').css({ 'left': (offsetX + delX) + 'px' });
//                     } else if (direction === 'vertical') {
//                         delX = 0;
//                     }
//                 }
//             }

//             function removeEvent() {
//                 $selector.find('.indicator li button, button.prev, button.next, button.play').off('click');
//                 $selector.find('.slide').off('mousedown touchstart');
//             }

//             function stopTimer() {
//                 clearTimeout(timerId);
//                 $selector.find('button.play').removeClass('on');
//                 isTimerOn = false;
//                 $selector.find('span.bar').remove();
//             }

//             function startTimer() {
//                 timerId = setTimeout(() => { showSlideFinal(slideNext); }, timerSpeed);
//                 $selector.find('button.play').addClass('on');
//                 isTimerOn = true;
//                 $selector.append('<span className="bar on" style="animation-duration: ' + timerSpeed + 'ms"></span>');
//             }

//             function restartTimer() {
//                 clearTimeout(timerId);
//                 $selector.find('span.bar').remove();
//                 timerId = setTimeout(() => { showSlideFinal(slideNext); }, timerSpeed);
//                 $selector.append('<span className="bar on" style="animation-duration: ' + timerSpeed + 'ms"></span>');
//             }

//             function showSlideFinal(n) {
//                 if (slideNow === 0) {
//                     $selector.find('.slide').css({ 'transition': 'none', 'left': -((n - 1) * 100) + '%' });
//                 } else {
//                     $selector.find('.slide').css({ 'transition': 'left 0.5s', 'left': -((n - 1) * 100) + '%' });
//                 }
//                 $selector.find('.indicator li').removeClass('on');
//                 $selector.find('.indicator li:eq(' + (n - 1) + ')').addClass('on');
//                 slideNow = n;
//                 slidePrev = (n === 1) ? numSlide : (n - 1);
//                 slideNext = (n === numSlide) ? 1 : (n + 1);
//                 if (isTimerOn === true) restartTimer();
//             }


//             // 외부 접근용 기능
//             this.showPrev = () => {
//                 showSlideFinal(slidePrev);
//             }
//             this.showNext = () => {
//                 showSlideFinal(slideNext);
//             }
//             this.showSlideFinal = function (n) {
//                 showSlideFinal(n);
//             }
//             this.stopTimer = () => {
//                 stopTimer();
//             }
//             this.startTimer = () => {
//                 startTimer();
//             }
//             this.getSlideNow = () => {
//                 return slideNow;
//             }
//         }
//         function ImageSlideInfinite(id, options) {
//             var $selector = $('#' + id);
//             var numSlide = $selector.find('.slide li').length;
//             var slideNow = 0;
//             var slidePrev = 0;
//             var slideNext = 0;
//             var slideFirst = (options === undefined || options.slideFirst === undefined) ? 1 : options.slideFirst;
//             var timerId = '';
//             var isTimerOn = (options === undefined || options.isTimerOn === undefined) ? false : options.isTimerOn;
//             var timerSpeed = (options === undefined || options.timerSpeed === undefined) ? 3000 : options.timerSpeed;
//             var startX = 0;
//             var startY = 0;
//             var delX = 0;
//             var delY = 0;
//             var offsetX = 0;
//             var isBlocked = false;
//             var direction = '';

//             setInitialStatus();
//             setEvent();
//             setSwipe();

//             function setInitialStatus() {
//                 $selector.find('.slide li').each(function (i) {
//                     // $(this).css({'left': (i * 100) + '%', 'display': 'block'});
//                     $selector.find('.indicator').append('<li><button>' + (i + 1) + '번 슬라이드</button></li>\n');
//                 });
//                 if (isTimerOn === true) {
//                     $selector.find('button.play').addClass('on');
//                 } else {
//                     $selector.find('button.play').removeClass('on');
//                 }
//                 setSlide(slideFirst);
//             }

//             function setEvent() {
//                 $selector.find('.indicator li button').on('click', () => {
//                     var index = $selector.find('.indicator li').index($(this).parent());
//                     setSlide(index + 1);
//                 });

//                 $selector.find('button.prev').on('click', () => {
//                     $(this).find('img').stop(true).animate({ 'left': '-10px' }, 80).animate({ 'left': 0 }, 160);
//                     showPrev();
//                 });

//                 $selector.find('button.next').on('click', () => {
//                     $(this).find('img').stop(true).animate({ 'right': '-10px' }, 80).animate({ 'right': 0 }, 160);
//                     showNext();
//                 });

//                 $selector.find('button.play').on('click', () => {
//                     if (isTimerOn === true) {
//                         stopTimer();
//                     } else {
//                         startTimer();
//                     }
//                 });
//             }

//             function setSwipe() {
//                 $selector.find('.slide').on('mousedown touchstart', function (e) {
//                     $(this).trigger('transitionend');
//                     $(this).css({ 'transition': 'none' });
//                     clearTimeout(timerId);
//                     if (!e.touches) e.preventDefault();
//                     startX = (e.touches) ? e.touches[0].clientX : e.clientX;
//                     startY = (e.touches) ? e.touches[0].clientY : e.clientY;
//                     offsetX = $(this).position().left;

//                     document.addEventListener('mousemove', move, { passive: false });
//                     document.addEventListener('touchmove', move, { passive: false });

//                     $(document).on('mouseup touchend', () => {
//                         document.removeEventListener('mousemove', move);
//                         document.removeEventListener('touchmove', move);
//                         $(document).off('mouseup touchend');
//                         if (delX < -50) {
//                             showNext();
//                         } else if (delX > 50) {
//                             showPrev();
//                         } else {
//                             showNow();
//                         }
//                         delX = 0;
//                         direction = '';
//                     });
//                 }).on('click', function (e) {
//                     if (isBlocked === true) {
//                         e.preventDefault();
//                         isBlocked = false;
//                     }
//                 });

//                 function move(e) {
//                     delX = ((e.touches) ? e.touches[0].clientX : e.clientX) - startX;
//                     delY = ((e.touches) ? e.touches[0].clientX : e.clientY) - startY;
//                     if (direction === '') {
//                         if (Math.abs(delX) > 5) {
//                             direction = 'horizon';
//                             isBlocked = true;
//                         } else if (Math.abs(delY) > 5) {
//                             direction = 'vertical';
//                             isBlocked = true;
//                         }
//                     } else if (direction === 'horizon') {
//                         e.preventDefault();
//                         $selector.find('.slide').css({ 'left': (offsetX + delX) + 'px' });
//                     } else if (direction === 'vertical') {
//                         delX = 0;
//                     }
//                 }
//             }

//             // function removeEvent() {
//             //     $selector.find('.indicator li button, button.prev, button.next, button.play').off('click');
//             //     $selector.find('.slide').off('mousedown touchstart');
//             // }

//             function stopTimer() {
//                 clearTimeout(timerId);
//                 $selector.find('button.play').removeClass('on');
//                 isTimerOn = false;
//                 $selector.find('span.bar').remove();
//             }

//             function startTimer() {
//                 timerId = setTimeout(() => { setSlide(slideNext); }, timerSpeed);
//                 $selector.find('button.play').addClass('on');
//                 isTimerOn = true;
//                 $selector.append('<span className="bar on" style="animation-duration: ' + timerSpeed + 'ms"></span>');
//             }

//             function restartTimer() {
//                 clearTimeout(timerId);
//                 $selector.find('span.bar').remove();
//                 timerId = setTimeout(() => { setSlide(slideNext); }, timerSpeed);
//                 $selector.append('<span className="bar on" style="animation-duration: ' + timerSpeed + 'ms"></span>');
//             }

//             function showPrev() {
//                 $selector.find('.slide').css({ 'transition': 'left 0.5s', 'left': '100%' }).one('transitionend', () => {
//                     setSlide(slidePrev);
//                 });
//             }

//             function showNext() {
//                 $selector.find('.slide').css({ 'transition': 'left 0.5s', 'left': '-100%' }).one('transitionend', () => {
//                     setSlide(slideNext);
//                 });
//             }

//             function showNow() {
//                 $selector.find('.slide').css({ 'transition': 'left 0.5s', 'left': 0 }).one('transitionend', () => {
//                     setSlide(slideNow);
//                 });
//             }

//             function setSlide(n) {
//                 slideNow = n;
//                 slidePrev = (n === 1) ? numSlide : (n - 1);
//                 slideNext = (n === numSlide) ? 1 : (n + 1);
//                 $selector.find('.slide li').css({ 'display': 'none', 'transition': 'none' });
//                 $selector.find('.slide').css({ 'transition': 'none', 'left': 0 });
//                 $selector.find('.slide li:eq(' + (slidePrev - 1) + ')').css({ 'display': 'block', 'left': '-100%' });
//                 $selector.find('.slide li:eq(' + (slideNow - 1) + ')').css({ 'display': 'block', 'left': 0 });
//                 $selector.find('.slide li:eq(' + (slideNext - 1) + ')').css({ 'display': 'block', 'left': '100%' });
//                 $selector.find('.indicator li').removeClass('on');
//                 $selector.find('.indicator li:eq(' + (slideNow - 1) + ')').addClass('on');
//             }
//             // 외부 접근용 기능
//             this.showPrev = () => {
//                 setSlide(slidePrev);
//             }
//             this.showNext = () => {
//                 setSlide(slideNext);
//             }
//             this.setSlide = function (n) {
//                 setSlide(n);
//             }
//             this.stopTimer = () => {
//                 stopTimer();
//             }
//             this.startTimer = () => {
//                 startTimer();
//             }
//             this.getSlideNow = () => {
//                 return slideNow;
//             }
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <p className="test-button">
//                     <button id="test1">테스트 버튼 1</button>
//                     <button id="test2">테스트 버튼 2</button>
//                     <button id="test3">테스트 버튼 3</button>
//                     <button id="test4">테스트 버튼 4</button>
//                 </p>
//                 <div className="image-slide isfinal" id="isfinal1">
//                     <div className="box">
//                         <p className="dummy"><img alt="" src={Img1} /></p>
//                         <ul className="slide">
//                             <li><img alt="000000" src={Img1} /></li>
//                             <li><img alt="000000" src={Img2} /></li>
//                             <li><img alt="000000" src={Img3} /></li>
//                             <li><img alt="000000" src={Img4} /></li>
//                             <li><img alt="000000" src={Img5} /></li>
//                             <li><img alt="000000" src={Img6} /></li>
//                             <li><img alt="000000" src={Img7} /></li>
//                         </ul>
//                     </div>
//                     <ul className="indicator">
//                     </ul>
//                     <p className="control">
//                         <button className="prev"><img alt="이전" src={ImgBtnLeft} /></button>
//                         <button className="next"><img alt="다음" src={ImgBtnRight} /></button>
//                         <button className="play">
//                             <i className="fas fa-play fa-fw"><span>타이머 시작</span></i>
//                             <i className="fas fa-pause fa-fw"><span>타이머 정지</span></i>
//                         </button>
//                     </p>
//                 </div>
//                 <div className="image-slide isfinal" id="isfinal2">
//                     <div className="box">
//                         <p className="dummy"><img alt="" src={Img1} /></p>
//                         <ul className="slide">
//                             <li><img alt="000000" src={Img1} /></li>
//                             <li><img alt="000000" src={Img2} /></li>
//                             <li><img alt="000000" src={Img3} /></li>
//                             <li><img alt="000000" src={Img4} /></li>
//                             <li><img alt="000000" src={Img5} /></li>
//                             <li><img alt="000000" src={Img6} /></li>
//                             <li><img alt="000000" src={Img7} /></li>
//                         </ul>
//                     </div>
//                     <ul className="indicator">
//                     </ul>
//                     <p className="control">
//                         <button className="prev"><img alt="이전" src={ImgBtnLeft} /></button>
//                         <button className="next"><img alt="다음" src={ImgBtnRight} /></button>
//                         <button className="play">
//                             <i className="fas fa-play fa-fw"><span>타이머 시작</span></i>
//                             <i className="fas fa-pause fa-fw"><span>타이머 정지</span></i>
//                         </button>
//                     </p>
//                 </div>
//                 <div className="image-slide isfinal" id="isfinal3">
//                     <div className="box">
//                         <p className="dummy"><img alt="" src={Img1} /></p>
//                         <ul className="slide">
//                             <li><img alt="000000" src={Img1} /></li>
//                             <li><img alt="000000" src={Img2} /></li>
//                             <li><img alt="000000" src={Img3} /></li>
//                             <li><img alt="000000" src={Img4} /></li>
//                             <li><img alt="000000" src={Img5} /></li>
//                             <li><img alt="000000" src={Img6} /></li>
//                             <li><img alt="000000" src={Img7} /></li>
//                         </ul>
//                     </div>
//                     <ul className="indicator">
//                     </ul>
//                     <p className="control">
//                         <button className="prev"><img alt="이전" src={ImgBtnLeft} /></button>
//                         <button className="next"><img alt="다음" src={ImgBtnRight} /></button>
//                         <button className="play">
//                             <i className="fas fa-play fa-fw"><span>타이머 시작</span></i>
//                             <i className="fas fa-pause fa-fw"><span>타이머 정지</span></i>
//                         </button>
//                     </p>
//                 </div>
//             </div>
//         )
//     }
// }
// export default Image_Slide;