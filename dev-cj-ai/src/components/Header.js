import React , {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import SVG from "./SvgSet";

const Header = (menuList) => {
    const [winSize , setWinSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight
    });
    const handleResize = () => {
      setWinSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    useEffect(()=> {
      window.addEventListener('resize' , handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }, []);
  const style = {
    fontSize : `${(winSize.width/1512)*100}%`
  }
  console.log((winSize.width/1512)*100)
  const lists = menuList.menuList;
  const headerList = 
    lists.map((lists,index) => 
      <li key={index +"_"+lists}><Link to={`#section`+(index+2)}>{lists}</Link></li>);
  const btn = (on) => <button className={on} id="headerCloseBtn" onClick={()=>console.log('hi')}><span></span><i className="hide_clipPath">닫기</i><span></span></button>
      return (
      <header>
        <div id="headerContainer">
          <h1><Link to="#section0">{SVG('logo',0,[])}</Link></h1>
          <nav id="gnb">
            <ul style={style}>
              {headerList}
            </ul>
            {(winSize.width < 1024) ? btn("on") : btn("")}
          </nav>
        </div>
      </header>
    );
  };
  
export default Header;