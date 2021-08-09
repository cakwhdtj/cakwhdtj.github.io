import { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// ----
import Hihihi from './testtest/testtest.js'
import Contlist from './test2';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hihihi: { annyong: '안녕', hello: 'ㄱㄷㅁㅊhihihi' },
      contentlist: [
        { id: 1, title: 'HTML', desc: 'html' },
        { id: 2, title: 'JavaScript', desc: 'jsjs' },
        { id: 3, title: 'Css', desc: 'csscscscscssccc' }
      ]
    }
  }
  render() {
    return (
      <div className="App" >
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Hihihi
          annyong={this.state.hihihi.annyong}
          hello={this.state.hihihi.hello}
        ></Hihihi>
        <Contlist data={this.state.contentlist}></Contlist>
      </div>
    );
  }
}

export default App;
