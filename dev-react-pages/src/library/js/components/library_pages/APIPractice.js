/*global kakao*/
import React, { Component } from "react";
class APIPractice extends Component {
    componentDidMount() {
        const script = document.createElement('script');
        script.async = true;
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=7ec9d55155d07a25881b3fa27298d6ed&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                let el = document.getElementById('map');
                let map = new kakao.maps.Map(el, {
                    center: new kakao.maps.LatLng(33.450701, 126.570667)
                });
            });
        };
    }
    render() {
        // var container = document.getElementById('map');
        // var options = {
        //     center: new kakao.maps.LatLng(33.450701, 126.570667),
        //     level: 3
        // };
        // var map = new kakao.maps.Map(container, options);
        return (
            <div className="api_practice">
                <div id="map">
                </div>
            </div>

        )
    }
}

export default APIPractice;