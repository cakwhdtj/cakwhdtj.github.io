/*global kakao*/
import React, { Component } from "react";
import getInfo from "../UiInfoGetter";

class API extends Component {
    componentDidMount() {
        const script = document.createElement('script');
        script.async = true;
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=7ec9d55155d07a25881b3fa27298d6ed&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                let el = document.getElementById('map');
                let options = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3
                };
                let map = new kakao.maps.Map(el, options);
            });
        };
    }
    
    render() {
        getInfo(this.props);
        return (
            <div className="api_map">
                <div id="map">
                </div>
            </div>

        )
    }
}

export default API;