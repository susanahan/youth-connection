import React from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";

import JobsMarker from "./MapMarker";
import AsMarker from "./MapMarker2";

const defaultOptions = {
  defaultCenter: { lat: 40.7128, lng: -73.9 },
  defaultZoom: 12
};

class Map extends React.Component {
  state = {
        mapOptions: defaultOptions,
        locateJobs: [],
        locateActs: [],
        selectedSpotId: null,
        selectedASId:null           
      };

  shouldComponentUpdate(nextProps, nextState) {
    // Since this component does not depend on props, we only rerender when state changes
    // So we avoid unneeded renders when parent (App) component rerenders
    return this.state !== nextState;
  }

dataJobs=()=> {
    fetch(`https://data.cityofnewyork.us/resource/6fic-ympf.json?$where=latitude is not null&$limit=150`)
            .then(response=>{
        return response.json()
    })
    .then(data => {
      let map1 = data.map(x => x);
      console.log('yo ', map1)
        this.setState({
            locateJobs: map1.filter(point => point.latitude && point.longitude)
            }) 
            console.log('WHAT IS locateJobs:  ', this.state.locateJobs)
            
    })
    .catch(err => {
        console.log(err)
    })
}


dataActivties=()=> {
    fetch(`https://data.cityofnewyork.us/resource/mbd7-jfnc.json?$where=latitude is not null&$limit=19&$select=location_1`)
    .then(response=>{
        return response.json()
    })
    .then(data => {
        let map1 = data.map(x => x.location_1);
        
        console.log('WHAT IS DATA1: ', map1)
        
        this.setState({
            locateActs: map1.filter(point => point.latitude && point.longitude)
            
            }) 
        console.log('FILTERED! Acts: ', this.state.locateActs)
    })
    .catch(err => {
        console.log(err)
    })
}


  componentDidMount() {
    // Get the 200 latest rat sightings
   this.dataActivties();
   this.dataJobs();
  }

  onMapChange = options => {
    this.setState({
      mapOptions: options
    });
  };

  onRatClick = spot => {
    console.log("clicked on: ", spot);
    this.props.onRatClick(spot);
    this.setState({ selectedSpotId: spot.bin });
  };

  onRatClick2 = spot => {
    console.log("clicked on2: ", spot);
    this.props.onRatClick2(spot);
    this.setState({ selectedASId: spot.bin });
  };

  render() {
    const { locateJobs, locateActs, mapOptions, selectedSpotId, selectedASId } = this.state;
    const { zoom } = mapOptions;

    // const image = zoom >= 16 ? ratImageM : zoom >= 14 ? ratImageS : ratImageXS;

    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyAw18hOsPcRzhnr-O_SuP2XEedQizSUQDI"
        }}
        options={this.createMapOptions}
        onChange={this.onMapChange}
        {...defaultOptions}
        {...mapOptions}
      > 
        {locateJobs.map((spot,index) => (
          <JobsMarker
            spot={spot}
            selected={index === selectedSpotId}
            onRatClick={this.onRatClick}
            key={index}
            lat={spot.latitude}
            lng={spot.longitude}
          />
        ))}
        {locateActs.map((spot,index) => (
          <AsMarker
            spot={spot}
            selected={index === selectedASId}
            onRatClick2={this.onRatClick2}
            key={index}
            lat={spot.latitude}
            lng={spot.longitude}
          />
        ))}
      </GoogleMapReact>
    );
  }
}

export default Map;