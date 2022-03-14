import React, {  } from "react"

export default function Box(imgSrcSet, id, divName, numLi ,isDummy) {
    const boxName = divName;
    const boxId = id;
    const num = numLi;
    const srcGen = (num) => {
        return imgSrcSet[Object.keys(imgSrcSet)[num]][Object.keys(imgSrcSet[Object.keys(imgSrcSet)[num]])[0]]
    }
    const liGen = (num) => {
        const result = [];
        for (let i = 0; i < num; i++) {
            result.push(<li key={srcGen(i)}><button><img alt="000000" src={srcGen(i)} /></button></li>)
        }
        return result;
    }
    
    return (
        <div className={boxName} id={boxId}>
            <div className="box">
                {isDummy === true ? <p className="dummy"><img alt="" src={srcGen(0)} /></p> : null}
                <ul className="slide">
                    {liGen(num)}
                </ul>
            </div>
            <ul className="indicator">
            </ul>
            <p className="control">
                <button className="prev"><img alt="이전" src={srcGen(15)} /></button>
                <button className="next"><img alt="다음" src={srcGen(16)} /></button>
                <button className="play">
                    <i className="fas fa-play fa-fw"><span>타이머 시작</span></i>
                    <i className="fas fa-pause fa-fw"><span>타이머 정지</span></i>
                </button>
            </p>
        </div>
    )
}