import React, { Component } from 'react';
import $ from 'jquery';
import '../../../css/style.css';

class NavUI extends Component {
    componentDidMount() {
        $('#gnb > ul > li > button').on('mouseenter', function () {
            $('.Header').addClass('open');
        });
        $('.Header').on('mouseleave', function () {
            $('.Header').removeClass('open');
        });

        $('#gnb').on('focusin', function () {
            $('.Header').addClass('open');
        });
        $('#gnb').on('focusout', function () {
            $('.Header').removeClass('open');
        });

        $('.Header button.menu').on('click', function () {
            $('.Header button.menu').toggleClass('close');
            $('#gnb').toggleClass('open');
            $('#gnb > ul > li.on > button').trigger('click');
        });


        $('#gnb > ul > li').each(function () {
            var numSub = $(this).find('> ul > li').length;
            if (numSub > 0) {
                $(this).find('> button').append('<i className="fas fa-plus"><span>열기</span></i>');
            }
        });

        $('#gnb > ul > li > button').on('click', function (e) {
            e.preventDefault();
            var height = 0;
            $(this).next().find('li').each(function () {
                height += $(this).outerHeight(true);
            });
            $(this).next().css({ 'height': height + 'px' });
            $(this).find('i').attr({ 'className': 'fas fa-minus' });

            $(this).parent().siblings().find('> ul').css({ 'height': 0 });
            $(this).parent().siblings().find('> button i').attr({ 'className': 'fas fa-plus' });
        });

        $('#gnb > ul > li').on('focusin', function () {
            $(this).find('> button').trigger('click');
        });

        $(window).on('resize', function () {
            if ($(window).width() >= 1024) {
                $('#gnb > ul > li > ul').removeAttr('style');
                $('#gnb').removeClass('open');
                $('#gnb').find('i').attr({ 'className': 'fas fa-plus' });
                $('.Header button.menu').removeClass('close');
            }
        });


    }
    render() {
        return (
            <div>
                <button className="menu"><span>내비게이션 열기/닫기</span></button>
                <nav id="gnb">
                    <ul>
                        <li className="sub1" data-menu="_menu">
                            <button>메뉴1</button>
                            <ul>
                                <li data-menu="company"><button>회사개요</button></li>
                                <li data-menu="history"><button>연혁</button></li>
                                <li data-menu="organization"><button>조직도</button></li>
                                <li data-menu="cert"><button>인증현황</button></li>
                                <li data-menu="view"><button>회사전경</button></li>
                                <li data-menu="way"><button>오시는 길</button></li>
                            </ul>
                        </li>
                        <li className="sub2" data-menu="product">
                            <button>메뉴2</button>
                            <ul>
                                <li data-menu="menu2_sub1"><button>서브1</button></li>
                                <li data-menu="menu2_sub2"><button>서브2</button></li>
                                <li data-menu="menu2_sub3"><button>서브3</button></li>
                                <li data-menu="menu2_sub4"><button>서브4</button></li>
                                <li data-menu="menu2_sub5"><button>서브5</button></li>
                            </ul>
                        </li>
                        <li className="sub3" data-menu="pr">
                            <button>메뉴3</button>
                            <ul>
                                <li data-menu="news"><button>소식</button></li>
                                <li data-menu="video"><button>홍보영상</button></li>
                                <li data-menu="sponsor"><button>협찬사례</button></li>
                                <li data-menu="customer"><button>주요고객사</button></li>
                            </ul>
                        </li>
                        <li className="sub4" data-menu="portfolio"><button>메뉴4</button></li>
                        <li className="sub5" data-menu="data">
                            <button>메뉴5</button>
                            <ul>
                                <li data-menu="menu5_sub1"><button>서브1</button></li>
                                <li data-menu="menu5_sub2"><button>서브2</button></li>
                                <li data-menu="menu5_sub3"><button>서브3</button></li>
                                <li data-menu="menu5_sub4"><button>서브4</button></li>
                                <li data-menu="menu5_sub5"><button>서브5</button></li>
                            </ul>
                        </li>
                        <li className="sub6" data-menu="test"><button>메뉴6</button></li>
                    </ul>
                    <span className="bar"></span>
                </nav>
            </div>
        )
    }
}

export default NavUI;