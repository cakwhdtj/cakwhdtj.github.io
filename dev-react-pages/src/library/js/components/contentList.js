import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";


class Subheading extends Component {
    render() {
        var subheadLists = [];
        var lists = [];
        var eachList = [];
        var menu = this.props.menu;
        var count = Object.keys(this.props).length;
        var i = 0;
        var j = 0;
        var k = 1;
        while (k < count) {
            var content = eval(`this.props.content${k}`);
            j = 0;
            while (j < content.length) {
                lists.push(
                    <li key={content[j].id}>
                        {/* {content[j].desc} {content[j].title} */}
                        <a href="../">{content[j].desc} {content[j].title}</a>
                    </li>);
                j = j + 1;
            }
            eachList.push(lists);
            lists = [];
            k = k + 1;
        }
        while (i < menu.length) {
            subheadLists.push(
                <div>
                    <h4 key={menu[i].id} className={"divNum" + menu[i].id}>{menu[i].title}</h4>
                    <ul>
                        {eachList[i]}
                    </ul>
                </div>
            );
            i = i + 1;
        }
        return (
            < div className="UI" >
                {subheadLists}
            </div >
        );
    }
}

export default Subheading;