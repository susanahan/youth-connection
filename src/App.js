import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Jobs from "./components/Job/Jobs";
import Activities from "./components/Activities/Activities";
import Search from "./components/Map/Search";

import Header from "./components/Header/header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataJob: [],
      dataAfter: [],
      searchVal: ""
    };
  }

  handleSearch = ({ match }) => {
    const { dataJob } = this.state;
    console.log("just making some changes");
    return <Search infoArr={dataJob} match={match} />;
  };

  handleText = e => {
    this.setState({ searchVal: e.target.value });
  };

  render() {
    return (
      <div className="app-container">
        <Header />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/jobs" component={ Jobs } />
          <Route path="/activities" component={ Activities } />
        </Switch>
      </div>
    );
  }
}

export default App;
