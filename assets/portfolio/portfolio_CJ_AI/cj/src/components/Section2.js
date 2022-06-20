import SVG from "./SvgSet";

const Section2 = (s2Title) => {
    const title = s2Title.s2Title;
    const svgType = [1,2,3,4];
    const svgSize = [190,190,190,190];
    const circProps = [
        [false,0,null],
        [true,2, [[167,142,9,"#187BD2"],[17,54,9,"#EF151E"]]],
        [false,0,null],
        [true, 3, [[142,34,10,"#187BD2"],[139,154,16,"#FF9700"],[16.5,127.5,8.5,"#EF151E"]]]
    ]
    const svgList = svgType.map((svgType, index) => 
        <li key={index +"_section2"}>{SVG(svgType, svgSize[index], circProps[index])}</li>)

    console.log(title)
    return (
        <section className="section2">
            <h2>{title[0]}</h2>
            <p>Using AI technologies, will will:</p>
            <ul>
                {/* // SVG = (type, size,[ isCircle, numCircle, circleProps])
                    // circleProps = (cx, cy, r, fill) */}
                {svgList}
            </ul>
        </section>
    );
  };
  
export default Section2;