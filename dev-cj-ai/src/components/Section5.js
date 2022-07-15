import { Link } from "react-router-dom";
import SVG from "./SvgSet";
import useHover from "./Hover";

const Section5 = (props) => {
    const title = props.s5Title;
    const ico = 
        <i className="ico" >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="30" viewBox="0 0 18 30" fill="none" focusable="false" className="img-svg replaced-svg">
                <path d="M7.5 8.5H2.5V20.5H14.5V15.5" stroke={'black'} strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M10.5 8.5H14.5M14.5 8.5V12.5M14.5 8.5L9.5 13.5" stroke={'black'} strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </i>;
    const objSVG = 
        <div className="obj_rect">
            <svg xmlns="http://www.w3.org/2000/svg" width="494" height="491" viewBox="0 0 494 491" fill="none" focusable="false" className="img-svg replaced-svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M410 491L0 489.111L202.584 0L410 491Z" fill="url(#paint0_linear_115_354)"></path>
                <rect width="412" height="93" transform="matrix(0 -1 -1 0 494 413)" fill="url(#paint1_linear_115_354)"></rect>
                <defs>
                    <linearGradient id="paint0_linear_115_354" x1="387.703" y1="363.339" x2="387.703" y2="-74.2566" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#EEEEEE"></stop>
                        <stop offset="1" stopColor="#7CBFFA"></stop>
                    </linearGradient>
                    <linearGradient id="paint1_linear_115_354" x1="30.9871" y1="96.4009" x2="527.002" y2="96.4009" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#EEEEEE"></stop>
                        <stop offset="1" stopColor="#7CBFFA"></stop>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    return (
        <section id="section5">
            <div className="sInner">
                <h2>{title[3]}</h2>
                <p>AI로 내일의 일상을 만들어갈 동료를 찾습니다.</p>
                <Link className="btn" to='#'>채용공고 보러가기 {ico}</Link>
                <div className="objs">
                    {objSVG}
                    <SVG type={1} size={600} circle={[false]} BorW={'grey'} viewbox={`0 0 190 190`} stroke={1} />
                </div>
            </div>
        </section>
    );
};

export default Section5;