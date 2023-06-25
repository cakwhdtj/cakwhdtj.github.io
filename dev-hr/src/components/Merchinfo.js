import React, { useState } from 'react';


const Merchinfo = () => {
    const slides = [
        'https://baekwoonlakeprugio.com/theme/grape/img/floor1.jpg',
        'https://baekwoonlakeprugio.com/theme/grape/img/floor3.jpg',
        'https://baekwoonlakeprugio.com/theme/grape/img/floor4.jpg',
        'https://baekwoonlakeprugio.com/theme/grape/img/floor4.jpg',
        'https://baekwoonlakeprugio.com/theme/grape/img/floor5.jpg',
        'https://baekwoonlakeprugio.com/theme/grape/img/floor6.jpg',
    ];
    const slideLabels = ['99㎡','119㎡A','119㎡B','119㎡C','119㎡D','119㎡E'];
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleSlideClick = (index) => {
      setCurrentSlide(index);
    };

    return (
        <div className="merch cat">
            <h2>상품안내</h2>
            <section id="mchSection1">
                <h3>사업개요</h3>
                <img alt="백운호수푸르지오사업개요"
                src="https://baekwoonlakeprugio.com/theme/grape/img/behavior.jpg"/>
                <article>
                    <div className="grid-container">
                        <div className="table-title">백운호수 푸르지오 숲속의 아침 1단지</div>
                        <div className="grid-item column1">대지위치</div>
                        <div className="grid-item">
                            의왕백운밸리 업무복합시설용지 2-2BL <br />
                            (경기도 의왕시 학의동 661번지 일대)
                        </div>
                        <div className="grid-item column1">세대 수</div>
                        <div className="grid-item">
                            1단지 총 837세대 중<br />
                            <span className="gridColor">오피스텔 512실</span>
                            스위트(노인복지주택) 325세대
                        </div>
                        <div className="grid-item column1">건축규모</div>
                        <div className="grid-item">지하 5층, 지상 16층(최고층수 : 16층 이하)</div>
                        <div className="grid-item column1">대지면적</div>
                        <div className="grid-item">25,252㎡</div>
                        <div className="grid-item column1">건축면적</div>
                        <div className="grid-item">9,539.74㎡</div>
                        <div className="grid-item column1">연면적</div>
                        <div className="grid-item">178,079.94㎡</div>
                        <div className="grid-item column1">용도</div>
                        <div className="grid-item">오피스텔/노인복지주택/근린생활시설</div>
                        <div className="grid-item column1">주차대수</div>
                        <div className="grid-item">
                            총 1,236대 <br />
                           <span className="gridColor">오피스텔 906대,</span>스위트(노인복지주택) 325대, 근린생활시설 5대
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className="table-title">백운호수 푸르지오 숲속의 아침 2단지</div>
                        <div className="grid-item column1">대지위치</div>
                        <div className="grid-item">
                            의왕백운밸리 업무복합시설용지 2-1BL<br />
                            (경기도 의왕시 학의동 656-1번지 일대)
                        </div>
                        <div className="grid-item column1">세대 수</div>
                        <div className="grid-item">
                            2단지 총 541세대 중<br />
                            <span className="gridColor">오피스텔 330실</span>
                            스위트(노인복지주택) 211세대
                        </div>
                        <div className="grid-item column1">건축규모</div>
                        <div className="grid-item">지하 6층, 지상 16층(최고층수 : 16층 이하)</div>
                        <div className="grid-item column1">대지면적</div>
                        <div className="grid-item">14,994㎡</div>
                        <div className="grid-item column1">건축면적</div>
                        <div className="grid-item">6,710.21㎡</div>
                        <div className="grid-item column1">연면적</div>
                        <div className="grid-item">124,720㎡</div>
                        <div className="grid-item column1">용도</div>
                        <div className="grid-item">오피스텔/노인복지주택/근린생활시설</div>
                        <div className="grid-item column1">주차대수</div>
                        <div className="grid-item">
                            총 800대<br />
                            <span className="gridColor">오피스텔 578대,</span> 스위트(노인복지주택) 211대, 근린생활시설 11대
                        </div>
                    </div>
                </article>
                    <div className='info'>
                        <dl>
                            <dd>상기 내용은 인ㆍ허가 과정이나 실제 시공 시 현장 여건 등에 따라 일부 변경될 수 있으므로 견본주택에 방문하시어 직접 확인하시기 바랍니다.</dd>
                            <dd>본 사업개요는 인ㆍ허가 과정에서 변경될 수 있습니다.</dd>
                            <dd>상기 CG는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 날 수 있으며, 건축물의 외관 및 색채계획, 부대시설, 창호계획 조경계획, 문주 등의 기타 시설은 인허가 과정상 추후 변경될 수 있습니다.</dd>
                        </dl>
                    </div>
            </section>
            <section id="mchSection2">
                <img alt="백운호수푸르지오단지배치도"
                src="https://baekwoonlakeprugio.com/theme/grape/img/1001.jpg"
                />
                <div class="info">
                    <dl>
                        <dd>상기 단지배치도CG는 실시계획 과정에서 변경될 수 있으며, 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있습니다.</dd>
                        <dd>상기 단지배치도CG에 표기된 도시계획시설의 형태 및 디자인은 변경될 수 있습니다.</dd>
                        <dd>의료복합용지 등 각종 개발계획 및 교통계획에 관한 사항은 추후 관계기관의 사정에 따라 지연, 변경 및 취소될 수 있으며, 이는 시행사 및 시공사와 무관함을 알려드립니다.</dd>   
                        <dd>상기 백운호수, 모락산, 바라산 등 조망은 일부 세대에 한하여 해당되는 사항이므로 참고하시기 바랍니다.</dd>
                        <dd>각종 개발계획 및 교통계획에 관한 사항은 추후 관계기관의 사정에 따라 지연, 변경 및 취소될 수 있으며, 이는 시행사 및 시공사와 무관함을 알려드립니다.</dd>
                    </dl>
                </div>
                <h3>동호수표</h3>
                <img alt="백운호수푸르지오동호수표"
                src="https://baekwoonlakeprugio.com/theme/grape/img/d-table.png"
                />
                <h3>평면정보</h3>
                <div className="slide-container">
                    <ul className="slide">
                    {slides.map((slide, index) => (
                        <li key={index} className={index === currentSlide ? 'on' : ''}>
                        <img alt="백운호수푸르지오슬라이드사진" src={slide} />
                        </li>
                    ))}
                    </ul>
                    <ul className="indicator">
                    {slideLabels.map((label, index) => (
                        <li
                        key={index}
                        className={`${index === currentSlide ? 'on' : ''}`}
                        onClick={() => handleSlideClick(index)}
                            >
                            {label}
                        </li>
                        ))}
                    </ul>
                    <div class="info">
                    <dl>
                        <dd>상기 평면도는 소비자의 이해를 돕기 위해 제작된 것으로 가구, 벽체, 마감 및 바닥재 등의 재질과 색상, 일부 옵션 항목은 실제 시공 시 변경될 수 있으니 견본주택에 방문하시어 직업 확인하시기 바랍니다.</dd>
                        <dd>견본주택에 시공된 제품은 자재품절, 품귀, 제조회사의 도산 등 부득이한 경우에 한하여 동급 이상의 제품이나 타사 제품으로 변경될 수 있습니다.</dd>
                        <dd>상기 설계 내용은 소비자의 이해를 돕기 위한 것으로 건축설계 변경 등의 사유로 인해 변경될 수 있으며, 실제와 다를 수 있습니다.</dd>
                    </dl>
                </div>
                </div>
            </section>
            
        </div>
    )
}

export default Merchinfo;