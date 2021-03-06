import { useEffect, useState } from 'react';
import Img1 from '../../../img/image-slide/slide-image-01.jpg';
import Img2 from '../../../img/image-slide/slide-image-02.jpg';
import Img3 from '../../../img/image-slide/slide-image-03.jpg';
import Img4 from '../../../img/image-slide/slide-image-04.jpg';
import Img5 from '../../../img/image-slide/slide-image-05.jpg';
import Img6 from '../../../img/image-slide/slide-image-06.jpg';
import Img7 from '../../../img/image-slide/slide-image-07.jpg';
import Img8 from '../../../img/image-slide/slide-image-08.jpg';
import Img9 from '../../../img/image-slide/slide-image-09.png';
import Img10 from '../../../img/image-slide/slide-image-10.jpg';
import Img11 from '../../../img/image-slide/slide-image-11.jpg';
import Img12 from '../../../img/image-slide/slide-image-12.jpg';
import Img13 from '../../../img/image-slide/slide-image-13.jpg';
import Img14 from '../../../img/image-slide/slide-image-14.jpg';
import Img15 from '../../../img/image-slide/slide-image-15.jpg';
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
            {Img8},
            {Img9},
            {Img10},
            {Img11},
            {Img12},
            {Img13},
            {Img14},
            {Img15},
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