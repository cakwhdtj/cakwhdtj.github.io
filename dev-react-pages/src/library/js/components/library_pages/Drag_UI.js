import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import $ from 'jquery'

class DragUI extends Component {
    render() {
        var _props = this.props.props;
        var _set = [];
        var funcSet = [(Dr1()),]
        function show() {
            for (let i = 0; i < _props.content[5].length; i++) {
                _set.push(
                    <Route key={i} path={"/react-pages/UIPage/" + _props.datafrLink[0].kind + "_" + (i + 1)}>
                        <div>{funcSet[i]}</div>
                    </Route>
                );
                withRouter(_set[i]);
            }
            return (<div>{_set}</div>)
        }
        return show();
    }
}
const Dr1 = () => {
    return (
        <Dr1compo></Dr1compo>
    );
}
class Dr1compo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        setDrag('button.box1', false);
        setDrag('button.box2', true);
        function setDrag(selector, _isGoBack) {
            var $selector = $(selector);
            var startX = 0;
            var startY = 0;
            var delX = 0;
            var delY = 0;
            var offsetX = 0;
            var offsetY = 0;
            var device = ('ontouchstart' in window) ? 'mobile' : 'pc';
            var isBlocked = false;
            var isGoBack = _isGoBack

            if (device === 'pc') {
                $selector.on('mousedown', function (e) {
                    e.preventDefault();
                    startX = e.clientX;
                    startY = e.clientY;
                    offsetX = $(this).position().left;
                    offsetY = $(this).position().top;
                    $(document).on('mousemove', function (e) {
                        delX = e.clientX - startX;
                        delY = e.clientY - startY;
                        console.log(delX, delY)
                        if (Math.abs(delX) > 5 || Math.abs(delY) > 5) isBlocked = true;
                        $selector.css({ 'left': (offsetX + delX) + 'px', 'top': (offsetY + delY) + 'px' });
                    });
                    $(document).on('mouseup', function () {
                        $(document).off('mousemove mouseup');
                    });
                });
                $selector.on('click', (e) => {
                    if (isBlocked === true) {
                        e.preventDefault();
                        isBlocked = false;
                    } else if (isBlocked === false) {
                        if (isGoBack === true) {
                            window.history.back();
                        }
                    }
                });
            } else if (device === 'mobile') {
                $selector.on('touchstart', function (e) {
                    e.preventDefault();
                    startX = e.touches[0].clientX;
                    startY = e.touches[0].clientY;
                    offsetX = $(this).position().left;
                    offsetY = $(this).position().top;
                    $(document).on('touchmove', function (e) {
                        delX = e.touches[0].clientX - startX;
                        delY = e.touches[0].clientY - startY;
                        $selector.css({ 'left': (offsetX + delX) + 'px', 'top': (offsetY + delY) + 'px' });
                    });
                    $(document).on('touchend', function () {
                        $(document).off('touchmove touchend');
                    });
                });
            }
        }
    }
    render() {
        console.log(this.props)
        return (
            <div className="drag-box">
                <button className="box1">box1</button>
                <button className="box2">box2</button>
            </div>
        )
    }
}
export default DragUI;