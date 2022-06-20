const Section3 = (s3Title) => {
    const title = s3Title.s3Title
    return (
        <section className="section3">
            <h2>{title[1]}</h2>
            <ul>
                <li>
                    <h3>VISION</h3>
                    <p>AI 기반의 디지털 혁신을 선도하며 인류 미래사회에 공헌하는 AI 핵심조직</p>
                </li>
                <li>
                    <h3>MISSION</h3>
                    <ul>
                        <li>건강, 즐거움, 편리를 추구하는 AI 기술을 연구·개발한다.</li>
                        <li>최고의 AI 기술을 바탕으로 문화, 플랫폼, 건강, 지속가능성 기반의 혁신적인 비즈니스를 선도한다.</li>
                    </ul>
                </li>
            </ul>
        </section>
    );
};

export default Section3;