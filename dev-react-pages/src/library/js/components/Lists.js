import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Lists() {
    const [_listing, setList] = useState();

    const data = () => {
        const dataObj = {
            uiName: ['API' , '이미지 슬라이드' , '배너 슬라이드', '스크롤 UI', '팝업', '드래그 UI', '내비게이션', '모바일 UI', 'Rotation'],
            desc: [ 'API', 'Image_Slide', 'Banner_Slide', 'Scroll_UI', 'Popup', 'Drag_UI', 'Nav_UI', 'Mobile_UI', 'Rotation_UI',],
            num: [1,6,2,2,1,1,1,1,1,]
        }
        for (key of Object.keys(dataObj)) {
            console.log(key, dataObj[key]);
        }
    }

    console.log()

    return (
        <div>
           

        </div>
    )
}


// class Contents extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             uiKind: null,
//             numOfKind: null,
//         }
//     }
//     dataFromLinks = (uiKind, numOfKind,) => {
//         this.props.linkKindnNum(uiKind, numOfKind,);
//         this.setState({
//             uiKind: uiKind,
//             numOfKind: numOfKind,
//         })
//     }
//     // onClick={() => this.dataFromLinks(kind, j, totalNum)} 
//     render() {
//         var subheadLists = [];
//         var lists = [];
//         var eachList = [];
//         var menu = this.props.menu;
//         var count = menu.length;
//         var i = 0;
//         for (let k = 0; k < count; k++) {
//             var content = this.props.content[k];
//             let kind = function () {
//                 return menu[k].desc;
//             }();
//             for (let j = 0; j < content.length; j++) {
//                 lists.push(
//                     <li key={content[j].id}>
//                         <Link to={"/react-pages/UIPage/" + kind + "_" + (j + 1)} onClick={() => this.dataFromLinks(kind, j)} >
//                             {content[j].desc} {content[j].title}
//                         </Link>
//                     </li >
//                 );
//             }
//             eachList.push(lists);
//             lists = [];
//         }
//         while (i < menu.length) {
//             subheadLists.push(
//                 <div key={menu[i].id}>
//                     <h4 key={menu[i].id} className={"divNum" + menu[i].id}>{menu[i].title}</h4>
//                     <ul>
//                         {eachList[i]}
//                     </ul>
//                 </div>
//             );
//             i = i + 1;
//         }
//         return (
//             < div className="UI">
//                 {subheadLists}
//             </div >
//         );
//     }
// }

export default Lists;