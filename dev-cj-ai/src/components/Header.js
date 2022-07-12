import React , {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import SVG from "./SvgSet";

const Header = (props) => {
  let winWidth = props.dataSet.width;
  const style = {
    fontSize : `${(winWidth/1512)*100}%`,
    color: `${props.borw}`
  }
  const lists = props.menuList;
  const headerList = 
    lists.map((lists,index) => 
      <li key={index +"_"+lists}><Link to={`#section`+(index+2)}>{lists}</Link></li>);
  const btn = (on) => <button className={on} id="headerCloseBtn" onClick={()=>console.log('hi')}><span></span><i className="hide_clipPath">닫기</i><span></span></button>
  
      return (
      <header>
        <div id="headerContainer">
          <h1>
            <Link to="#">
              <SVG type={'logo'} size={0} circle={[]} BorW={props.borw}/>
            </Link>
          </h1>
          <nav id="gnb">
            <ul style={style}>
              {headerList}
            </ul>
            {(winWidth < 1024) ? btn("on") : btn("")}
          </nav>
        </div>
      </header>
    );
  };
  
export default Header;