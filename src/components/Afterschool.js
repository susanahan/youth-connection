import React, { Component } from "react";
import Activities from "./activitiesLayout"

class AfterSchool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAfter: []
    };
  }

  dataActivties = () => {
    fetch(
      `https://data.cityofnewyork.us/resource/mbd7-jfnc.json?$where=latitude > 1&$limit=19`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("setState: ", this.setState);

        this.setState({
          dataAfter: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.dataActivties();
    console.log(this.state.dataAfter)
  }

  render() {
    console.log(" Activties: ", this.state.dataAfter);

    return (
      <div>
        <Activities dataArr={this.state.dataAfter} />
      </div>
    );
  }
}

export default AfterSchool;
