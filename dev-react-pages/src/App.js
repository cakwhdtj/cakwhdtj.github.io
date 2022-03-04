import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';


import './App.css';
import './library/css/web-font.css'
import './library/css/style.css'
// ----
import Header from './library/js/header.js'
import Main from './library/js/components/main.js'
import Main2 from './library/js/components/main2';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: { id: 0, title1: 'Library', },
//     }
//   }
//   render() {
//     return (
//       <BrowserRouter>
//       <div className="App">
//           <Header title1={this.state.title.title1}></Header>
//           <Main></Main>
//       </div>
//       </BrowserRouter>
//     );
//   }
// }

function App () {
  const getURL = useLocation();
  const [_title, setTitle] = useState("");

  useEffect(()=>{
    setTitle(getURL.pathname === `/react-pages` ? `Library` : _title);
  },[]);

  return (
          <div className="App">
              <Header title={_title}></Header>
              {/* <Main></Main> */}
              <Main2 />  
          </div>
        );
}

export default App;
