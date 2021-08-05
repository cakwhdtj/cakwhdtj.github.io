import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Hihihi from './testtest/testtest.js'


class App extends Component {
  render() {
    return (
      <div className="App" >
        <img src={logo} className="App-logo" alt="logo" />
        <Hihihi annyong="안녕" hello="react"></Hihihi>
        <Hihihi annyong="안녕ddd" hello="reactccc"></Hihihi>
      </div>
    );
  }
}

export default App;
