import React, { Component } from 'react';
import $ from 'jquery'


class Popup extends Component {
    render() {
        function openPopup(id, width, height) {
            var widthPopup = (width === undefined) ? 600 : width;
            var heightPopup = (height === undefined) ? 700 : height;
            window.open('https://cakwhdtj.github.io/', id, 'top=0, left=0, width=' + widthPopup + ', height=' + heightPopup);
        }
        function openLayerPopup(id, width, height) {
            $('.layer-mask').addClass('on');
            $('#' + id).css({ 'width': width + 'px', 'height': height + 'px' }).addClass('on').attr({ 'tabindex': 0 }).focus();
            $('#' + id).before('<button></button>').after('<button></button>');
            $('#' + id).find('.last').attr({ 'tabindex': 0 });

            $('#' + id).prev().on('focusin', function () {
                $('#' + id).find('.last').focus();
            });

            $('#' + id).next().on('focusin', function () {
                $('#' + id).focus();
            });
            // 닫기 동작
            $('#' + id).find('button.close').one('click', () => {
                $('.layer-mask').removeClass('on');
                $('#' + id).removeClass('on');
                $('#' + id).prev().remove();
                $('#' + id).next().remove();
            });
        }
        return (
            <div>
                <div id="main_popup">
                    <ul className="button">
                        <li><button onClick={openPopup} title="새창열림">윈도우 팝업 1</button></li>
                        <li><button onClick={() => openPopup('popup', 1000, 900)} title="새창열림">윈도우 팝업 2</button></li>
                        <li><button onClick={() => openLayerPopup('popup-01', 500, 600)}>레이어 팝업 1</button></li>
                        <li><button onClick={() => openLayerPopup('popup-02', 500, 600)}>레이어 팝업 1</button></li>
                    </ul>
                </div>
                <div className="layer-mask"></div>
                <div id="popup-01" className="layer-popup" title="레이어 팝업창 1">
                    <header className="header">
                        <h3>레이어 팝업창 1</h3>
                        <button className="close"><i className="fas fa-times"><span>팝업창 닫기</span></i></button>
                    </header>
                    <section className="body">
                        <div className="wrapper">
                            <h4>제목1</h4>
                            <ul className="link">
                                <li><button>리스트 링크</button></li>
                                <li><button>리스트 링크</button></li>
                            </ul>
                            <h4>제목2</h4>
                            <ul className="link">
                                <li><button>리스트 링크</button></li>
                                <li><button>리스트 링크</button></li>
                                <li><button>리스트 링크</button></li>
                            </ul>
                        </div>
                    </section>
                </div>
                <div id="popup-02" className="layer-popup" title="레이어 팝업창 2">
                    <header className="header">
                        <h3>레이어 팝업창 2</h3>
                        <button className="close"><i className="fas fa-times"><span>팝업창 닫기</span></i></button>
                    </header>
                    <section className="body">
                        <div className="wrapper">
                            <h4>제목1</h4>
                            <ul className="link">
                                <li><button>리스트 링크</button></li>
                                <li><button>리스트 링크</button></li>
                            </ul>
                            <h4>제목2</h4>
                            <ul className="link">
                                <li><button>리스트 링크</button></li>
                                <li><button>리스트 링크</button></li>
                                <li><button>리스트 링크</button></li>
                                <li><button>리스트 링크</button></li>
                                <li><button>리스트 링크</button></li>
                                <li><button>리스트 링크</button></li>
                                <li><button>리스트 링크</button></li>
                                <li><button>리스트 링크</button></li>
                                <li><button>리스트 링크</button></li>
                                <li><button>리스트 링크</button></li>
                                <li><button>리스트 링크</button></li>
                                <li><button>리스트 링크</button></li>
                                <li><button>리스트 링크</button></li>
                                <li><button>리스트 링크</button></li>
                                <li><button>리스트 링크</button></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </div >

        )
    }
}

export default Popup;