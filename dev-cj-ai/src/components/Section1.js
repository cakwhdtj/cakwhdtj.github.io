import SVG from "./SvgSet";

const Section1 = (props) => {
    const s1pst = {
        fontSize : `${props.dataSet.width >= 1024 ? (props.dataSet.width >= 1560 ? '55px' : '48px') : '32px'}`,
    }
    return (
        <section id="section1">
            <div id="s1Container" style={s1pst}>
                <SVG type={'logo'} size={0} circle={[]} BorW={`#989898`}/>
                <p>
                    <span>WORLD-LEADING</span><br />
                    <span>CJ ENTERPRISES BY ACCELERATING</span><br />
                    <span>AI TECHNOLOGIES</span>
                </p>
                <div>SCROLL DOWN</div>
            </div>
            <div id="s1SVGs">
                <SVG type={2} size={270} circle={[false,1,[[200,100,100,"#187BD2"]]]} BorW={'grey'} viewbox={`0 0 190 190`} stroke={1} />
                <div id="s1Circle1"></div>
                <div id="s1Circle2"></div>
                <div id="rotateSVG">
                    <SVG type={1} size={701} circle={[true,2,[[90,17,9,"url(#grad1)"],[135,62,20,"url(#grad2)"]]]} BorW={'transparent'} viewbox={`0 0 190 190`} />
                    <SVG type={1} size={770} circle={[false]} BorW={'grey'} viewbox={`0 0 190 190`} stroke={1} />
                </div>
            </div>
        </section>

    );
  };
  
  export default Section1;