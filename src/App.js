import React, { Component } from 'react';
import Home from './components/Home';
import {Link, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/jobs">Jobs</Link>
        </nav>
          <h1>Welcome to Our Page</h1>
        <p> type stuff        </p>
        <h2> Type more stuff</h2>
      </div>
    );
  }
}

export default App;
