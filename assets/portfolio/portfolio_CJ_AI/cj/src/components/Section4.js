const Section4 = (s4Title) => {
    const title = s4Title.s4Title
    return (
        <section className="section4">
            <h2>{title[2]}</h2>
            <ul>
                <li>
                    <h3>BUSINESS AI</h3>
                    <p>빅데이터 수집, 가공, 분석을 통해 마케팅 인사이트 도출, 수요 예측 등의 비즈니스 인텔리전스를 실현합니다.</p>
                </li>
                <li>
                    <h3>VISUAL UNDERSTANDING</h3>
                    <p>Vision AI 기술을 활영하여 검사, 분류, 탐지, 발견 등이 가능한 머신 비전 알고리즘을 연구·개발합니다.</p>
                </li>
                <li>
                    <h3>AI-OPS</h3>
                    <p>AI 기술을 여러 분야에 더 쉽게 활용하고 데이터를 더욱 효율적으로 처리할 수 있도록 AI-Ops를 개발하고 기술을 공유합니다.</p>
                </li>
                <li>
                    <h3>NATURAL LANGUAGE UNDERSTANDING</h3>
                    <p>대화 지능형 NLP 기술과 더불어 콘텐츠 제작, 추천에 필요한 성격 유형별 언어지능 기술까지 연구하고 적용합니다.</p>
                </li>
            </ul>
        </section>
    );
};

export default Section4;