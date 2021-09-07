import { Component } from 'react';

import './App.css';
import './library/css/web-font.css'
import './library/css/style.css'
// ----
import Header from './library/js/header.js'
import Main from './library/js/components/main.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: { title1: 'Library', },
    }
  }
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header title1={this.state.title.title1}></Header>
          <Main></Main>
        </div>
      </div>
    );
  }
}

export default App;
