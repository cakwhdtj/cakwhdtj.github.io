import React, { } from 'react';

import Header from './Header'
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Footer from './Footer';
import { Link } from 'react-router-dom';


const Main = () => {
    const menu_items = [
        'ABOUT',
        'VISION&MISSION',
        'RESEARCH AREAS',
        'CAREEERS',
        'CONTACT US'
    ];
    return (
        <div>
        <Link id='skipNav' to="#section0">본문으로</Link>
        <Header menuList={menu_items} />
        <Section1 s1Title={menu_items} />
        <Section2 s2Title={menu_items} />
        <Section3 s3Title={menu_items} />
        <Section4 s4Title={menu_items} />
        <Section5 s5Title={menu_items} />
        <Section6 s6Title={menu_items} />
        <Footer />
        </div>
    );
  };
  
  export default Main;