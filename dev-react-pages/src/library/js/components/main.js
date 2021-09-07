import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import UIPage from './UIpage';

import Contents from './contentList';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subheadings: [
                { id: 1, title: '이미지 슬라이드', desc: 'imgae-slide' },
                { id: 2, title: '배너 슬라이드', desc: 'banner-slide' },
                { id: 3, title: '스크롤 UI', desc: 'scroll-UI' },
                { id: 4, title: '팝업', desc: 'popup' },
                { id: 5, title: '드래그 UI', desc: 'drag-UI' },
                { id: 6, title: '내비게이션 UI', desc: 'nav-UI' },
                { id: 7, title: '모바일 UI', desc: 'mobile_UI' },
            ],
            imageSlide: [
                { id: 1, title: 'Step 1', desc: 'Imgae-slide' },
                { id: 2, title: 'Step 2', desc: 'Imgae-slide' },
                { id: 3, title: 'Step 3', desc: 'Imgae-slide' },
                { id: 4, title: 'Step 4', desc: 'Imgae-slide' },
                { id: 5, title: 'Step 5', desc: 'Imgae-slide' },
                { id: 6, title: 'Step 6', desc: 'Imgae-slide' },
                { id: 7, title: 'Step 7', desc: 'Imgae-slide' },
                { id: 8, title: 'Step 8', desc: 'Imgae-slide' },
                { id: 9, title: 'Step 9', desc: 'Imgae-slide' },
                { id: 10, title: 'Step 10', desc: 'Imgae-slide' },
            ],
            bannerSlide: [
                { id: 1, title: 'Step 1', desc: 'Banner-slide' },
                { id: 2, title: 'Step 2', desc: 'Banner-slide' },
                { id: 3, title: 'Step 3', desc: 'Banner-slide' },
                { id: 4, title: 'Step 4', desc: 'Banner-slide' },
                { id: 5, title: 'Step 5', desc: 'Banner-slide' },
                { id: 6, title: 'Step 6', desc: 'Banner-slide' },
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
            datafrContList: this.linkKindnNum
        }
    }
    linkKindnNum = (linkKindfrChild, linkNumfrChild) => {
        return { linkKindfrChild, linkNumfrChild };
    }
    render() {
        return (
            <main className="Main">
                <Route path="/" exact={true}>
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
                    </Contents></Route>
                <Route path="/UIPage" render={() => <UIPage menu={this.state.subheadings} datafrContList={this.linkKindnNum} />}></Route >
            </main >
        )
    }
}

export default Main;