import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Contents from './contentList';
import UIPage from './UIpage';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subheadings: [
                { id: 1, title: '이미지 슬라이드', desc: 'Image_Slide' },
                { id: 2, title: '배너 슬라이드', desc: 'Banner_Slide' },
                { id: 3, title: '스크롤 UI', desc: 'Scroll_UI' },
                { id: 4, title: '팝업', desc: 'Popup' },
                { id: 5, title: '드래그 UI', desc: 'Drag_UI' },
                { id: 6, title: '내비게이션 UI', desc: 'Nav_UI' },
                { id: 7, title: '모바일 UI', desc: 'Mobile_UI' },
            ],
            imageSlide: [
                { id: 1, title: 'Step 1', desc: 'Image-slide' },
                { id: 2, title: 'Step 2', desc: 'Image-slide' },
                { id: 3, title: 'Step 3', desc: 'Image-slide' },
                { id: 4, title: 'Step 4', desc: 'Image-slide' },
                { id: 9, title: 'Drag', desc: 'Image-slide' },
                { id: 10, title: 'final', desc: 'Image-slide' },
            ],
            bannerSlide: [
                { id: 1, title: 'Step 1', desc: 'Banner-slide' },
                { id: 2, title: 'Step 2', desc: 'Banner-slide' },
                { id: 3, title: 'Step 3', desc: 'Banner-slide' },
                { id: 4, title: 'final', desc: 'Banner-slide' },
            ],
            scrollUI: [
                { id: 1, title: 'Step 1', desc: 'Scroll-UI' },
                { id: 2, title: 'Step 2', desc: 'Scroll-UI' },
                { id: 3, title: 'Step 3', desc: 'Scroll-UI' },
                { id: 4, title: 'Step 4', desc: 'Scroll-UI' },
                { id: 5, title: 'Step 5', desc: 'Scroll-UI' },
                { id: 6, title: 'Step 6', desc: 'Scroll-UI' },
            ],
            popup: [
                { id: 1, title: 'Step 1', desc: 'Popup' },
            ],
            dragUI: [
                { id: 1, title: 'Step 1', desc: 'Drag-UI' },
                { id: 2, title: 'Step 2', desc: 'Drag-UI' },
                { id: 3, title: 'Step 3', desc: 'Drag-UI' },
                { id: 4, title: 'Step 4', desc: 'Drag-UI' },
            ],
            navUI: [
                { id: 1, title: 'Step 1', desc: 'Navigation-UI' },
            ],
            mobileUI: [
                { id: 1, title: 'Swipe', desc: 'Mobile-UI' },
                { id: 2, title: 'Step 1', desc: 'Mobile-UI' },
                { id: 3, title: 'Step 2', desc: 'Mobile-UI' },
                { id: 4, title: 'Step 3', desc: 'Mobile-UI' },
                { id: 5, title: 'Step 4', desc: 'Mobile-UI' },
                { id: 6, title: 'Step 1', desc: 'Mobile-UI' },
            ],
            kindforChild: null,
            numforChild: null,
            totalNumData: null,
        }
    }
    linkKindnNum = (linkKindfrChild, linkNumfrChild, totalNumfrChild) => {
        this.setState({
            kindforChild: linkKindfrChild,
            numforChild: linkNumfrChild,
            totalNumData: totalNumfrChild,
        })
    }
    render() {
        return (
            <main className="Main">
                {/* <Route path="/react-pages" exact={true}> */}
                <Contents
                    menu={this.state.subheadings}
                    content1={this.state.imageSlide}
                    content2={this.state.bannerSlide}
                    content3={this.state.scrollUI}
                    content4={this.state.popup}
                    content5={this.state.dragUI}
                    content6={this.state.navUI}
                    content7={this.state.mobileUI}
                    linkKindnNum={this.linkKindnNum}>
                </Contents>
                {/* </Route> */}
                {/* <Route path={"/react-pages/UIPage/"} render={() =>
                    <UIPage
                        menu={this.state.subheadings}
                        kindforchild={this.state.kindforChild}
                        numforchild={this.state.numforChild}
                        totalNumforChild={this.state.totalNumData}
                        content1={this.state.imageSlide}
                        content2={this.state.bannerSlide}
                        content3={this.state.scrollUI}
                        content4={this.state.popup}
                        content5={this.state.dragUI}
                        content6={this.state.navUI}
                        content7={this.state.mobileUI} />}
                >
                </Route > */}
            </main >
        )
    }
}

export default Main;