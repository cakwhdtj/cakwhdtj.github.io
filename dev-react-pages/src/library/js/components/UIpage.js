import React, { Component } from 'react';
import Contents from './contentList';


class UIPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            whichNum: this.props,
        }
    }
    render() {
        console.log(this.state);
        return (
            <div className="UIPage">
                <ImageSlide1></ImageSlide1>
                <ImageSlide2></ImageSlide2>
            </div >
        )
    }
};

class ImageSlide1 extends Component {
    render() {
        return (
            <div className="ImageSlide1">
                <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
            </div >
        )
    }
}

class ImageSlide2 extends Component {
    render() {
        return (
            <div className="ImageSlide1">
                <p>2</p><p>2</p><p>2</p><p>2</p><p>2</p><p>2</p>

            </div >

        )
    }
}

export default UIPage;