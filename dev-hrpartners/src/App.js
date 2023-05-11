import './App.css';
import { useState, useEffect } from 'react';

const App = (props) => {
  const [showContent, setShowContent] = useState(true);
  const [deltaY, setDeltaY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const newDeltaY = (position / window.innerHeight) * 100;
      setShowContent(position < window.innerHeight);
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
        <div className={`bg-image${showContent ? ' fade-in' : ''}`}></div>
        <div className="logoDiv" style={{ left: `-${deltaY}%` }}>
          <h1 className={`logo${showContent ? ' fade-in-left' : ''}`}>logo</h1>
        </div>
        <div className={`textDiv${showContent ? ' fade-in-top' : ''}`} style={{ top: `-${deltaY}%` }}>
          <div className={`${showContent ? ' fade-in-top' : ''}`}>아무나 할 수 있는 곳이 아닌,</div>
          <div className={`${showContent ? ' fade-in-top' : ''}`}>아무도 할 수 없는 곳에 있는</div>
          <div className={`${showContent ? ' fade-in-top' : ''}`}>최고의 파트너</div>
          <div className={`${showContent ? ' fade-in-top' : ''}`}>HR PARTNERS</div>
        </div>
      </div>
      <nav>
        <ul>
          <li className='on'><span>CEO Message<br></br><i>인사말</i></span></li>
          <li><span>Orgainzatin<br></br><i>조직도</i></span></li>
          <li><span>Business Scope<br></br><i>사업영역</i></span></li>
          <li><span>Business History<br></br><i>실적안내</i></span></li>
          <li><span></span></li>
        </ul>
      </nav>
      <main>
        <section id='sectoin1'>
          <div>
            <p>안녕하십니까 ㈜ 에이치알파트너스 대표이사 이해리 입니다.</p>
            <p>
              ㈜ 에이치알파트너스는 클라이언트 고객들에게 최고의 성과 
              그리고 맞춤형 서비스를 제공하기 위해 노력하며 창조적인 변화, 지속적인 발전으로
              부동산 및 분양 업계를 선도하는 분양대행사로 자리매김 하고 있습니다.

              저희 임직원은 모든 역량을 결집하여 최상의 컨디션과 시스템을 확립하고 ㈜ 에이치알파트너스를
              선택해주신 클라이언트의 사업에 있어 최선의 노력과 최고의 성과로 보답 드리고자 끝없는 도전,
              뜨거운 열정을 내세워 클라이언트의 선택이 완벽하게 옳았다는 것을 증명하겠습니다.

              고객의 만족과 신뢰를 최상의 가치로 삼고 계속해서 진화하는 분양 사업이 트렌드에 
              발맞추어 분양대행 업계의 뉴 패러다임을 앞장서겠습니다.
            </p>
            <p></p>
          </div>
        </section>
        <section id='section2'> <div>2</div> </section>
        <section id='section3'> <div>3</div> </section>
        <section id='sectoin4'> <div>4</div> </section>
        <section id='sectoin5'> <div>5</div> </section>
      </main>
    </div>
  );
}

export default App;
