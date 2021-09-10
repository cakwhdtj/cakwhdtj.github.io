import React, { Component } from 'react';
import { Route } from 'react-router-dom';

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
        console.log(abProps);
        for (let i = 0; i < abProps.subheadings.length; i++) {
            if (kind === abProps.subheadings[i].desc) {
                var _id = abProps.subheadings[i].id - 1;
                _length = abProps.listLength[_id];
            }
        }
        for (let i = 0; i < _length; i++) {
            slide.push(
                <Route path={"/react-pages/UIPage/" + kind + "_" + (i + 1)}>
                    <div className={kind + i}>
                        {kind}{i + 1} 입니다.
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

class Image_Slide extends Component {
    render() {
        return (
            <div>
                <p>hi</p>
            </div>
        )
    }
}

export default UIPage;