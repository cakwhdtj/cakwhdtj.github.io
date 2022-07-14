import React , {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import SVG from "./SvgSet";

const Header = (props) => {
  let winWidth = props.dataSet.width;
  let scroll = props.dataSet.scroll;
  const headerBg = () => {
    let result = 'transparent'
    {(scroll > 10) ? result = 'black' : result = result}
    {(scroll > 1040) ? result = 'white' : result = result}
    return result
  }
  const ulStyle = {
    fontSize : `${(winWidth/1512)*100}%`,
    color: `${props.borw}`,
  }
  const headerStyle = {
    background : `${headerBg()}`,
    boxShadow : `rgb(0 0 0 / 12%) 1px 1px 1px 1px`
  }
  const lists = props.menuList;
  const headerList = 
          lists.map((lists,index) => 
            <li key={index +"_"+lists}><Link to={`#section`+(index+2)}>{lists}</Link></li>);
  const btn = (on) => 
          <button className={on} id="headerCloseBtn" onClick={()=>console.log('hi')}><span></span><i className="hide_clipPath">닫기</i><span></span></button>
  
      return (
      <header style={headerStyle}>
        <div id="headerContainer">
          <h1>
            <Link to="#">
              <SVG type={'logo'} size={0} circle={[]} BorW={props.borw}/>
            </Link>
          </h1>
          <nav id="gnb">
            <ul style={ulStyle}>
              {headerList}
            </ul>
            {(winWidth < 1024) ? btn("on") : btn("")}
          </nav>
        </div>
      </header>
    );
  };
  
export default Header;