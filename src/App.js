import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';  

import Nav from './components/navComponent/nav';
import Reddit from './components/pages/reddit';
import Hackernews from './components/pages/hackerNews';
import GithubTrending from './components/pages/githubTrending';
import Medium from './components/pages/medium';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <Nav/>        
            <Route exact path='/Reddit' component={Reddit} />
            <Route exact path='/Hackernews' component={Hackernews} />
            <Route exact path ='/Githubtrending' component={GithubTrending} />
            <Route exact path ='/Medium' component={Medium} />
        </div>
      </Router>
    );
  }
}

export default App;
