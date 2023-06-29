import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Env from './components/Env';
import Merchinfo from './components/Merchinfo';
import Service from './components/Premium';
import Club from './components/Club';

const HrPrugio = () => {
  const [showElement, setShowElement] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const addOn = () => {setIsOn(prevState => !prevState);}

  useEffect(() => {
    const handleClick = () => {window.scrollTo(0, 0);};
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setShowElement(windowWidth < 720);
      setIsOn(false);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setIsVisible(scrollTop > 0);
    };
    window.addEventListener('scroll', handleScroll);

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', handleClick);
    });
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleClick);
      });
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
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
              <Link className='nav-link' to="/hr-prugio/">
                <span className='hide_clipPath'>푸르지오로고</span>
              </Link>
            </h1>
            <nav className={isOn ? 'on' : ''}>
              <ul>
                <Link className='nav-link' to="/hr-prugio/Env"><li><h2 onClick={isOn ? addOn : null}>입지{showElement && <br />}환경</h2></li></Link>
                <Link className='nav-link' to="/hr-prugio/Merchinfo"><li><h2 onClick={isOn ? addOn : null}>상품{showElement && <br />}안내</h2></li></Link>
                <Link className='nav-link' to="/hr-prugio/Service"><li><h2 onClick={isOn ? addOn : null}>특화{showElement && <br />}서비스</h2></li></Link>
                <Link className='nav-link' to="/hr-prugio/Club"><li><h2 onClick={isOn ? addOn : null}>클럽{showElement && <br />}포시즌</h2></li></Link>
                <li id='call'>
                  <h2>
                    <a href="tel:1600-6297">
                    <span class="material-symbols-outlined">call</span><br />1600-6297</a>
                  </h2>
                </li>
              </ul> 
            </nav>
          </div>
        </header>
        <main>
          <Routes>
            <Route exact path='/hr-prugio/' Component={Main}></Route>
            <Route exact path='/hr-prugio/Env' Component={Env}></Route>
            <Route exact path='/hr-prugio/Merchinfo' Component={Merchinfo}></Route>
            <Route exact path='/hr-prugio/Service' Component={Service}></Route>
            <Route exact path='/hr-prugio/Club' Component={Club}></Route>
          </Routes>
          <button id='toTop'
            className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >맨위로</button>
          <div className="register">
            <iframe title='관심고객등록' src='https://naver.me/5bdi4yfd' height='800px' scrolling='auto'></iframe>
          </div>
        </main>
        <footer>
          <address>
            에이치알파트너스 <br />
            경기도 화성시 동탄첨단산업1로 27, 금강펜트리움 ix타워 B817호<br />
            Tel. 031-8050-0042 <br />
            E-mail. hrpartners2020@naver.com
          </address>
          <p>백운호수 푸르지오 숲속의 아침 스위트. &copy; All right reserved.</p>
        </footer>
      </div>
  </BrowserRouter>
  );
}

export default HrPrugio;
