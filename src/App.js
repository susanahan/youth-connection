import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Jobs from "./components/Job/Jobs";
import AfterSchool from "./components/Activities/Afterschool";
import Search from "./components/Map/Search";

import Header from "./components/Header/header"

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
         <Home />
      </div>
    );
  }
}

export default App;
