import React , { useEffect, useState } from 'react';
import Img1 from '../../../img/image-slide/slide-image-01.jpg';
import Img2 from '../../../img/image-slide/slide-image-02.jpg';
import Img3 from '../../../img/image-slide/slide-image-03.jpg';
import Img4 from '../../../img/image-slide/slide-image-04.jpg';
import Img5 from '../../../img/image-slide/slide-image-05.jpg';
import Img6 from '../../../img/image-slide/slide-image-06.jpg';
import Img7 from '../../../img/image-slide/slide-image-07.jpg';
import ImgBtnLeft from '../../../img/image-slide/btn-left.png';
import ImgBtnRight from '../../../img/image-slide/btn-right.png';

function SetImage() {
    const [imgSetting, setImages] = useState([]);
    const setImg = () => {
        const imgSet = [ 
            {Img1},
            {Img2},
            {Img3},
            {Img4},
            {Img5},
            {Img6},
            {Img7},
            {ImgBtnLeft},
            {ImgBtnRight}
        ]
        setImages(imgSet);
    }
    useEffect(()=>{
        setImg()
    },[]);
    return imgSetting
}

export default SetImage;