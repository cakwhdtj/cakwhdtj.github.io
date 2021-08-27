import React, { Component } from 'react';

class ContentList extends Component {
    render() {
        var lists = [];
        var menu = this.props.menu;
        var i = 0;
        while (i < menu.length) {
            lists.push(<li key={menu[i].id}><a href={"/contentlist/" + menu[i].id}>{menu[i].title}</a></li >);
            i = i + 1;
        }
        return (
            <ul className="ContentList">
                {lists}
            </ul>
        );
    }
}

export default ContentList;