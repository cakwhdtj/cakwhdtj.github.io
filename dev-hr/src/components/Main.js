import React from "react";
import ReactPlayer from 'react-player';



const Main = () => {
  const videoUrl = 'https://player.vimeo.com/video/745297131?h=ee306f1cb8&loop=1&byline=0&title=0&autoplay=1&muted=1';

    return (
        <div>
            <section id="section1">
                <div className="react-player-container">
                <div className="react-player-wrapper">
                    <ReactPlayer 
                    className="react-player"
                    url={videoUrl}
                    playing
                    loop
                    muted
                    controls={false}
                    width="100%"
                    height="100%" />
                </div>
                </div>
            </section>
            <section id="section2">
                <div className="sTitle">
                    <h3>어쩌구 저쩌구 멘트</h3>
                </div>
                <div className="mainVisual">
                    <img alt="백운호수푸르지오메인이미지" src="http://baekwoonlakeprugio.com/theme/grape/img/view-map3.jpg"></img>
                </div>
            </section>
        </div>
    );
}

export default Main;