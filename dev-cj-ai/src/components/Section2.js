import SVG from "./SvgSet";

const Section2 = (props) => {
    const svgType = [1,2,3,4];
    // const svgSize = [190,190,190,190];
    const circProps = [
        [false,0,null],
        [true,2, [[167,142,9,"#187BD2"],[17,54,9,"#EF151E"]]],
        [false,0,null],
        [true, 3, [[142,34,10,"#187BD2"],[139,154,16,"#FF9700"],[16.5,127.5,8.5,"#EF151E"]]]
    ]
    let li_h3 = [`ESTABLISH PARTNERSHIP`,`COLLABORATE TOGETHER`,`DESIGN THE FUTURE`,`ENLARGE A BUSINESS`];
    let li_p = 
    [`글로벌 라이프스타일 혁신의 시너지를 일으키는 최고의 AI 파트너로서 고객과 함께 합니다.`, 
    `국내외 다양한 AI 기업 및 대학교와 협력관계를 유지하며 공통연구와 과제를 수행합니다.`,
    `최첨단 AI 연구와 AI 원천기술 확보를 통해 CJ의 미래 성장동력을 확보합니다.`,
    `AI를 통한 인사이트를 발굴하여 비즈니스를 확장합니다.`
    ];
    const stTransition = 'all .3s ease';
    const s2bg = {
        transition : stTransition
    }
    const s2h3st = {
        transition : stTransition,
        fontSize : `${(props.dataSet.width >= 1240) ? (26 +'px') : (22+'px')}`
    }
    const s2pst = {
        transition : stTransition,
        fontSize : `${(props.dataSet.width >= 1240) ? (16 +'px') : (14+'px')}`
    }
    let liSet = svgType.map((svgType,index) => 
        (
        <li key={svgType+`svg`}>
            <SVG type={svgType} size={190} circle={circProps[index]} BorW={props.borw} />
            <h3 style={s2h3st}>{li_h3[index]}</h3>
            <p style={s2pst}>{li_p[index]}</p>
        </li>
        )
    )
    return (
        <section id="section2" style={s2bg}>
            <div>
                <h2>{props.s2Title[0]}</h2>
                <p>Using AI technologies, will will:</p>
                <ul>
                    {liSet}
                </ul>
            </div>
        </section>
    );
  };
  
export default Section2;