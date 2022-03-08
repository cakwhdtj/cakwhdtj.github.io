import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Random from './library/js/components/Random';


import './App.css';
import './library/css/web-font.css'
import './library/css/style.css'

import Header from './library/js/header.js'
import Main from './library/js/components/Main.js';
import {onClickHandler} from './library/js/components/Lists';

function App () {
  const getURL = useLocation();
  const [_title, setTitle] = useState(
    `${(getURL.pathname === `/react-pages` ? `Library` : _title)}`
  );
  
  useEffect(()=> {
    const titleChange = 
  })

  return <Router>
            <Switch>
                <Route path="/">
                    <Header title={_title}></Header>
                    <Main />  
                </Route>
                <Route path="/API/1">
                    <Random />
                </Route>
            </Switch>
             </Router>

}

export default App;
