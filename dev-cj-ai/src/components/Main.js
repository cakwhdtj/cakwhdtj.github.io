import React, { useEffect, useState } from 'react';

import Header from './Header'
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Footer from './Footer';
import { Link } from 'react-router-dom';

//section1 overflow 해결
// section5 버튼 hover

const Main = (props) => {
    const menu_items = [
        'ABOUT',
        'VISION&MISSION',
        'RESEARCH AREAS',
        'CAREERS',
        'CONTACT US'
    ];
    const [scroll, getScroll] = useState(0);
    const [width, getWidth] = useState(0);
    const dataSet = {
        scroll : scroll,
        width : width,
    }
    let BorW = String;
    (dataSet.scroll < 1040) ? BorW = 'white' : BorW = 'black';
    const fontBorW = {color : BorW}

    return (
        <div style={fontBorW}>
        <Fns getScroll={getScroll} getWidth={getWidth}/>
        <Link id='skipNav' to="#section0">본문으로</Link>
        <Header menuList={menu_items} dataSet={dataSet} borw={BorW} />
        <Section1 s1Title={menu_items} borw={BorW} />
        <Section2 s2Title={menu_items} dataSet={dataSet} borw={BorW}/>
        <Section3 s3Title={menu_items} />
        <Section4 s4Title={menu_items} />
        <Section5 s5Title={menu_items} />
        <Section6 s6Title={menu_items} />
        <Footer />
        </div>
    );
  };

  const Fns = (props) => {
    const [scroll , checkScroll] = useState({
        scrollY : window.scrollY,
        scrollX : window.scrollX
    });
    const [winSize , setWinSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    // handlers
    const handleScroll = () => {checkScroll({scrollY : window.scrollY});};
    const handleResize = () => {
        setWinSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
    };
    useEffect(()=>{
        window.addEventListener('scroll' , handleScroll);
        window.addEventListener('resize' , handleResize);
        return () => {
            window.removeEventListener('scroll' , handleScroll);
            window.removeEventListener('resize', handleResize);
        }
    }, []);  
   useEffect(()=>{
    props.getScroll(scroll.scrollY);
    props.getWidth(winSize.width);
   });
  }
  
  export default Main;