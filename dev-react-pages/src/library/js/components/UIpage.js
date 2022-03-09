import React, { Component, useEffect, useState, } from 'react';
import ImageSlide from './library_pages/Image_Slide';
import BannerSlide from './library_pages/Banner_Slide';
import ScrollUI from './library_pages/Scroll_UI';
import Popup from './library_pages/Popup';
import DragUI from './library_pages/Drag_UI';
import NavUI from './library_pages/Nav_UI';
import MobileUI from './library_pages/Mobile_UI';
import APIPractice from './library_pages/APIPractice';
import RotationUI from './library_pages/Rotation_UI';
import WhrIam from './WhereGetter';

import SetImage from './library_pages/ImageSet';


function UIPage({ui}) {
    const [uinstep,setState] = useState(["",""]);
    let fullUrl = WhrIam(false);
    const getWhich = () => {
        fullUrl = fullUrl.replace("/react-pages/","");
        let step = fullUrl.substring(fullUrl.indexOf("/") + 1 , fullUrl.length);
        let wUi = fullUrl.substring(0,fullUrl.indexOf("/"));  
        return [wUi,step]
    }
    const imgs = SetImage().map((mImg)=>mImg);
   useEffect(()=>{
    setState(getWhich());
   },[])
    switch (uinstep[0]) {
        case 'API':
            return <APIPractice uiInfo={uinstep} dataSet={ui}/>
        case 'Image_Slide':
            return <ImageSlide uiInfo={uinstep} dataSet={ui} imgSet={imgs}/>
        case 'Banner_Slide':
            return <BannerSlide uiInfo={uinstep} dataSet={ui}/>
        // case 'Scroll_UI':
        //     return <ScrollUI hi={ui}/>
        // case 'Popup':
        //     return <Popup hi={ui}/>
        // case 'Drag_UI':
        //     return <DragUI hi={ui}/>
        // case 'Nav_UI':
        //     return (<div>우상단 메뉴버튼</div>)
        // case 'Mobile_UI':
        //     return <MobileUI hi={ui}/>
        // case 'Rotation_UI':
        //     return <RotationUI hi={ui}/>
        default:
            return (
                <div>경로지정 안됨 {`${uinstep[0]} ${uinstep[1]}`}</div>
            )
    }
}

export default UIPage;