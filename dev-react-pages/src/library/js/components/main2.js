import React, { Component, useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import Lists from './Lists';
import UIPage from './UIpage';
import Img1 from '../../img/image-slide/slide-image-01.jpg';
import Img2 from '../../img/image-slide/slide-image-02.jpg';
import Img3 from '../../img/image-slide/slide-image-03.jpg';
import Img4 from '../../img/image-slide/slide-image-04.jpg';
import Img5 from '../../img/image-slide/slide-image-05.jpg';
import Img6 from '../../img/image-slide/slide-image-06.jpg';
import Img7 from '../../img/image-slide/slide-image-07.jpg';
import Img8 from '../../img/image-slide/slide-image-08.jpg';
import Img9 from '../../img/image-slide/slide-image-09.png';
import Img10 from '../../img/image-slide/slide-image-10.jpg';
import Img11 from '../../img/image-slide/slide-image-11.jpg';
import Img12 from '../../img/image-slide/slide-image-12.jpg';
import Img13 from '../../img/image-slide/slide-image-13.jpg';
import Img14 from '../../img/image-slide/slide-image-14.jpg';
import Img15 from '../../img/image-slide/slide-image-15.jpg';


function Main2 () {
    const [_list,setList] = useState([]);
    const subheadings = {
        1: {title: 'API', desc:"", steps:0},
        2: {title: '이미지 슬라이드', desc:"", steps:0},
        3: {title: '배너 슬라이드', desc:"", steps:0},
        4: {title: '스크롤 UI', desc:"", steps:0},
        5: {title: '팝업', desc:"", steps:0},
        6: {title: '드래그 UI', desc:"", steps:0},
        7: {title: '내비게이션 UI', desc:"", steps:0},
        8: {title: '모바일 UI', desc:"", steps:0},
        9: {title: 'Rotation', desc:"", steps:0},
    }

                        // 'API',
                        // '이미지 슬라이드',
                        // '배너 슬라이드',
                        // '스크롤 UI',
                        // '팝업',
                        // '드래그 UI',
                        // '내비게이션 UI',
                        // '모바일 UI',
                        // 'Rotation',


    return (
        <main className="Main">
           <Lists  listHead={subheadings}/>
        </main >
    )
}

export default Main2;