import React, {useState} from "react";

const Club = () => {
    const slides = [
        'http://baekwoonlakeprugio.com/theme/grape/img/comp1.jpg',
        'http://baekwoonlakeprugio.com/theme/grape/img/activity-1.jpg',
        'http://baekwoonlakeprugio.com/theme/grape/img/healing-1.jpg',
        'http://baekwoonlakeprugio.com/theme/grape/img/com-1.jpg',
    ];
    const slides2 = [
        'http://baekwoonlakeprugio.com/theme/grape/img/comp2.jpg',
        'http://baekwoonlakeprugio.com/theme/grape/img/activity-2.jpg',
        'http://baekwoonlakeprugio.com/theme/grape/img/healing-2.jpg',
        'http://baekwoonlakeprugio.com/theme/grape/img/com-2.jpg'
    ]
    const slideLabels = ['클럽포시즌', 'ACTIVITY ZONE', 'HEALING&LIVING ZONE', 'COMMUNITY ZONE'];
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleSlideClick = (index) => {
      setCurrentSlide(index);
    };

    
    return (
        <div className="club cat">
            <h2>클럽포시즌</h2>
            <section id="cSection1">
                <div className="slide-container">
                    <ul className="slide">
                    {slides.map((slide, index) => {
                        const labelText = slideLabels[index];
                        const spanText = labelText.split(' ')
                                .map((word) => (word !== 'ZONE' ? <span>{word}</span> : word));
                    return (
                    <li key={index} className={index === currentSlide ? 'on' : ''}>
                        {index !== 0 ? <h3>{spanText}</h3> : null}
                        <img alt={`클럽포시즌 ${slideLabels[index]} 1단지`} src={slide} />
                        <img alt={`클럽포시즌 ${slideLabels[index]} 2단지`} src={slides2[index]} />
                    </li>
                    );
                    })}
                    </ul>
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
                    <div class="info">
                        <dl>
                            <dd>상기 평면도는 소비자의 이해를 돕기 위해 제작된 것으로 가구, 벽체, 마감 및 바닥재 등의 재질과 색상, 일부 옵션 항목은 실제 시공 시 변경될 수 있으니 견본주택에 방문하시어 직업 확인하시기 바랍니다.</dd>
                            <dd>견본주택에 시공된 제품은 자재품절, 품귀, 제조회사의 도산 등 부득이한 경우에 한하여 동급 이상의 제품이나 타사 제품으로 변경될 수 있습니다.</dd>
                            <dd>상기 설계 내용은 소비자의 이해를 돕기 위한 것으로 건축설계 변경 등의 사유로 인해 변경될 수 있으며, 실제와 다를 수 있습니다.</dd>
                        </dl>
                    </div>
                </div>
            </section>
        </div>
    ); 
};


export default Club;