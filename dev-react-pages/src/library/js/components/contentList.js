import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uiKind: null,
            numOfKind: null,
            totalNumofList: null,
        }
    }
    dataFromLinks = (uiKind, numOfKind, totalNum) => {
        this.props.linkKindnNum(uiKind, numOfKind, totalNum);
        this.setState({
            uiKind: uiKind,
            numOfKind: numOfKind,
            totalNumofList: totalNum,
        })
    }
    render() {
        var subheadLists = [];
        var lists = [];
        var eachList = [];
        var menu = this.props.menu;
        var count = menu.length;
        var i = 0;
        var totalNum = 0;
        for (let k = 0; k < count; k++) {
            var content = eval(`this.props.content${k + 1}`);
            let kind = function () {
                return menu[k].desc;
            }();
            for (let j = 0; j < content.length; j++) {
                totalNum = totalNum + 1;
                lists.push(
                    <li key={content[j].id}>
                        <Link to={"/react-pages/UIPage/" + kind + "_" + (j + 1)} onClick={() => this.dataFromLinks(kind, j, totalNum)} >
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
            < div className="UI">
                {subheadLists}
            </div >
        );
    }
}

export default Contents;