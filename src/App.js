import React from 'react';
import './reset.scss'
import "./App.scss"

import Header from './components/header/Header'
import Main from './components/main/Main';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Markdown from './components/markdown/Markdown'

function App() {
  return (
    <Router>
      <Header />
      
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/markdown">
        <Markdown />
      </Route>
      <footer>

      </footer>
    </Router>
  );
}

export default App;
