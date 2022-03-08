import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import WhrIam from './components/test'

function Header () {

    // const [title , setTitle] = useState("");
    // const getURL = useLocation().pathname.replace("/","_").replace("/","_").replace("/","_");
    // let newTitle = () => {
    //     let newTitle = getURL.replace(/_/g, " ");
    //     getURL === "_react-pages" ? newTitle = "Library" : newTitle = newTitle.replace("react-pages", "");
    //     return newTitle;
    // }
    // useEffect(()=>{
    //     setTitle(newTitle);
    // },[newTitle]);
    return (
        <header className="Header">
            <h1><a href="https://cakwhdtj.github.io/"><span className="hide_clipPath">KOOFLIX</span></a></h1>
            <h2><WhrIam getTitle={true} /></h2>
        </header>
    );
}


export default Header;
