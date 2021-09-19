import React, { Component, } from 'react';
import { Route } from 'react-router-dom';
import Image_Slide from './library_pages/Image_Slide';
// import Banner_Slide from './library_pages/Banner_Slide';
// import Scroll_UI from './library_pages/Scroll_UI';
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
        // console.log(this.props)
        var _title = this.props.datafrLink[0].kind + (this.props.datafrLink[0].num + 1);

        return (
            <div className="UIPage">
                <h3>{_title} </h3>
                {/* {this.props.} */}
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
                return <Image_Slide props={this.props}></Image_Slide>
            default:
                return (
                    <div>hihi</div>
                )
        }
    }
}


export default UIPage;