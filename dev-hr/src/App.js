import './App.css';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './components/Main';

const HrPrugio = () => {

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
              <Link to="/">
                <span className='hide_clipPath'>푸르지오로고</span>
              </Link>
            </h1>
            <nav>
              <ul>
                <Link to="/"><li><h2>입지환경</h2></li></Link>
                <Link to="/"><li><h2>상품안내</h2></li></Link>
                <Link to="/"><li><h2>프리미엄</h2></li></Link>
                <Link to="/"><li><h2>클럽포시즌</h2></li></Link>
                <li className='navCall'><h2>대표번호</h2></li>
              </ul>
            </nav>
          </div>
        </header>
        <main>
          <Routes>
            <Route exact path='/' Component={Main}></Route>

          </Routes>
        </main>
        <footer>
          dddd
        </footer>
      </div>
  </BrowserRouter>
  );
}

export default HrPrugio;
