import React, { createElement } from "react"
import $ from 'jquery'


export default function Box(img) {
    const liGen = (num) => {
        for (let i = 0; i < num; i++) {
            let st = 'Img'+num;
            return <li><button><img alt="000000" src={img[num].st} /></button></li> 
        }
    }

    return (
        <div className="image-slide is1">
                <div className="box">
                    <p className="dummy"><img alt="" src={''} /></p>
                    <ul className="slide">
                        {liGen(7)}
                        {/* <li><button><img alt="000000" src={''} /></button></li>
                        <li><button><img alt="000000" src={''} /></button></li>
                        <li><button><img alt="000000" src={''} /></button></li>
                        <li><button><img alt="000000" src={''} /></button></li>
                        <li><button><img alt="000000" src={''} /></button></li>
                        <li><button><img alt="000000" src={''} /></button></li>
                        <li><button><img alt="000000" src={''} /></button></li> */}
                    </ul>
                </div>
                <ul className="indicator">
                </ul>
                <p className="control">
                    <button className="prev"><img alt="이전" src={''} /></button>
                    <button className="next"><img alt="다음" src={''} /></button>
                    <button className="play">
                        <i className="fas fa-play fa-fw"><span>타이머 시작</span></i>
                        <i className="fas fa-pause fa-fw"><span>타이머 정지</span></i>
                    </button>
                </p>
            </div>
    )
}