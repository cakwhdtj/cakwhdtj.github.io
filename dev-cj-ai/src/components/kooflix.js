import React, { useState } from "react";
import bg from '../img/apple-touch-icon-114x114.png'

const Kooflix = () => {
    const [effect, setHover] = useState(false);
    let initialWidth = window.innerWidth;
    const stObj = {
        "backgroundImage" : `url(${bg})`,
        "backgroundSize": "contain",
        "backgroundRepeat": "no-repeat",
        "borderRadius": "50%",
        "position": "fixed",
        "right": 10, "bottom": 10,
        "display": "block",
        "width": "4%", "height" : `${initialWidth * .04}px`,
        "zIndex": 999,
        "opacity": `${effect?1:.5}`,
        "transition": "all .3s ease",
        "transform" : `scale(${effect?1.2:1})`
    }
    return (
        <a style={stObj} id="kooflix" href='https://cakwhdtj.github.io/'
            onMouseEnter={() => {setHover(true);}}
            onMouseLeave={() => {setHover(false);}}
        >
            <span className="hide_clipPath">KOOFLIX로 돌아가기</span>
        </a>
    );
    };
    
    export default Kooflix;

   