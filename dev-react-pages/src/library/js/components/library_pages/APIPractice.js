import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../../../fa/css/all.min.css'
import Img1 from '../../../img/image-slide/slide-image-01.jpg';
import Img2 from '../../../img/image-slide/slide-image-02.jpg';
import Img3 from '../../../img/image-slide/slide-image-03.jpg';
import Img4 from '../../../img/image-slide/slide-image-04.jpg';
import Img5 from '../../../img/image-slide/slide-image-05.jpg';
import Img6 from '../../../img/image-slide/slide-image-06.jpg';
import Img7 from '../../../img/image-slide/slide-image-07.jpg';
import Img8 from '../../../img/image-slide/slide-image-08.jpg';
import Img9 from '../../../img/image-slide/slide-image-09.png';
import Img10 from '../../../img/image-slide/slide-image-10.jpg';
import Img11 from '../../../img/image-slide/slide-image-11.jpg';
import Img12 from '../../../img/image-slide/slide-image-12.jpg';
import Img13 from '../../../img/image-slide/slide-image-13.jpg';
import Img14 from '../../../img/image-slide/slide-image-14.jpg';
import Img15 from '../../../img/image-slide/slide-image-15.jpg';
import ImgBtnLeft from '../../../img/image-slide/btn-left.png';
import ImgBtnRight from '../../../img/image-slide/btn-right.png';
// import jQuery from 'jquery';
import $ from 'jquery'

class APIPractice extends Component {
    render() {
        var _props = this.props.props;
        var _set = [];
        var funcSet = [API1(),]
        function show() {
            for (let i = 0; i < _props.content[0].length; i++) {
                _set.push(
                    <Route key={i} path={"/react-pages/UIPage/" + _props.datafrLink[0].kind + "_" + (i + 1)}>
                        <div>{funcSet[i]}</div>
                    </Route>
                );
            }
            return (<div>{_set}</div>)
        }
        return show();
    }
}
const API1 = () => {
    return (
        <API1compo></API1compo>
    );
}
// const BS2 = () => {
//     return (
//         <BS2compo></BS2compo>
//     );
// }
class API1compo extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div>hi</div>
        )
    }
}


export default APIPractice;