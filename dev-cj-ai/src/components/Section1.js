import SVG from "./SvgSet";

const Section1 = (props) => {
    return (
        <section id="section1">
            <div id="s1Container">
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
                <SVG type={1} size={700} circle={[true,2,[[110,18,9,"url(#grad1)"],[150,70,20,"url(#grad2)"]]]} BorW={'grey'} viewbox={`0 0 190 190`} stroke={1} />
            </div>
        </section>

    );
  };
  
  export default Section1;