import React, { Component } from 'react';
import Subheading from './contentList';

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
                { id: 1, title: 'step 1', desc: 'imgae-slide' },
                { id: 2, title: 'step 2', desc: 'imgae-slide' },
                { id: 3, title: 'step 3', desc: 'imgae-slide' },
                { id: 4, title: 'step 4', desc: 'imgae-slide' },
                { id: 5, title: 'step 5', desc: 'imgae-slide' },
                { id: 6, title: 'step 6', desc: 'imgae-slide' },
                { id: 7, title: 'step 7', desc: 'imgae-slide' },
                { id: 8, title: 'step 8', desc: 'imgae-slide' },
                { id: 9, title: 'step 9', desc: 'imgae-slide' },
                { id: 10, title: 'step 10', desc: 'imgae-slide' },
            ],
            bannerSlide: [
                { id: 1, title: 'step 1', desc: 'banner-slide' },
                { id: 2, title: 'step 2', desc: 'banner-slide' },
                { id: 3, title: 'step 3', desc: 'banner-slide' },
                { id: 4, title: 'step 4', desc: 'banner-slide' },
                { id: 5, title: 'step 5', desc: 'banner-slide' },
                { id: 6, title: 'step 6', desc: 'banner-slide' },
            ],
            scrollUI: [
                { id: 1, title: 'step 1', desc: 'scroll-UI' },
                { id: 2, title: 'step 2', desc: 'scroll-UI' },
                { id: 3, title: 'step 3', desc: 'scroll-UI' },
                { id: 4, title: 'step 4', desc: 'scroll-UI' },
                { id: 5, title: 'step 5', desc: 'scroll-UI' },
                { id: 6, title: 'step 6', desc: 'scroll-UI' },
            ],
        }
    }
    render() {
        return (
            <main className="Main">
                <Subheading menu={this.state.subheadings} content1={this.state.imageSlide} content2={this.state.bannerSlide} content3={this.state.scrollUI}></Subheading>
            </main >
        )
    }
}

export default Main;