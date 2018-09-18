import React, { Component } from "react";
// import { Link, Switch, Route} from 'react-router-dom'
// import { GoogleMap } from "react-google-maps"
import Map from "../Map/Map";
import MapInfo from "../Map/MapInfo";
import MapInfo2 from "../Map/MapInfo2";
import Search from "../Map/Search";

import "./Home.css"
import pic from "../../home-pic.jpg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataJob: [],
      dataAfter: [],
      searchVal: "",
      selectedSpotId: null,
      selectedASId: null
    };
  }

  // dataJobs = () => {
  //   fetch(
  //     `https://data.cityofnewyork.us/resource/6fic-ympf.json?$where=latitude is not null&$limit=150`
  //   )
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       this.setState({
  //         locations1: data.map(el => {
  //           return {
  //             latitude: el.latitude,
  //             longitude: el.longitude
  //           };
  //         })
  //         // location1: data.filter(el => el.latitude && el.longitude)
  //       });
  //       console.log("FILTERED! Jobs: ", this.state.locations1);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // dataActivties = () => {
  //   fetch(
  //     `https://data.cityofnewyork.us/resource/mbd7-jfnc.json?$where=latitude is not null&$limit=19&$select=location_1`
  //   )
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       this.setState({
  //         locations2: data.map(el => {
  //           return {
  //             latitude: el.latitude,
  //             longitude: el.longitude
  //           };
  //         })
  //       });
  //       console.log("FILTERED! Acts: ", this.state.locations2);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // onSpotClick = spot => {
  //   console.log("HI selectedSpotId ", this.state.selectedSpotId);
  //   this.setState({ selectedSpotId: spot });
  // };

  // onSpotClick2 = spotAS => {
  //   console.log("HI spotAS ", this.state.selectedASId);
  //   this.setState({ selectedASId: spotAS });
  // };

  // componentDidMount() {
  //   this.dataJobs();
  //   this.dataActivties();
  // }

  // handleText = e => {
  //   this.setState({ searchVal: e.target.value });
  // };

  // handleEnter = e => {
  //   e.preventDefault();
  //   const { searchVal } = this.state;
  //   this.props.history.push(`/search/${searchVal}`);
  // };

  render() {
    const { searchVal, selectedASId, selectedSpotId } = this.state;

    return (
      <div className="home">
        <div className="img-container">
        </div>
        <div className="project">
        <div className="project-name">Youth Connection</div>
        <div className="project-description">Search opportunities for NYC Youth </div>
        </div>
        {/* <div className="page">
          <h1 className="yo">Youth </h1>
          <h1 className="yo">Connection</h1>
        </div> */}

        {/* <form onSubmit={this.handleEnter}>
          <input
            className="searchTerm"
            type="text"
            value={searchVal}
            placeholder="program name"
            onInput={this.handleText}
          />
          <button type="submit" className="searchButton">
            <i class="fa fa-search" />
          </button>
        </form> */}

        {/* <fieldset className='map-container'>
            <legend>Map</legend>

             <Map onRatClick={this.onSpotClick} onRatClick2={this.onSpotClick2} />
            </fieldset>
            <div id='rat-info' className='strong'>
          {selectedSpotId ? MapInfo(selectedSpotId) : <p className='strong'>  </p>}
          
          <hr />
          {selectedASId ? MapInfo2(selectedASId) : <strong> </strong>}

        </div> */}
      </div>
    );
  }
}

export default Home;
