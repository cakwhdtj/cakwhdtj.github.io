import SVG from "./SvgSet";

const Section2 = (props) => {
    const dataSet = props.dataSet
    const svgType = [1,2,3,4];
    const svgSize = [190,190,190,190];
    const circProps = [
        [false,0,null],
        [true,2, [[167,142,9,"#187BD2"],[17,54,9,"#EF151E"]]],
        [false,0,null],
        [true, 3, [[142,34,10,"#187BD2"],[139,154,16,"#FF9700"],[16.5,127.5,8.5,"#EF151E"]]]
    ]
    if (dataSet.scroll > 1000) {
        console.log('hi')
    }
    let liTest = svgType.map((svgType,index) => 
    <li key={svgType+`svg`}><SVG type={svgType} size={190} circle={circProps[index]} BorW={null} /></li>
    )

    return (
        <section id="section2">
            <h2>hi</h2>
            <p>Using AI technologies, will will:</p>
            {/* <SvgList svgType={svgType} /> */}
            <ul>
                {liTest}
            </ul>
        </section>
    );
  };
  
export default Section2;