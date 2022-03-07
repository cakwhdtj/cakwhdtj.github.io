import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Lists from './Lists';


import Random from './Random';

function Main() {
    const [_listing, setList] = useState([]);
    const setData = () => {
        const data = [
            {uiName: 'API', desc: 'API' , steps:[1]},
            {uiName: '이미지 슬라이드', desc: 'Image_Slide' , steps:[1,2,3,4,'Drag','Final']},
            {uiName: '배너 슬라이드', desc: 'Banner_Slide' , steps:[1,'Final']},
            {uiName: '스크롤 UI', desc: 'Scroll_UI' , steps:[1]},
            {uiName: '팝업', desc: 'Popup' , steps:[1,2]},
            {uiName: '드래그 UI', desc: 'Drag_UI' , steps:[1]},
            {uiName: '내비게이션 UI', desc: 'Nav_UI' , steps:[1]},
            {uiName: '모바일 UI', desc: 'Mobile_UI' , steps:['Swipe']},
            {uiName: 'Rotation', desc: 'Rotation_UI' , steps:['Rotation']},
        ];
        setList(data);
    }
    useEffect(()=>{
        setData();
    },[]);
    return <Router>
            <Switch>
                <Route path="/">
                    <main className="Main">
                        {_listing.map((list) => (
                            <Lists 
                            key={list.desc}
                            uiName={list.uiName}
                            desc={list.desc}
                            steps={list.steps}
                            />
                            ))}                    
                    </main>
                </Route>
                <Route path="/API/1">
                    <Random></ Random>
                </Route>
            </Switch>
             </Router>
}

export default Main;