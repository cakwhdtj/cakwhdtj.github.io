export default function Gnb() {
    return <div className={`gnb`}>
        <buttn className='close'>X</buttn>
        <ul>
            <li>홈 바로가기</li>
            <li>이벤트</li>
            <li>아이들나라 프리미엄 안내</li>
            <li>공지사항</li>
            <li>자주 묻는 질문</li>
        </ul>
        <ul>
            <li>인스타그램</li>
            <li>유튜브</li>
            <li>네이버카페</li>
        </ul>
    </div>;
}