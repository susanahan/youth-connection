import React, { Component } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Search from "./Search";
// import { Link, Switch, Route} from 'react-router-dom'
// import { GoogleMap } from "react-google-maps"
import Map from "./Map";
import GoogleMapReact from "google-map-react";
const YOUR_KEY = "AIzaSyAw18hOsPcRzhnr-O_SuP2XEedQizSUQDI";

const K_WIDTH = 25;
const K_HEIGHT = 20;

const greatPlaceStyle = {
  position: "absolute",
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: "2px solid #f44336",
  borderRadius: K_HEIGHT,
  backgroundColor: "white",
  textAlign: "center",
  color: "#3f51b5",
  fontSize: 20,
  fontWeight: "bold",
  padding: 4
};

const ASMarker = () => {
  return (
    <div style={greatPlaceStyle}>
      <i className="far fa-earlybirds"> </i>
    </div>
  );
};

const JobsMarker = () => {
  return (
    <div style={greatPlaceStyle}>
      <i className="far fa-money-bill-alt"> </i>
    </div>
  );
};

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spots: []
    };
  }

  static defaultProps = {
    center: { lat: 40.7128, lng: -73.9 },
    zoom: 12
  };

  render() {
    const { locations1, locations2 } = this.state;
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: [YOUR_KEY] }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <ASMarker lat={""} lng={""} />

        <JobsMarker lat={40.7228} lng={-73.9} />
      </GoogleMapReact>
    );
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataJob: [],
      dataAfter: [],
      searchVal: ""
    };
  }

  dataJobs = () => {
    fetch(
      `https://data.cityofnewyork.us/resource/6fic-ympf.json?$where=latitude is not null&$limit=150`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          locations1: data.map(el => {
            return {
              latitude: el.latitude,
              longitude: el.longitude
            };
          })
          // location1: data.filter(el => el.latitude && el.longitude)
        });
        console.log("FILTERED! Jobs: ", this.state.locations1);
      })
      .catch(err => {
        console.log(err);
      });
  };

  dataActivties = () => {
    fetch(
      `https://data.cityofnewyork.us/resource/mbd7-jfnc.json?$where=latitude is not null&$limit=19&$select=location_1`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          locations2: data.map(el => {
            return {
              latitude: el.latitude,
              longitude: el.longitude
            };
          })
        });
        console.log("FILTERED! Acts: ", this.state.locations2);
      })
      .catch(err => {
        console.log(err);
      });
  };

  onSpotClick = spot => {
    this.setState({ selectedSpot: spot });
  };

  componentDidMount() {
    this.dataJobs();
    this.dataActivties();
  }
  handleText = e => {
    this.setState({ searchVal: e.target.value });
  };

  handleEnter = e => {
    e.preventDefault();
    const { searchVal } = this.state;
    this.props.history.push(`/search/${searchVal}`);
  };

  render() {
    const { searchVal } = this.state;
    return (
      <div>
        <h1>Welcome to Home</h1>
        <form onSubmit={this.handleEnter}>
          <input
            type="text"
            value={searchVal}
            placeholder="program name"
            onInput={this.handleText}
          />
        </form>
        <fieldset className="map-container">
          <legend>Map</legend>

          <Map onSpotClick={this.onSpotClick} />
        </fieldset>
        <div style={{ width: "50%", height: "400px" }}>
          <SimpleMap />
          <Map />
        </div>
      </div>
    );
  }
}

export default Home;
