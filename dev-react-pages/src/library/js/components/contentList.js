import React, { Component } from 'react';

class Subheading extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         imageSlide: [
    //             { id: 1, title: 'step', desc: 'imgae-slide' },
    //             { id: 2, title: 'step', desc: 'imgae-slide' },
    //             { id: 3, title: 'step', desc: 'imgae-slide' },
    //             { id: 4, title: 'step', desc: 'imgae-slide' },
    //             { id: 5, title: 'step', desc: 'imgae-slide' },
    //             { id: 6, title: 'step', desc: 'imgae-slide' },
    //             { id: 7, title: 'step', desc: 'imgae-slide' },
    //             { id: 8, title: 'step', desc: 'imgae-slide' },
    //             { id: 9, title: 'step', desc: 'imgae-slide' },
    //         ],
    //     }
    // }
    render() {
        var subheadLists = [];
        var lists = [];
        var menu = this.props.menu;
        var content = this.props.content1
        var count = Object.keys(this.props).length;
        var i = 0;
        var j = 0;
        var k = 1;

        while (k < count) {
            k = k + 1;
            while (j < content.length) {
                lists.push(<p key={content[j].id}>{content[j].title}</p>);
                j = j + 1;
            }
        }
        // console.log()

        while (i < menu.length) {
            subheadLists.push(
                <div>
                    <h4 key={menu[i].id} className={"divNum" + menu[i].id}>{menu[i].title}</h4>
                    <ul>
                        <li>{lists}</li>
                    </ul>
                </div>);
            i = i + 1;
        }
        // console.log(content);
        return (
            < div className="UI" >
                {subheadLists}
            </div >
        );
    }
}

export default Subheading;