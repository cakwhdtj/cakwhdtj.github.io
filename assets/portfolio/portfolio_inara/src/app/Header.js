import Gnb from "./Gnb"

export default function Header() {


    return <header>
      <h1>logo</h1>
      <ul>
        <li className='headerButton'>앱 다운로드</li>
        <li className='headerButton'>로그인</li>
        <li className='hamburgerMenu'><span></span><span></span><span></span></li>
      </ul>
      {Gnb()}
      <div>앱스토어</div>
      <div>플레이스토어</div>
    </header>
  }

