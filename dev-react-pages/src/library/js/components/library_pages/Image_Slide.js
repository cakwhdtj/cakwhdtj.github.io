import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class Image_Slide extends Component {
    render() {
        console.log(this.props);
        var _props = this.props;
        var _set = [];
        var funcSet = [UI_1(),]
        console.log(UI_1)
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
        console.log(_set)
        return show();
    }
}

const UI_1 = () => {
    return (
        <div className="image-slide">
            <div className="box">
                <p className="dummy"><img alt="" src="" /></p>
                <ul className="slide">
                    <li><button><img alt="000000" src="img/image-slide/slide-image-01.jpg" /></button></li>
                    <li><button><img alt="000000" src="img/image-slide/slide-image-02.jpg" /></button></li>
                    <li><button><img alt="000000" src="img/image-slide/slide-image-03.jpg" /></button></li>
                    <li><button><img alt="000000" src="img/image-slide/slide-image-04.jpg" /></button></li>
                    <li><button><img alt="000000" src="img/image-slide/slide-image-05.jpg" /></button></li>
                    <li><button><img alt="000000" src="img/image-slide/slide-image-06.jpg" /></button></li>
                    <li><button><img alt="000000" src="img/image-slide/slide-image-07.jpg" /></button></li>
                    {/* /Users/jongseokoo/cakwhdtj.github.io/dev-react-pages/src/library/js/components/library_pages/Image_Slide.js
                    /Users/jongseokoo/cakwhdtj.github.io/dev-react-pages/src/library/img/image-slide/slide-image-01.jpg */}
                </ul>
            </div>
            <ul className="indicator">
                <li className="on"><button>1번 슬라이드</button></li>
                <li><button>2번 슬라이드</button></li>
                <li><button>3번 슬라이드</button></li>
                <li><button>4번 슬라이드</button></li>
                <li><button>5번 슬라이드</button></li>
                <li><button>6번 슬라이드</button></li>
                <li><button>7번 슬라이드</button></li>
            </ul>
            <p className="control">
                <a href="#" className="prev"><img alt="이전" src="../img/image-slide/btn-left.png" /></a>
                <a href="#" className="next"><img alt="다음" src="../img/image-slide/btn-right.png" /></a>
                <a href="#" className="play">
                    <i className="fas fa-play fa-fw"><span>타이머 시작</span></i>
                    <i className="fas fa-pause fa-fw"><span>타이머 정지</span></i>
                </a>
            </p>
        </div>
    );
}


export default Image_Slide;