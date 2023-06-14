import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Env from './components/Env';
import Merchinfo from './components/Merchinfo';

const HrPrugio = () => {
  const [showElement, setShowElement] = useState(false);
  const [isOn, setIsOn] = useState(false);

  const addOn = () => {
    const element = document.getElementById('bars');
    element.classList.toggle('on');
    setIsOn(prevState => !prevState)
  }

  useEffect(() => {
    const handleClick = () => {
      window.scrollTo(0, 0);
    };
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setShowElement(windowWidth < 720);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleClick);
      });
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="hrPrugio">
        <a href="#main" id="skipNav" onClick={(e) => {
          e.preventDefault();
          const mainOffsetTop = document.querySelector('main').offsetTop;
          window.scrollTo({ top: mainOffsetTop, behavior: 'smooth' });
        }}>본문으로</a>
        <header className="header">
          <div className='wrapper'>
            <h1 className='logo'>
              <Link className='nav-link' to="/">
                <span className='hide_clipPath'>푸르지오로고</span>
              </Link>
            </h1>
            {showElement && 
              <div id='bars' onClick={addOn}>
                <span className='hide_clipPath'>메뉴</span>
                <div>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>}
            <nav className={isOn ? 'on' : ''}>
              <ul>
                <Link className='nav-link' to="/Env"><li><h2 onClick={addOn}>입지환경</h2></li></Link>
                <Link className='nav-link' to="/Merchinfo"><li><h2 onClick={addOn}>상품안내</h2></li></Link>
                <Link className='nav-link' to="/"><li><h2 onClick={addOn}>프리미엄</h2></li></Link>
                <Link className='nav-link' to="/"><li><h2 onClick={addOn}>클럽포시즌</h2></li></Link>
              </ul> 
            </nav>
          </div>
        </header>
        <main>
          <Routes>
            <Route exact path='/' Component={Main}></Route>
            <Route exact path='/Env' Component={Env}></Route>
            <Route exact path='/Merchinfo' Component={Merchinfo}></Route>
          </Routes>
        </main>
        <footer>
          <p>에이치알파트너스 &copy; All right reserved.</p>
          <address>
            경기도 화성시 동탄첨단산업1로 27, 금강펜트리움 ix타워 B817호<br />
            Tel. 031-8050-0042 <br />
            E-mail. hrpartners2020@naver.com
          </address>
        </footer>
      </div>
  </BrowserRouter>
  );
}

export default HrPrugio;
