import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from '../../../img/apple-touch-icon-152x152.png';
import $ from 'jquery'


class ScrollUI extends Component {
    componentDidMount() {
        const checkScroll = () => {
            var scrollAmt = $(document).scrollTop();
            if (scrollAmt > 100) {
                $('#header').addClass('small');
            } else {
                $('#header').removeClass('small');
            }
            $('#aside').css({ 'top': (scrollAmt + 150) + 'px' });
        }
        $('#scroll-top').on('click', () => {
            $('html').animate({ 'scrollTop': 0 }, 500);
        });
        checkScroll();
        $(window).on('scroll', () => {
            checkScroll();
        });
    }
    render() {
        return (
            <div className="scroll">
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
            </div>
        )
    }
}

export default ScrollUI;