import './App.css';
import { BrowserRouter, Link, Route, Routes, Switch } from 'react-router-dom';
import Main from './components/Main';

const hrPrugio = () => {

  return (
    <BrowserRouter>
      <div className="hrPrugio">
        <a href="#main" id="skipNav" onClick={(e) => {
          e.preventDefault();
          const mainOffsetTop = document.querySelector('main').offsetTop;
          window.scrollTo({ top: mainOffsetTop, behavior: 'smooth' });
        }}>본문으로</a>
        <header className="header">
            <h1 className='logo'>
              <Link to="/">
                <span className='hide_clipPath'>푸르지오로고</span>
              </Link>
            </h1>
          <nav>
            <ul>
              <li><h2>사업개요</h2></li>
              <li><h2>입지환경</h2></li>
              <li><h2>상품안내</h2></li>
              <li><h2>프리미엄</h2></li>
              <li><h2>클럽포시즌</h2></li>
              <li className='navCall'><h2>대표번호</h2></li>
            </ul>
          </nav>
        </header>
        <main>
          <img alt='배경잎장식' src="http://baekwoonlakeprugio.com/theme/grape/img/leaf.svg" className="m-leaf"></img>
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

export default hrPrugio;
