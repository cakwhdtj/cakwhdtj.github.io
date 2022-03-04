import React, { Component } from 'react';
import { Route } from 'react-router';
import NavUI from './components/library_pages/Nav_UI';

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <h1><a href="https://cakwhdtj.github.io/"><span className="hide_clipPath">KOOFLIX</span></a></h1>
                <h2>{this.props.title}</h2>
                <Route path={"/react-pages/UIPage/Nav_UI_1"}>
                    <NavUI />
                </Route>
            </header>
        );
    }
}


export default Header;
