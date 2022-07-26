import React, { useState } from "react";
import { Link } from "react-router-dom";
import SVG from "./SvgSet";

const Header = (props) => {
  let winWidth = props.dataSet.width;
  let scroll = props.dataSet.scroll;
  const [isOn , toggleOn] = useState(false);
  const handleClick = () => {
    isOn ? toggleOn(false) : toggleOn (true);
  }
  if (winWidth > 1024 && isOn) {toggleOn(false)};

  // eslint-disable-next-line
  const headerBg = () => {
    // eslint-disable-next-line
    let result = 'transparent'
    // eslint-disable-next-line
    {(scroll > 10) ? result = 'black' : result = result}
    // eslint-disable-next-line
    {(scroll > 1040) ? result = '#fff' : result = result}
    // eslint-disable-next-line
    return result
  } 
  const fontSizer = () => {
    let result = (winWidth/1512)*100;
    // eslint-disable-next-line
      (result > 100) ? result = 100 : result = result;
    return result;
  }
  const ulStyle = {
    fontSize : `${fontSizer()}%`,
    color: `${props.borw}`,
  }
  const headerStyle = {
    background : `${(isOn && (winWidth < 1024)) ? "#fff" : headerBg()}`,
    boxShadow : `${(scroll > 10) ? 'rgb(0 0 0 / 12%) 1px 1px 1px 1px' : 'none'}`
  }
  const lists = props.menuList;
  const headerList = 
          lists.map((lists,index) => 
            <li key={index +"_"+lists}><Link to={`#section`+(index+2)}>{lists}</Link></li>);
  const btn = (on) => 
          <div className="on">
            <button className={`${isOn ? "on" : ""}`} id="headerCloseBtn" onClick={()=>handleClick()}>
              <span></span>
              <i className="hide_clipPath">닫기</i>
              <span></span>
            </button>
            <ul className={`${isOn ? "on" : ""}`} style={ulStyle}>
              {headerList}
            </ul>
          </div>
      return (
      <header style={headerStyle}>
        <div id="headerContainer">
          <h1>
            <Link to="#">
              <SVG type={'logo'} size={0} circle={[]} BorW={isOn ? "#000" : props.borw}/>
            </Link>
          </h1>
          <nav id="gnb">
            {(winWidth > 1024) ? 
              <ul style={ulStyle}>
              {headerList}
              </ul> : null}
            {(winWidth <= 1024) ? btn("on") : null}
          </nav>
        </div>
      </header>
    );
  };
  
export default Header;