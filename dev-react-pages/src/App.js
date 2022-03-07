import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


import './App.css';
import './library/css/web-font.css'
import './library/css/style.css'
// ----
import Header from './library/js/header.js'
import Main from './library/js/components/Main';

function App () {
  const getURL = useLocation();
  const [_title, setTitle] = useState("");

  useEffect(()=>{
    setTitle(getURL.pathname === `/react-pages` ? `Library` : 'hi');
  },[getURL.pathname]);

  return (
          <div className="App">
              <Header title={_title}></Header>
              <Main />  
          </div>
        );
}

export default App;
