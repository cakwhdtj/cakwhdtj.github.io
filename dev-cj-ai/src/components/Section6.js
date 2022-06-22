const Section6 = (s6Title) => {
    const title = s6Title.s6Title
    return (
        <section className="section6">
            <div>
                <h2>{title[4]}</h2>
                <p>궁금한 사항을 남겨주시면 빠르게 답변드리겠습니다.</p>
                <button>문의하기<i>그림</i></button>
            </div>
            <div>
                <h2>VISIT US</h2>
                <address>서울특별시 강남구 강남대로 652 신사스퀘어 12-15F</address>
                <button>문의하기<i>그림</i></button>
            </div>
        </section>
    );
    };
    
    export default Section6;