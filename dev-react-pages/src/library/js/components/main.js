import React, { Component } from 'react';
import ContentList from './contentList';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentlist: [
                { id: 1, title: '이미지 슬라이드', desc: 'imgae-slide' },
                { id: 2, title: '배너 슬라이드', desc: 'banner-slide' },
                { id: 3, title: '스크롤 UI', desc: 'scroll-UI' },
                { id: 4, title: '팝업', desc: 'popup' },
                { id: 5, title: '드래그 UI', desc: 'drag-UI' },
                { id: 6, title: '내비게이션 UI', desc: 'nav-UI' },
                { id: 7, title: '모바일 UI', desc: 'mobile_UI' },
            ]
        }
    }
    render() {
        return (
            <main className="Main">
                <ContentList menu={this.state.contentlist}></ContentList>
            </main>
        )
    }
}

export default Main;