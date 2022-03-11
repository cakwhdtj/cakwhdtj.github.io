import React, { } from 'react';
import WhrIam from './components/WhereGetter'
import NavUI from './components/library_pages/Nav_UI';
import { Route } from 'react-router-dom';

function Header () {
    return (
        <header className="Header">
            <h1><a href="https://cakwhdtj.github.io/"><span className="hide_clipPath">KOOFLIX</span></a></h1>
            <h2><WhrIam getTitle={true} /></h2>
            <Route path="/react-pages/Nav_UI/1">
                <NavUI />
            </Route>
        </header>
    );
}


export default Header;
