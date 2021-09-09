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
        // this.setState({ data: [receivedKind, receivedNum, totalNumofList] });
        return (
            <div className="UIPage">
                <h3>{_title}</h3>
                <UIArea KnN={this.state} subheadings={subheadings}></UIArea>
            </div >
        )
    }
};

class UIArea extends Component {
    render() {
        // console.log(this.props)
        var EachUISet = [];
        // var title = this.props.KnN.data[0];
        // var eachNum = this.props.KnN.data[1];
        // var loopCount = this.props.KnN.data[2];
        // for (let i = 0; i < loopCount; i++) {
        EachUISet.push(
            <EachUI dataSet={this.props.KnN.data} subheadings={this.props.subheadings} />
        );
        // }
        return (
            <div className="UIArea">
                {EachUISet}
            </div >
        )
    }
}
class EachUI extends Component {
    render() {
        var desc = this.props.dataSet[0];
        var num = this.props.dataSet[1] + 1;
        var total = this.props.dataSet[2];
        return (
            <div className="EachUI">
                <ImageSlide data={this.props}></ImageSlide>
            </div >
        )
    }
}

class ImageSlide extends Component {
    render() {
        console.log(this.props)
        // if (condition) {

        // }
        return (
            <Route path={"/UIPage/Image-Slide_1"}>
                <div>imageslide1 입니다</div>
            </Route>
        )
    }
}


export default UIPage;