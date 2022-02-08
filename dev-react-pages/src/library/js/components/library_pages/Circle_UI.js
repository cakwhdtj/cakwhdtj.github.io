import React, { Component } from "react";
import circle1 from '../../../img/circle/main_macaron_01.png';
import circle2 from '../../../img/circle/main_macaron_02.png';
import circle3 from '../../../img/circle/main_macaron_03.png';
import circle4 from '../../../img/circle/main_macaron_04.png';
import circle5 from '../../../img/circle/main_macaron_05.png';


import $ from 'jquery'


class CircleUI extends Component {
    componentDidMount() {
        var $selector = $('.circleDiv');
        $selector.find('.slide li').each((i) => {
            $selector.find('.product').append('<li>' + (i + 1) + '</li>')
        });
    }
    render() {
        return (
            <div className="circleDiv">
                <div className="indicator">
                    <ul className="product circle"></ul>
                    <ul className="main_images slide">
                        <li><img alt="000000" src={circle1} /></li>
                        <li><img alt="000000" src={circle2} /></li>
                        <li><img alt="000000" src={circle3} /></li>
                        <li><img alt="000000" src={circle4} /></li>
                        <li><img alt="000000" src={circle5} /></li>
                        <li><img alt="000000" src={circle1} /></li>
                        <li><img alt="000000" src={circle2} /></li>
                        <li><img alt="000000" src={circle3} /></li>
                        <li><img alt="000000" src={circle4} /></li>
                        <li><img alt="000000" src={circle5} /></li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default CircleUI;