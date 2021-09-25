import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from '../../../img/apple-touch-icon-152x152.png';
import $ from 'jquery'


class ScrollUI extends Component {
    render() {
        var _props = this.props.props;
        var _set = [];
        var funcSet = [ScUI1(),]
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
const ScUI1 = () => {
    return (
        <ScUI1compo></ScUI1compo>
    )
}
class ScUI1compo extends Component {
    componentDidMount() {
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
            console.log(selector)
            $(selector).each(() => {
                console.log('hi')
                var $selector = $(selector);
                var start = $selector.offset().top - $(window).height();
                var end = $selector.offset().top + $selector.outerHeight();
                var scrollAmt = $(document).scrollTop();
                if (scrollAmt < start) {
                    $selector.removeClass('up on');
                    $selector.addClass('down');
                } else if (scrollAmt > end) {
                    $selector.removeClass('down on');
                    $selector.addClass('up');
                } else {
                    $selector.removeClass('down up');
                    $selector.addClass('on');
                }
            });
        }
        checkScroll();
        $(window).on('scroll', () => {
            checkScroll();
            checkVisibility('p.content');
        });
    }
    render() {
        return (
            <div className="scroll box">
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