import SVG from "./SvgSet";

const Section3 = (props) => {
    const nStyle = {
        fontSize : '28px'
    }
    return (
        <section id="section3">
            <div className="sInner">
                <h2>VISION<span style={nStyle}>&</span>MISSION</h2>
                <ul>
                    <li>
                        <SVG type={3} size={72} circle={[false]} BorW={'#FF9700'} viewbox={`0 0 190 190`} />
                        <h3>VISION</h3>
                        <p>AI 기반의 디지털 혁신을 선도하며 인류 미래사회에 공헌하는 AI 핵심조직</p>
                    </li>
                    <li>
                        <SVG type={4} size={72} circle={[false]} BorW={'#FF9700'} viewbox={`0 0 190 190`} />
                        <h3>MISSION</h3>
                        <ul>
                            <li>건강, 즐거움, 편리를 추구하는 AI 기술을 연구·개발한다.</li>
                            <li>최고의 AI 기술을 바탕으로 문화, 플랫폼, 건강, 지속가능성 기반의 혁신적인 비즈니스를 선도한다.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Section3;