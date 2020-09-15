import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

import './App.css';


function App() {
  return (
    <div className="App">

      <Router>
        <Fragment>
          <Switch>
            <Route path="/about" component = { About } />
            <Route path="/" component = { Home } />
          </Switch>

        </Fragment>
      </Router>
    </div>
  );
}

export default App;
