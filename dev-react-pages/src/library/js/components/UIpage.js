import React, { Component, } from 'react';
import ImageSlide from './library_pages/Image_Slide';
import BannerSlide from './library_pages/Banner_Slide';
import ScrollUI from './library_pages/Scroll_UI';
// import Popup from './library_pages/Popup';
// import Drag_UI from './library_pages/Drag_UI';
// import Nav_UI from './library_pages/Nav_UI';
// import Mobile_UI from './library_pages/Mobile_UI';

class UIPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
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
            case 'Image_Slide':
                return <ImageSlide props={this.props}></ImageSlide>
            case 'Banner_Slide':
                return <BannerSlide props={this.props}></BannerSlide>
            case 'Scroll_UI':
                return <ScrollUI props={this.props}></ScrollUI>
            default:
                return (
                    <div>경로지정 안됨</div>
                )
        }
    }
}


export default UIPage;