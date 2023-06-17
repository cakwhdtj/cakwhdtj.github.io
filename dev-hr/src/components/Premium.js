import React, { useRef, useEffect, useState } from 'react';

const Service = () => {
    const servCircRef = useRef(null);
    const [squareSize, setSquareSize] = useState(0);

    useEffect(() => {
        const handleResize = () => {
          if (servCircRef.current) {
            const width = servCircRef.current.offsetWidth;
            setSquareSize(width);
          }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize',handleResize);
        };
    },[]);

    return (
        <div className="service cat">
            {/* <h2>프리미엄 서비스</h2> */}
            <section id="sSection1">
                <div className="servCirc"
                    ref={servCircRef} style={{ height: squareSize}}>
                    <div className="serviceDiv">
                        <img alt="프리미엄서비스법무법인율촌"
                        src="http://baekwoonlakeprugio.com/theme/grape/img/0802-2.jpg"
                        />
                        <div>
                            <img alt="건강검진센터"
                            src="http://baekwoonlakeprugio.com/theme/grape/img/0802-2-logo.jpg"
                            />
                            <h3>법무법인 율촌</h3>
                            <p>
                                <h3> 
                                서비스부분 대상,<br />
                                전문성부분 최우수상 수상
                                </h3>
                                <span>
                                증여, 상속 등 맞춤형<br />
                                법률 서비스 제공
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="serviceDiv">
                        <img alt="프리미엄서비스건강검진센터"
                        src="http://baekwoonlakeprugio.com/theme/grape/img/0802-1.jpg"
                        />
                        <div>
                            <img alt="건강검진센터"
                            src="http://baekwoonlakeprugio.com/theme/grape/img/0802-1-logo.jpg"
                            />
                            <h3>국내 No.1 종합병원</h3>
                            <p>
                                <h3> 
                                국민들이 가장 많이 찾는 <br />
                                국내 최정상 병원
                                </h3>
                                <span>
                                건강한 삶을 위하여<br />
                                최고의 건강증진서비스 제공
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="serviceDiv">
                        <img alt="프리미엄서비스가립회계법인"
                        src="http://baekwoonlakeprugio.com/theme/grape/img/0802-3.jpg"
                        />
                        <div>
                            <img alt="가립회계법인"
                            src="http://baekwoonlakeprugio.com/theme/grape/img/0802-3-logo.jpg"
                            />
                            <h3>가립회계법인</h3>
                            <p>
                                <h3> 
                                가장 정직하고 전문성있는<br />
                                최고의 컨설팅 회사
                                </h3>
                                <span>
                                신뢰와 만족을 최우선으로한<br />
                                재무컨설팅 제공
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="serviceDiv">
                        <img alt="프리미엄서비스하나투어"
                        src="	http://baekwoonlakeprugio.com/theme/grape/img/0802-4.jpg"
                        />
                        <div>
                            <img alt="하나투어"
                            src="	http://baekwoonlakeprugio.com/theme/grape/img/0802-4-logo.jpg"
                            />
                            <h3>하나투어</h3>
                            <p>
                                <h3> 
                                소비자중심경영의 최우수상<br />
                                여행 서비스업 부문 6년 연속 1위
                                </h3>
                                <span>
                                30년의 노하우를 기반으로 한<br />
                                편안하고 행복한 여행플랜 제공
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <h2>기본 생활서비스</h2> */}
            <section id="sSection2">
                <div>
                    <div className='standardServ'>
                        <h3>건강케어 서비스</h3>
                        <p>
                            건강검진 · 24시 긴급대응 · 건강증진 프로그램 ·
                            심리상담 · PT/재활PT · 골프/수영강습 · GX
                        </p>
                    </div>
                    <div className='standardServ'>
                        <h3>생활편의 서비스</h3>
                        <p>
                        식사서비스 · 하우스키핑 · 런드리서비스 ·
                        컨시어지 · 셔틀버스 · 비서서비스 · 도어맨/포터
                        </p>
                    </div>
                    <div className='standardServ'>
                        <h3>취미여가 서비스</h3>
                        <p>
                        커뮤니티 무료 이용 · 바디케어(마사지) ·
                        세신 서비스 · 올데이클래스 · 특별/생활 강좌
                        </p>
                    </div>
                </div>
                <div className='info'>
                    <dl>
                        <dd>상기 기재된 서비스 및 프로그램 외 입주 시 더 많은 프로그램으로 구성될 예정이며, 유상으로 제공되는 서비스가 일부 포함될 수 있습니다.</dd>
                        <dd>입주 시 해당 서비스는 관계기관의 사정에 따라 추후 변경될 수 있습니다.</dd>
                    </dl>
                </div>
            </section>
            <section id="sSection3">
                <div>
                    <div className='premiumServ'>
                        <img alt='프리미엄서비스'
                        src='http://baekwoonlakeprugio.com/theme/grape/img/0801-5.jpg'
                        />
                        <div>
                            <h3>365일 식사 서비스</h3>
                            <span>아침부터 저녁까지</span>
                            <span>전문 영양사가 제공하는</span>
                            <span>맞춤형 건강 식단</span>
                        </div>
                    </div>
                    <div className='premiumServ'>
                        <img alt='프리미엄서비스'
                        src='http://baekwoonlakeprugio.com/theme/grape/img/0801-2.jpg'
                        />
                        <div>
                            <h3>메디컬 케어</h3>
                            <span>의료기관과 연계한</span>
                            <span>건강관리 및 바디케어센터</span>
                            <span>마사지 서비스 등</span>
                        </div>
                    </div>
                    <div className='premiumServ'>
                        <img alt='프리미엄서비스'
                        src='http://baekwoonlakeprugio.com/theme/grape/img/0801-3.jpg'
                        />
                        <div>
                            <h3>하우스키핑 서비스</h3>
                            <span>청소, 세탁 등</span>
                            <span>가사지원 서비스</span>
                            <span>주 1 ~ 2회 기본 제공</span>
                        </div>
                    </div>
                    <div className='premiumServ'>
                        <img alt='프리미엄서비스'
                        src='	http://baekwoonlakeprugio.com/theme/grape/img/0801-1.jpg'
                        />
                        <div>
                            <h3>호텔식 컨시어지 서비스</h3>
                            <span>버틀러 서비스, 셔틀버스,</span>
                            <span>택배, 예약대행 및</span>
                            <span>방문객 안내 등</span>
                        </div>
                    </div>
                    <div className='premiumServ'>
                        <img alt='프리미엄서비스'
                        src='	http://baekwoonlakeprugio.com/theme/grape/img/0801-4.jpg'
                        />
                        <div>
                            <h3>올데이 클래스</h3>
                            <span>음악, 체육, 교양 등</span>
                            <span>다양한 문화 강좌</span>
                            <span>및 각종 모임지원</span>
                        </div>
                    </div>
                </div>
                <div className='info'>
                    <dl>
                        <dd>상기 이미지는 소비자의 이해를 돕기 위한것으로 실제와 다를 수 있습니다.</dd>
                        <dd>상기 세부 서비스 등은 관계 기관의 사정에 따라 추후 변경될 수 있습니다.</dd>
                    </dl>
                </div>
            </section>
        </div>
    )
}

export default Service;