import './App.css';
import { useState, useEffect } from 'react';

const App = (props) => {
  const [showHeader, setShowHeader] = useState(true);
  const [showContent, setShowContent] = useState(true);
  const [showBg, setShowBg] = useState(true);
  const [deltaY, setDeltaY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const newDeltaY = (position / window.innerHeight) * 100;
      setShowHeader(position < window.innerHeight);
      setShowContent(position < window.innerHeight);
      setShowBg(position < window.innerHeight); 
      setDeltaY(newDeltaY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <a href="#main" id="skipNav" onClick={(e) => {
      e.preventDefault();
      const mainOffsetTop = document.querySelector('main').offsetTop;
      window.scrollTo({ top: mainOffsetTop, behavior: 'smooth' });
    }}>본문으로</a>
      <div className={`landingEffect${showContent ? ' fade-in' : ''}`}>
        <div className={`bg-image${showBg ? ' fade-in' : ''}`}></div>
        <div className="logoDiv" style={{ left: `-${deltaY}%` }}>
          <h1 className={`logo${showHeader ? ' fade-in-left' : ''}`}>logo</h1>
        </div>
        <div className={`textDiv${showContent ? ' fade-in-top' : ''}`} style={{ top: `-${deltaY}%` }}>
          <div className={`${showContent ? ' fade-in-top' : ''}`}>아무나 할 수 있는 곳이 아닌,</div>
          <div className={`${showContent ? ' fade-in-top' : ''}`}>아무도 할 수 없는 곳에 있는</div>
          <div className={`${showContent ? ' fade-in-top' : ''}`}>최고의 파트너</div>
          <div className={`${showContent ? ' fade-in-top' : ''}`}>HR PARTNERS</div>
        </div>
      </div>
      <nav>
        <ul style={{}}>
          <li>인사말</li>
          <li>사업자등록증</li>
          <li>조직도</li>
          <li>사업영역</li>
          <li>실적안내</li>
        </ul>
      </nav>
      <main>
        <section id='sectoin1'>1</section>
        <section id='section2'>2</section>
        <section id='section3'>3</section>
        <section id='sectoin4'>4</section>
        <section id='sectoin5'>5</section>
      </main>
    </div>
  );
}

export default App;
