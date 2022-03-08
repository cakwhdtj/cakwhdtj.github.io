import React, { } from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Random from './library/js/components/Random';

import './App.css';
import './library/css/web-font.css'
import './library/css/style.css'

import Header from './library/js/header.js'
import Main from './library/js/components/Main.js';

function App () {
  const homepage = "/react-pages";
  return <Router>
              <Header />
              <Main homepage={homepage}/>  
         </Router>

}

export default App;
