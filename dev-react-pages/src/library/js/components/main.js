import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Contents from './contentList';
import UIPage from './UIpage';
import Img1 from '../../img/image-slide/slide-image-01.jpg';
import Img2 from '../../img/image-slide/slide-image-02.jpg';
import Img3 from '../../img/image-slide/slide-image-03.jpg';
import Img4 from '../../img/image-slide/slide-image-04.jpg';
import Img5 from '../../img/image-slide/slide-image-05.jpg';
import Img6 from '../../img/image-slide/slide-image-06.jpg';
import Img7 from '../../img/image-slide/slide-image-07.jpg';
import Img8 from '../../img/image-slide/slide-image-08.jpg';
import Img9 from '../../img/image-slide/slide-image-09.png';
import Img10 from '../../img/image-slide/slide-image-10.jpg';
import Img11 from '../../img/image-slide/slide-image-11.jpg';
import Img12 from '../../img/image-slide/slide-image-12.jpg';
import Img13 from '../../img/image-slide/slide-image-13.jpg';
import Img14 from '../../img/image-slide/slide-image-14.jpg';
import Img15 from '../../img/image-slide/slide-image-15.jpg';


class Main extends Component {
    componentDidMount() {
        const imagesPreload = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13, Img14, Img15];
        const imgSet = [];
        imagesPreload.forEach((image) => {
            const newImage = new Image();
            newImage.src = image;
            window[image] = newImage;
            newImage.onload = () => {
                imgSet.push(newImage)
                this.setState({ imgSet })
            }
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            subheadings: [
                { id: 1, title: 'API', desc: 'API' },
                { id: 2, title: '이미지 슬라이드', desc: 'Image_Slide' },
                { id: 3, title: '배너 슬라이드', desc: 'Banner_Slide' },
                { id: 4, title: '스크롤 UI', desc: 'Scroll_UI' },
                { id: 5, title: '팝업', desc: 'Popup' },
                { id: 6, title: '드래그 UI', desc: 'Drag_UI' },
                { id: 7, title: '내비게이션 UI', desc: 'Nav_UI' },
                { id: 8, title: '모바일 UI', desc: 'Mobile_UI' },
                // { id: 8, title: 'API', desc: 'API' },
            ],
            api: [
                { id: 1, title: 'API', desc: 'API' }
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
                { id: 2, title: 'final', desc: 'Banner-slide' },
            ],
            scrollUI: [
                { id: 1, title: 'Step 1', desc: 'Scroll-UI' },
                { id: 2, title: 'Step 2', desc: 'Scroll-UI' },
            ],
            popup: [
                { id: 1, title: 'Step 1', desc: 'Popup' },
            ],
            dragUI: [
                { id: 1, title: 'Step 1', desc: 'Drag-UI' },
            ],
            navUI: [
                { id: 1, title: 'Step 1', desc: 'Navigation-UI' },
            ],
            mobileUI: [
                { id: 1, title: 'Swipe', desc: 'Mobile-UI' },
            ],

            datafrLink: [{
                kind: null, num: null,
            }]
        }
    }
    linkKindnNum = (linkKindfrChild, linkNumfrChild,) => {
        this.setState({
            datafrLink: [{ kind: linkKindfrChild, num: linkNumfrChild }],
        })
    }
    render() {
        const Content = [this.state.api, this.state.imageSlide, this.state.bannerSlide, this.state.scrollUI, this.state.popup, this.state.dragUI, this.state.navUI, this.state.mobileUI,]
        return (
            <main className="Main">
                <Route path="/react-pages" exact={true}>
                    <Contents
                        menu={this.state.subheadings}
                        content={Content}
                        linkKindnNum={this.linkKindnNum}
                    >
                    </Contents>
                </Route>
                <Route path={"/react-pages/UIPage/"} render={() =>
                    <UIPage
                        menu={this.state.subheadings}
                        datafrLink={this.state.datafrLink}
                        content={Content}
                    />}>
                </Route >
            </main >
        )
    }
}

export default Main;