import './App.css';
import { useState, useEffect } from 'react';

const App = (props) => {
  const [showHeader, setShowHeader] = useState(true);
  const [showContent, setShowContent] = useState(true);
  const [showBg, setShowBg] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const logoDivOffset = document.querySelector('.logoDiv').offsetTop;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isVisible = scrollTop > logoDivOffset - window.innerHeight;
      setShowHeader(isVisible);
      setShowContent(isVisible);
      setShowBg(scrollTop <= logoDivOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <div className={`landingEffect`}>
        <div className={`bg-image${showBg ? ' fade-in' : ''}`}></div>
        <div className="logoDiv">
          <h1 className={`logo${showHeader ? ' fade-in-left' : ''}`}>logo</h1>
        </div>
        <div className={`textDiv${showContent ? ' fade-in-top' : ''}`}>
          <div className={`${showContent ? ' fade-in-top' : ''}`}>아무나 할 수 있는 곳이 아닌,</div>
          <div className={`${showContent ? ' fade-in-top' : ''}`}>아무도 할 수 없는 곳에 있는</div>
          <div className={`${showContent ? ' fade-in-top' : ''}`}>최고의 파트너</div>
          <div className={`${showContent ? ' fade-in-top' : ''}`}>HR PARTNERS</div>
        </div>
      </div>
      <header>
        <nav>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </nav>
      </header>
      <body>
        <main>ddd</main>
      </body>
    </div>
  );
}

export default App;
