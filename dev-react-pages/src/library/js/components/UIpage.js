import React, { Component, } from 'react';
import ImageSlide from './library_pages/Image_Slide';
import BannerSlide from './library_pages/Banner_Slide';
import ScrollUI from './library_pages/Scroll_UI';
import Popup from './library_pages/Popup';
import DragUI from './library_pages/Drag_UI';
// import NavUI from './library_pages/Nav_UI';
import MobileUI from './library_pages/Mobile_UI';
import APIPractice from './library_pages/APIPractice';

class UIPage extends Component {
    render() {
        var _title = this.props.datafrLink[0].kind + (this.props.datafrLink[0].num + 1);
        return (
            <div className="UIPage">
                <h3>{_title} </h3>
                <UIArea menu={this.props.menu}
                    datafrLink={this.props.datafrLink}
                    content={this.props.content}>
                </UIArea>
            </div >
        )
    }
};
class UIArea extends Component {
    render() {
        switch (this.props.datafrLink[0].kind) {
            case 'API':
                return <APIPractice props={this.props}></APIPractice>
            case 'Image_Slide':
                return <ImageSlide props={this.props}></ImageSlide>
            case 'Banner_Slide':
                return <BannerSlide props={this.props}></BannerSlide>
            case 'Scroll_UI':
                return <ScrollUI props={this.props}></ScrollUI>
            case 'Popup':
                return <Popup props={this.props}></Popup>
            case 'Drag_UI':
                return <DragUI props={this.props}></DragUI>
            case 'Nav_UI':
                return (<div>우상단 메뉴버튼</div>)
            case 'Mobile_UI':
                return <MobileUI props={this.props}></MobileUI>

            default:
                return (
                    <div>경로지정 안됨</div>
                )
        }
    }
}


export default UIPage;