import React, { Component } from 'react';

class Contlist extends Component {
    render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
            lists.push(<li key={data[i].id}><a href={"/contentlist/" + data[i].id}>{data[i].title}</a></li >);
            i = i + 1;
        }
        return (
            <ul className="Contlist">
                {lists}
            </ul>
        );
    }
}

export default Contlist;