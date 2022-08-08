import { Link } from "react-router-dom";
import SVG from "./SvgSet";

const Section6 = (props) => {
    const title = props.s6Title; 
    return (
        <section id="section6">
            <div className="sInner">
                <div>
                    <h2>{title[4]}</h2>
                    <p>궁금한 사항을 남겨주시면 빠르게 답변드리겠습니다.</p>
                    <Link to="#" className="btn">문의하기 <SVG type={'ico'} size={0} circle={[]}/></Link>
                </div>
                <div>
                    <h2>VISIT US</h2>
                    <address>서울특별시 강남구 강남대로 652 신사스퀘어 12-15F</address>
                    <Link to="#" className="btn">주소복사하기<SVG type={'ico2'} size={0} circle={[]}/></Link>
                </div>
            </div>
        </section>
    );
    };
    
    export default Section6;

   