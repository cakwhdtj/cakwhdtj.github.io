import React, { } from 'react';
import WhrIam from './components/WhereGetter'

function Header () {
    return (
        <header className="Header">
            <h1><a href="https://cakwhdtj.github.io/"><span className="hide_clipPath">KOOFLIX</span></a></h1>
            <h2><WhrIam getTitle={true} /></h2>
        </header>
    );
}


export default Header;
