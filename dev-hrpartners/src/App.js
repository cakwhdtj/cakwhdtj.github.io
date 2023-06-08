import './App.css';
import { useState, useEffect } from 'react';

const App = (props) => {
  const [showContent, setShowContent] = useState(true);
  const [deltaY, setDeltaY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [activeSection, setActiveSection] = useState(0); 

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    const handleScroll = () => {
      const position = window.scrollY;
      const newDeltaY = (position / window.innerHeight) * 100;
      setShowContent(position < window.innerHeight);
      setDeltaY(newDeltaY);
      setIsNavFixed(position > window.innerHeight);

      const sections = document.querySelectorAll('section');
      const sectionOffsets = Array.from(sections).map(
        (section) => section.offsetTop
      );
      const activeSectionIndex = sectionOffsets.findIndex(
        (offset, index) =>
          position >= offset - 70 &&
          position <= offset + sections[index].offsetHeight + 70
      );
      setActiveSection(activeSectionIndex);
    }; 

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll); 
    };  
  }, []);

  const isMobileView = windowWidth < 720;
  const navClassName = `${isMobileView ? 'mobile ' : ''}`;


  const handleNavClick = (sectionIndex) => {
    const sections = document.querySelectorAll('section');
    const sectionOffsets = Array.from(sections).map(
      (section) => section.offsetTop
    );
    const targetOffset = sectionOffsets[sectionIndex] + window.innerHeight;
    console.log(targetOffset)
    window.scrollTo({
      top: targetOffset,
      behavior: 'smooth',
    });
  };

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
      <main>
        <nav className={navClassName + `${isNavFixed ? 'fix' : ''}`}> 
          <ul>
            <li 
            className={activeSection === 0 ? 'on' : ''}
            onClick={() => handleNavClick(0)}
            >
              <span>
                <i className={isMobileView ? 'mobile' : ''}>CEO Message</i>
                <br></br>
                <i className={isMobileView ? 'mobile' : ''}>인사말</i>
              </span>
            </li>
            <li 
            className={activeSection === 1 ? 'on' : ''}
            onClick={() => handleNavClick(1)}
            >
              <span>
                <i className={isMobileView ? 'mobile' : ''}>Orgainzatin</i>
                <br></br>
                <i className={isMobileView ? 'mobile' : ''}>조직도</i>
              </span>
            </li>
            <li 
            className={activeSection === 2 ? 'on' : ''}
            onClick={() => handleNavClick(2)}
            >
              <span><i className={isMobileView ? 'mobile' : ''}>Business Scope</i><br></br><i className={isMobileView ? 'mobile' : ''}>사업영역</i></span>
            </li>
            <li 
            className={activeSection === 3 ? 'on' : ''}
            onClick={() => handleNavClick(3)}
            >
              <span><i className={isMobileView ? 'mobile' : ''}>Business History</i><br></br><i className={isMobileView ? 'mobile' : ''}>실적안내</i></span>
            </li>
            <li >
              <span></span>
            </li>
          </ul>
        </nav>
        <section id='section1' className='on' >
          <div>
            <p>
              <span className='fade-in-bottom'>안녕하십니까 ㈜ 에이치알파트너스 대표이사 이해리 입니다.</span>
              <br></br><br></br>
              <span className='fade-in-bottom'>
              ㈜ 에이치알파트너스는 클라이언트 고객들에게 최고의 성과 
              그리고 맞춤형 서비스를 제공하기 위해 노력하며 창조적인 변화, 지속적인 발전으로
              부동산 및 분양 업계를 선도하는 분양대행사로 자리매김 하고 있습니다.
              </span>
              <br></br><br></br>
              <span className='fade-in-bottom'>
              저희 임직원은 모든 역량을 결집하여 최상의 컨디션과 시스템을 확립하고 ㈜ 에이치알파트너스를
              선택해주신 클라이언트의 사업에 있어 최선의 노력과 최고의 성과로 보답 드리고자 끝없는 도전,
              뜨거운 열정을 내세워 클라이언트의 선택이 완벽하게 옳았다는 것을 증명하겠습니다.
              </span>
              <br></br><br></br>
              <span className='fade-in-bottom'>
              고객의 만족과 신뢰를 최상의 가치로 삼고 계속해서 진화하는 분양 사업이 트렌드에 
              발맞추어 분양대행 업계의 뉴 패러다임을 앞장서겠습니다.
              </span>
              <br></br><br></br>
              <span className='fade-in-bottom'>대표이사 <i>이해리</i></span>
            </p>
          </div>
        </section>
        <section id='section2' >
          <div className='orgChart'>
            <h2><span>대표이사</span></h2>
            <h3><span>총괄관리본부</span></h3>
            <ul>
              <li>
                <h4><span>전략기획본부</span></h4>
                <ul>
                  <li>상품기획팀</li>
                  <li>개발사업팀</li>
                  <li>전략기획팀</li>
                  <li>영업기획팀</li>
                </ul>
              </li>
              <li>
                <h4><span>분양사업부</span></h4>
                <ul>
                  <li>마케티영업본부 [비주거사업부]</li>
                  <li>마케팅영업본부 [주거사업부]</li>
                  <li>부동산 임대/관리</li>
                  <li>부동산투자컨설팅</li>
                </ul>
              </li>
              <li>
                <h4><span>경영지원부</span></h4>
                <ul>
                  <li>법률지원</li>
                  <li>경영지원</li>
                  <li>재무관리</li>
                  <li>전문 인사관리</li>
                </ul>
              </li>
            </ul>
            
          </div>
        </section>
        <section id='section3' > <div>3</div> </section>
        <section id='section4' > <div>4</div> </section>
      </main>
    </div>
  );
}

export default App;
