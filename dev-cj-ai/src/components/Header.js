import React from "react";
import { Link } from "react-router-dom";
import SVG from "./SvgSet";

const Header = (menuList) => {
  const lists = menuList.menuList
  const headerList = 
    lists.map((lists,index) => 
      <li key={index +"_"+lists}><Link to={`#section`+(index+2)}>{lists}</Link></li>)
    return (
      <header>
        <h1><Link to="#section0">{SVG('logo',0,[])}</Link></h1>
        <nav id="gnb">
          <ul>
            {headerList}
          </ul>
          <button><span></span>닫기<span></span></button>
        </nav>
      </header>
    );
  };
  
export default Header;