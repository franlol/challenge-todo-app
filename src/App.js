import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import NoMatch from './pages/NoMatch';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
