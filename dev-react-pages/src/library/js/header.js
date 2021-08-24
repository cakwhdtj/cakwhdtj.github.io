import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <h1><a href="https://cakwhdtj.github.io/"><span className="hide_clipPath">KOOFLIX</span></a></h1>
                <h2>{this.props.title1}</h2>
            </header>
        );
    }
}


export default Header;
