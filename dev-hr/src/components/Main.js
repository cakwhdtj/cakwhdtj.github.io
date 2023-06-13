import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const Main = () => {
  const url = 'https://player.vimeo.com/video/745297131';
  const playerRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleProgress = (state) => {
    if (!playerRef.current.seeking) {
      if (state.playedSeconds > 25) {
        playerRef.current.seekTo(0);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollProgress = scrollTop / (documentHeight - viewportHeight);
      const rotationAngle = scrollProgress * 360;

      const mainVisualElement = document.querySelector('.mainVisual');

      if (mainVisualElement) {
        const offsetTop = mainVisualElement.offsetTop;
        const isElementVisible = window.scrollY >= offsetTop;
        setIsScrolled(isElementVisible);
      }
      setRotation(rotationAngle / - 5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
  }, []);


  return (
    <div>
        <img 
          src="http://baekwoonlakeprugio.com/theme/grape/img/leaf.svg" 
          alt='배경잎장식' className="m-leaf"
          style={{ transform: `rotate(${rotation}deg)`}}
          />
      <section id="section1">
        <div className="react-player-container">
          <div className="react-player-wrapper">
            <ReactPlayer
              className="react-player"
              ref={playerRef}
              url={url}
              playing
              loop
              muted
              controls={false}
              onProgress={handleProgress}
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </section>
      <section id="section2">
        <div className="mainVisual">
          <div className={`${isScrolled ? 'l2r' : ''}`}>
            <h3>강남 20분대</h3>
            <p>주거 명당 백운밸리를 만나다!</p>
          </div>
          <img alt="백운호수푸르지오메인이미지" src="http://baekwoonlakeprugio.com/theme/grape/img/behavior0.jpg"></img>
        </div>
        <div className='info'>
          <dl className="info">
            <dd>상기 이미지는 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다릅니다.</dd>
            <dd>강남에서 20분대 소요시간은 네이버 지도 길찾기(자동차) 기준으로 이동 시간대 및 도로 상황 등에 따라 차이가 있을 수 있습니다.</dd>
            <dd>메종 의왕 등 각종 개발계획 및 교통계획에 관한 사항은 추후 관계기관의 사정에 따라 지연, 변경 및 취소될 수 있으며, 이는 시행사 및 시공사와 무관함을 알려드립니다.</dd>
            <dd>클럽포시즌 내 시설은 단지별로 상이하오니, 계약전 반드시 견본주택 내 부대시설 모형도 및 분양안내문을 참고 하시기 바랍니다.</dd>
            <dd>1,2단지 클럽포시즌 내 골드(노인복지주택)의 전용시설은 1,2단지 오피스텔 입주민 모두 유상으로 사용이 가능하며 시설 및 프로그램 등은 실제 운영시 일부 변경될 수 있습니다.</dd>
          </dl>
        </div>
      </section>
    </div>
  );
};

export default Main;
