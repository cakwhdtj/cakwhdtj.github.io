import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './library/css/web-font.css'
import './library/css/style.css'
// ----
import Header from './library/js/header.js'
import Main from './library/js/main/main.js';
import MenuList from './library/js/main/contentList.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: { title1: 'Library', },
      contentlist: [
        { id: 1, title: '이미지 슬라이드', desc: 'imgae-slide' },
        { id: 2, title: '배너 슬라이드', desc: 'banner-slide' },
        { id: 3, title: '스크롤 UI', desc: 'scroll-UI' },
        { id: 4, title: '팝업', desc: 'popup' },
        { id: 5, title: '드래그 UI', desc: 'drag-UI' },
        { id: 6, title: '내비게이션 UI', desc: 'nav-UI' },
        { id: 7, title: '모바일 UI', desc: 'mobile_UI' },
      ]
    }
  }
  render() {
    return (
      <div className="App" >
        <div className="wrapper">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Header
            title1={this.state.title.title1}
          ></Header>
          <Main>
            <MenuList data={this.state.contentlist}></MenuList>
          </Main>
        </div>
      </div>
    );
  }
}

export default App;
