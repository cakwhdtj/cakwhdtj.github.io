import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uiKind: null,
            numOfKind: null,
        }
    }
    dataFromLinks = (uiKind, numOfKind,) => {
        this.props.linkKindnNum(uiKind, numOfKind,);
        this.setState({
            uiKind: uiKind,
            numOfKind: numOfKind,
        })
    }
    // onClick={() => this.dataFromLinks(kind, j, totalNum)} 
    render() {
        var subheadLists = [];
        var lists = [];
        var eachList = [];
        var menu = this.props.menu;
        var count = menu.length;
        var i = 0;
        for (let k = 0; k < count; k++) {
            var content = this.props.content[k];
            let kind = function () {
                return menu[k].desc;
            }();
            for (let j = 0; j < content.length; j++) {
                lists.push(
                    <li key={content[j].id}>
                        <Link to={"/react-pages/UIPage/" + kind + "_" + (j + 1)} onClick={() => this.dataFromLinks(kind, j)} >
                            {content[j].desc} {content[j].title}
                        </Link>
                    </li >
                );
            }
            eachList.push(lists);
            lists = [];
        }
        while (i < menu.length) {
            subheadLists.push(
                <div key={menu[i].id}>
                    <h4 key={menu[i].id} className={"divNum" + menu[i].id}>{menu[i].title}</h4>
                    <ul>
                        {eachList[i]}
                    </ul>
                </div>
            );
            i = i + 1;
        }
        return (
            < div className="UI">
                {subheadLists}
            </div >
        );
    }
}

export default Contents;