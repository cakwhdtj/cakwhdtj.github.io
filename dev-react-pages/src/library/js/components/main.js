import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Lists from './Lists';
import UIPage from './UIpage';
import WhrIam from './WhereGetter';

function Main({homepage}) {
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
            {uiName: '아무거나', desc: '아무거나' , steps:['Pong', 'Jump', 'Random']},
        ];
        setList(data);
    }
    useEffect(()=>{
        setData();
    },[]);
    return <main className="Main">
            <Route path={homepage} exact={true}>
                {_listing.map((list) => (
                    <Lists 
                    key={list.desc}
                    uiName={list.uiName}
                    desc={list.desc}
                    steps={list.steps}
                    />     
                ))}  
            </Route>
            <Switch>
                <Route path={WhrIam(false)} key={WhrIam(false)}>
                        <UIPage ui={_listing} />
                </Route>
            </Switch>   
        </main>
}

export default Main;