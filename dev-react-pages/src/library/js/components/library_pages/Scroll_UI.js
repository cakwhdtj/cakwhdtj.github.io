import React, { Component } from 'react';
import logo from '../../../img/apple-touch-icon-152x152.png';
import $ from 'jquery'
import getInfo from '../UiInfoGetter';



class ScrollUI extends Component {
    render() {
        let index = getInfo(this.props)[0];
        let compArry = [<ScUI1compo />,<ScUI2compo />]
        return <div>{compArry[index]}</div> 
    }
}

class ScUI1compo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            define: "ScUI1"
        }
    }
    componentDidMount() {
        var numPage = $('section.page').length;
        var pageNow = 0;
        var pagePrev = 0;
        var pageNext = 0;
        const checkScroll = () => {
            var scrollAmt = $(document).scrollTop();
            if (scrollAmt > 100) {
                $('.Header').addClass('small');
            } else {
                $('.Header').removeClass('small');
            }
            $('#aside').css({ 'top': (scrollAmt + 150) + 'px' });
        }
        $('#scroll-top').on('click', () => {
            $('html').animate({ 'scrollTop': 0 }, 500);
        });

        const checkVisibilitySc1 = (selector) => {
            var pSet = [];
            var start = [];
            var end = [];
            var scrollAmt = $(document).scrollTop();
            for (let i = 0; i < $(selector).length; i++) {
                pSet[i] = $(selector + ':eq(' + i + ')');
                start[i] = pSet[i].offset().top - $(window).height();
                end[i] = pSet[i].offset().top + pSet[i].outerHeight();
                if (scrollAmt < start[i]) {
                    pSet[i].removeClass('up on');
                    pSet[i].addClass('down');
                } else if (scrollAmt > end[i]) {
                    pSet[i].removeClass('down on');
                    pSet[i].addClass('up');
                } else {
                    pSet[i].removeClass('down up');
                    pSet[i].addClass('on');
                    $('#scroll1 #page-indicator > li').removeClass('on');
                    $('#scroll1 #page-indicator > li:eq(' + (i) + ')').addClass('on');
                }
            }
        }
        const showPageSc1 = (n) => {
            var scrollAmt = $('section.page:eq(' + (n - 1) + ')').offset().top;
            $('html').stop(true).animate({ 'scrollTop': scrollAmt }, 500);
            $('#scroll1 #page-indicator > li').removeClass('on');
            $('#scroll1 #page-indicator > li:eq(' + (n - 1) + ')').addClass('on');
            pageNow = n;
            pagePrev = (n <= 1) ? 1 : (n - 1);
            pageNext = (n >= numPage) ? numPage : (n + 1);
        }
        if (this.state.define === "ScUI1") {
            checkScroll();
            $(window).on('scroll', () => {
                checkScroll();
                checkVisibilitySc1('#scroll1 p.content');
            });
            $('#scroll1 #page-indicator').find('li button').each(function (i) {
                $(this).on('click', () => {
                    showPageSc1(($(this).parent().index()) + 1);
                });
            });
        }
    }
    render() {
        return (
            <div className="scroll box" id="scroll1">
                <ul id="page-indicator">
                    <li className="on"><button>1번 페이지</button></li>
                    <li><button>2번 페이지</button></li>
                    <li><button>3번 페이지</button></li>
                    <li><button>4번 페이지</button></li>
                    <li><button>5번 페이지</button></li>
                    <li><button>6번 페이지</button></li>
                    <li><button>7번 페이지</button></li>
                </ul>
                <section id="page1" className="page">
                    <div className="box">
                        <h2>Page1</h2>
                        <p className="content"><img alt="" src={logo} /></p>
                        {/* <p><button>링크 텍스트</button></p> */}
                    </div>
                </section>
                <section id="page2" className="page">
                    <div className="box">
                        <h2>Page2</h2>
                        <p className="content"><img alt="" src={logo} /></p>
                        {/* <p><button>링크 텍스트</button></p> */}
                    </div>
                </section>
                <section id="page3" className="page">
                    <div className="box">
                        <h2>Page3</h2>
                        <p className="content"><img alt="" src={logo} /></p>
                        {/* <p><button>링크 텍스트</button></p> */}
                    </div>
                </section>
                <section id="page4" className="page">
                    <div className="box">
                        <h2>Page4</h2>
                        <p className="content"><img alt="" src={logo} /></p>
                        {/* <p><button>링크 텍스트</button></p> */}
                    </div>
                </section>
                <section id="page5" className="page">
                    <div className="box">
                        <h2>Page5</h2>
                        <p className="content"><img alt="" src={logo} /></p>
                        {/* <p><button>링크 텍스트</button></p> */}
                    </div>
                </section>
                <section id="page6" className="page">
                    <div className="box">
                        <h2>Page6</h2>
                        <p className="content"><img alt="" src={logo} /></p>
                        {/* <p><button>링크 텍스트</button></p> */}
                    </div>
                </section>
                <section id="page7" className="page">
                    <div className="box">
                        <h2>Page7</h2>
                        <p className="content"><img alt="" src={logo} /></p>
                        {/* <p><button>링크 텍스트</button></p> */}
                    </div>
                </section>
                <aside id="aside">
                    <h2>Aside</h2>
                </aside>
                <button id="scroll-top">TOP</button>
            </div>
        )
    }
}
class ScUI2compo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            define: "ScUI2"
        }
    }
    componentDidMount() {
        var numPage = $('section.page').length;
        var pageNow = 0;
        var pagePrev = 0;
        var pageNext = 0;
        var timerId = '';
        var Sc2Counter = 0;
        var scrollEvent = ('onmousewheel' in window) ? 'mousewheel' : 'DOMMouseScroll';
        var isBlocked = false;

        const checkScroll = () => {
            var scrollAmt = $(document).scrollTop();
            if (scrollAmt > 100) {
                $('.Header').addClass('small');
            } else {
                $('.Header').removeClass('small');
            }
            $('#aside').css({ 'top': (scrollAmt + 150) + 'px' });
        }
        $('#scroll-top').on('click', () => {
            $('html').animate({ 'scrollTop': 0 }, 500);
        });

        const checkVisibility = (selector) => {
            var pSet = [];
            var start = [];
            var end = [];
            var scrollAmt = $(document).scrollTop();
            for (let i = 0; i < $(selector).length; i++) {
                pSet[i] = $(selector + ':eq(' + i + ')');
                start[i] = pSet[i].offset().top - $(window).height();
                end[i] = pSet[i].offset().top + pSet[i].outerHeight();
                if (scrollAmt < start[i]) {
                    pSet[i].removeClass('up on');
                    pSet[i].addClass('down');
                } else if (scrollAmt > end[i]) {
                    pSet[i].removeClass('down on');
                    pSet[i].addClass('up');
                } else {
                    pSet[i].removeClass('down up');
                    pSet[i].addClass('on');
                }
            }
        }

        const showPage = (n) => {
            clearTimeout(timerId);
            isBlocked = true;
            var scrollAmt = $('section.page:eq(' + (n - 1) + ')').offset().top;
            $('html').stop(true).animate({ 'scrollTop': scrollAmt }, 500);
            $('#scroll2 #page-indicator > li').removeClass('on');
            timerId = setTimeout(() => {
                $('#scroll2 #page-indicator > li:eq(' + (n - 1) + ')').addClass('on');
                isBlocked = false;
            }, 1000);
            pageNow = n;
            pagePrev = (n <= 1) ? 1 : (n - 1);
            pageNext = (n >= numPage) ? numPage : (n + 1);
        }
        const checkCurrentPage = () => {
            var scrollAmt = $(document).scrollTop();
            $('section.page').each(function (i) {
                var min = $(this).offset().top - ($(window).height() / 2);
                var max = $(this).offset().top + ($(window).height() / 2);
                if (scrollAmt > min && scrollAmt <= max) {
                    var n = i + 1;
                    pageNow = n;
                    pagePrev = (n <= 1) ? 1 : (n - 1);
                    pageNext = (n >= numPage) ? numPage : (n + 1);
                    $('#scroll2 #page-indicator > li').removeClass('on');
                    // $('#scroll2 #page-indicator > li:eq(' + (n - 1) + ')').addClass('on');
                    return false;
                }
            });
        }

        if (this.state.define === "ScUI2") {
            checkCurrentPage()
            checkScroll();
            $(window).on('scroll', () => {
                checkCurrentPage()
                checkScroll();
                checkVisibility('#scroll2 p.content');
            });
            $('#scroll2 #page-indicator').find('li button').each(function (i) {
                $(this).on('click', () => {
                    showPage(($(this).parent().index() + 1));
                });
            });
            document.getElementById('scroll2').addEventListener(scrollEvent, function (e) {
                e.preventDefault();
                Sc2Counter++;
                if (Sc2Counter < 25 || Sc2Counter > 100) {
                    return false;
                }
                Sc2Counter = 0;
                if (isBlocked === true) return false;
                isBlocked = true;
                var delta = 0;
                if (scrollEvent === 'mousewheel') {
                    delta = e.wheelDelta / -300;
                } else {
                    delta = e.detail / 3;
                }
                if (delta > 0) {
                    showPage(pageNext);
                } else if (delta < 0) {
                    showPage(pagePrev);
                }
            }, { 'passive': false });
        }
    }
    render() {
        return (
            <div className="scroll box" id="scroll2">
                <ul id="page-indicator">
                    <li className="on"><button>1번 페이지</button></li>
                    <li><button>2번 페이지</button></li>
                    <li><button>3번 페이지</button></li>
                    <li><button>4번 페이지</button></li>
                    <li><button>5번 페이지</button></li>
                    <li><button>6번 페이지</button></li>
                    <li><button>7번 페이지</button></li>
                </ul>
                <section id="page1" className="page">
                    <div className="box">
                        <h2>Page1</h2>
                        <p className="content"><img alt="" src={logo} /></p>
                        {/* <p><button>링크 텍스트</button></p> */}
                    </div>
                </section>
                <section id="page2" className="page">
                    <div className="box">
                        <h2>Page2</h2>
                        <p className="content"><img alt="" src={logo} /></p>
                        {/* <p><button>링크 텍스트</button></p> */}
                    </div>
                </section>
                <section id="page3" className="page">
                    <div className="box">
                        <h2>Page3</h2>
                        <p className="content"><img alt="" src={logo} /></p>
                        {/* <p><button>링크 텍스트</button></p> */}
                    </div>
                </section>
                <section id="page4" className="page">
                    <div className="box">
                        <h2>Page4</h2>
                        <p className="content"><img alt="" src={logo} /></p>
                        {/* <p><button>링크 텍스트</button></p> */}
                    </div>
                </section>
                <section id="page5" className="page">
                    <div className="box">
                        <h2>Page5</h2>
                        <p className="content"><img alt="" src={logo} /></p>
                        {/* <p><button>링크 텍스트</button></p> */}
                    </div>
                </section>
                <section id="page6" className="page">
                    <div className="box">
                        <h2>Page6</h2>
                        <p className="content"><img alt="" src={logo} /></p>
                        {/* <p><button>링크 텍스트</button></p> */}
                    </div>
                </section>
                <section id="page7" className="page">
                    <div className="box">
                        <h2>Page7</h2>
                        <p className="content"><img alt="" src={logo} /></p>
                        {/* <p><button>링크 텍스트</button></p> */}
                    </div>
                </section>
                <aside id="aside">
                    <h2>Aside</h2>
                </aside>
                <button id="scroll-top">TOP</button>
            </div>
        )
    }
}
export default ScrollUI;