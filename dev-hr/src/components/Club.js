import React, {useState , useEffect} from "react";
import clubImg from '../img/c4.jpg';
import club1 from '../img/club1.jpg';
import club11 from '../img/club11.jpg';
import club2 from '../img/club2.jpg';
import club21 from '../img/club21.jpg';
import club3 from '../img/club3.jpg';
import club31 from '../img/club31.jpg';
import club4 from '../img/club4.jpg';
import club41 from '../img/club41.jpg';
import club5 from '../img/club5.png';
import club6 from '../img/club6.png';


const Club = () => {
    const slides = [club1,club2,club3,club4];
    const slides2 = [club11,club21,club31,club41];
    const slideLabels = ['클럽포시즌', 'ACTIVITY ZONE', 'HEALING&LIVING ZONE', 'COMMUNITY ZONE'];
    const [currentSlide, setCurrentSlide] = useState(0);
    const [squareSize, setSquareSize] = useState(0);

    const handleSlideClick = (index) => {
      setCurrentSlide(index);
    };

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth
            setSquareSize(width);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize',handleResize);
        };
    },[]);
    
    return (
        <div className="club cat">
            <h2>클럽포시즌</h2>
            <section id="cSection1">
                <div className="slide-container" style={{height : squareSize + 50}}>
                    <ul className="indicator">
                    {slideLabels.map((label, index) => (
                        <li
                        key={index}
                        className={`${index === currentSlide ? 'on' : ''}`}
                        onClick={() => handleSlideClick(index)}
                            >
                            {label}
                        </li>
                        ))}
                    </ul>
                    <ul className="slide">
                        {slides.map((slide, index) => {
                            const labelText = slideLabels[index];
                            const spanText = labelText.split(' ')
                                    .map((word) => (word !== 'ZONE' ? <span>{word}</span> : word));
                        return (
                        <li key={index} className={index === currentSlide ? 'on' : ''}>
                            {index !== 0 ? <h3>{spanText}</h3> : null}
                            <div className="imgDiv">
                                <img alt={`클럽포시즌 ${slideLabels[index]} 1단지`} src={slide} />
                                <img alt={`클럽포시즌 ${slideLabels[index]} 2단지`} src={slides2[index]} />
                            </div>
                        </li>
                        );
                        })}
                    </ul>
                </div>
            </section>
            <section id="cSection2">
                    <div>
                       <div>
                        <h3>남다른 스케일에 차별화된 품격까지<span>클럽 포시즌</span></h3>
                            <p>
                                월드컵경기장 2개 규모의 초대형 스케일에
                                호텔식 서비스로 더 높아질 삶의 품격까지!
                                지금껏 없던 휴양 같은 특별한 일상이
                                당신의 매일이 됩니다.
                            </p>
                       </div>
                       <img alt="클럽포시즌"
                        src={club5}
                       />
                       <img alt="클럽포시즌"
                        src={club6}
                       />
                       
                    </div>
                    <div>
                        <img alt="클럽포시즌"
                        src={clubImg}
                        />
                    </div>
            </section>
            <div className="info">
                    <dl>
                        <dd>클럽포시즌 내 시설은 단지별로 상이하오니, 계약전 반드시 견본주택 내 부대시설 모형도 및 분양안내문을 참고 하시기 바랍니다.</dd>
                        <dd>1,2단지 클럽포시즌 내 스위트(노인복지주택)의 전용시설은 1,2단지 오피스텔 입주민 모두 유상으로 사용이 가능하며 시설 및 프로그램 등은 실제 운영시 일부 변경될 수 있습니다.</dd>
                        <dd>본 홍보물에 사용된 CG는 소비자의 이해를 돕기위한 것으로 실제와 다를 수 있으며, 실시계획 과정에서 변경될 수 있습니다.</dd>
                        <dd>상기 이미지는 소비자의 이해를 돕기 위해 제작한 것으로 실제와 다릅니다.</dd>
                    </dl>
                </div>
        </div>
    ); 
};


export default Club;