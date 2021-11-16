import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../../../fa/css/all.min.css'
// import $ from 'jquery'

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

class API1compo extends Component {
    componentDidMount() {

    }
    render() {

        return (
            <div id="map">hi</div>
        )
    }
}


export default APIPractice;