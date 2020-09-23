import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Another from './pages/Another';

import './App.css';

class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/jinto?valid=true">About</Link>
              </li>
          </ul>
        </div>
        <div>
          <Switch>
            <Route path="/about/:name" component={About} />
            <Route path="/another" component={Another} />
            <Route path="/" component={Home} />            
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
