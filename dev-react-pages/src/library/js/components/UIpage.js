import React, { Component, useEffect, useState, } from 'react';
import ImageSlide from './library_pages/Image_Slide';
import BannerSlide from './library_pages/Banner_Slide';
import ScrollUI from './library_pages/Scroll_UI';
import Popup from './library_pages/Popup';
import DragUI from './library_pages/Drag_UI';
// import NavUI from './library_pages/Nav_UI';
import MobileUI from './library_pages/Mobile_UI';
import APIPractice from './library_pages/APIPractice';
import RotationUI from './library_pages/Rotation_UI';
import WhrIam from './WhereGetter';

function UIPage({ui}) {
    

    // switch () {
    //     case 'API':
    //         return <APIPractice props={this.props}></APIPractice>
    //     case 'Image_Slide':
    //         return <ImageSlide props={this.props}></ImageSlide>
    //     case 'Banner_Slide':
    //         return <BannerSlide props={this.props}></BannerSlide>
    //     case 'Scroll_UI':
    //         return <ScrollUI props={this.props}></ScrollUI>
    //     case 'Popup':
    //         return <Popup props={this.props}></Popup>
    //     case 'Drag_UI':
    //         return <DragUI props={this.props}></DragUI>
    //     case 'Nav_UI':
    //         return (<div>우상단 메뉴버튼</div>)
    //     case 'Mobile_UI':
    //         return <MobileUI props={this.props}></MobileUI>
    //     case 'Rotation_UI':
    //         return <RotationUI props={this.props}></RotationUI>
    //     default:
            return (
                <div>경로지정 안됨 {WhrIam(true)}</div>
            )
    // }
}

export default UIPage;