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
            data: null,
        }
    }
    render() {
        var subheadings = this.props.menu;
        var receivedNum = this.props.numforchild;
        var receivedKind = this.props.kindforchild;
        var totalNumofList = this.props.totalNumforChild;
        var _title = (receivedKind + " " + (receivedNum + 1));
        this.state.data = [receivedKind, receivedNum, totalNumofList];
        var listLength = [];
        for (let i = 0; i < this.props.menu.length; i++) {
            var content = eval(`this.props.content${i + 1}`);
            listLength.push(content.length);
        }
        return (
            <div className="UIPage">
                <h3>{_title}</h3>
                <UIArea KnN={this.state} subheadings={subheadings} listLength={listLength}></UIArea>
            </div >
        )
    }
};

class UIArea extends Component {
    render() {
        var _length = 0;
        var slide = [];
        var abProps = this.props;
        var kind = abProps.KnN.data[0];
        var _UI = [];
        var match;
        for (let i = 0; i < abProps.subheadings.length; i++) {
            if (kind === abProps.subheadings[i].desc) {
                var _id = abProps.subheadings[i].id - 1;
                _length = abProps.listLength[_id];
                match = _id;
            }
            _UI.push("<" + abProps.subheadings[i].desc + "></" + abProps.subheadings[i].desc + ">");

        }

        for (let i = 0; i < _length; i++) {
            slide.push(
                <Route path={"/react-pages/UIPage/" + kind + "_" + (i + 1)}>
                    <div className={kind + i}>
                        {kind}{i + 1} 입니다.
                        <UI_feature data={this.props} match={match}></UI_feature>
                    </div>
                </Route>
            );
        }
        return (
            <div className="ui_frame">
                {slide}
            </div>
        )
    }
}



class UI_feature extends Component {
    render() {
        // console.log(this.props);
        var data = this.props.data;
        var UI_type = [];
        for (let i = 0; i < data.subheadings.length; i++) {
            UI_type.push(data.subheadings[i].desc);
        }
        switch (data.KnN.data[0]) {
            case UI_type[0]:
                return <Image_Slide data={data} match={this.props.match} />;
            // case UI_type[1]:
            //     return <Banner_Slide data={data} match={this.props.match} />;
            // case UI_type[2]:
            //     return <Scroll_UI data={data} match={this.props.match} />;
            // case UI_type[3]:
            //     return <Popup data={data} match={this.props.match} />;
            // case UI_type[4]:
            //     return <Drag_UI data={data} match={this.props.match} />;
            // case UI_type[5]:
            //     return <Nav_UI data={data} match={this.props.match} />;
            // case UI_type[6]:
            //     return <Mobile_UI data={data} match={this.props.match} />;
            default:
                return <div></div>;
        }
    }
}


export default UIPage;