import React from "react";
import GoogleMapReact from "google-map-react";
const YOUR_KEY = 'AIzaSyAw18hOsPcRzhnr-O_SuP2XEedQizSUQDI'

const K_WIDTH = 25;
const K_HEIGHT = 20;

const greatPlaceStyle = {
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '2px solid #f44336',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 20,
  fontWeight: 'bold',
  padding: 4
};

const ASMarker = () =>{
    return( 
    <div style={greatPlaceStyle}>
     <i className='fas fa-star'>  </i>
     </div>
    )
 }


const JobsMarker = () =>{
    return( 
    <div style={greatPlaceStyle}>
     <i className='far fa-money-bill-alt'>  </i>
     </div>
    )
 }

const defaultOptions = {
  defaultCenter: { lat: 40.7128, lng: -73.9 },
  defaultZoom: 12
};

class Map extends React.Component {
  state = {
    mapOptions: defaultOptions,
    locateJobs: [],
    locateActs: [],
    selectedRatId: null
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }

  componentDidMount(){
    this.dataJobs();
    this.dataActivties();
}

dataJobs=()=> {
    fetch(`https://data.cityofnewyork.us/resource/6fic-ympf.json?$where=latitude is not null&$limit=150`)
            .then(response=>{
        return response.json()
    })
    .then(data => {
        this.setState({
            locateJobs: data.filter(rat => rat.latitude && rat.longitude)
            // location1: data.filter(el => el.latitude && el.longitude)
            }) 
        console.log('FILTERED! Jobs: ', this.state.locateJobs)
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
        this.setState({
            locateActs: data.filter(rat => rat.latitude && rat.longitude)
            
            // locateActs: data.map(el => { 
            //     return {latitude: el.latitude, 
            //             longitude:el.longitude}
            //         })
            }) 
        console.log('FILTERED! Acts: ', this.state.locateActs)
            
    })
    .catch(err => {
        console.log(err)
    })
}


  onMapChange = options => {
    this.setState({
      mapOptions: options
    });
  };

  onRatClick = rat => {
    console.log("clicked on: ", rat);
    this.props.onRatClick(rat);
    this.setState({ selectedRatId: rat.unique_key });
  };

  render() {
    const { locateJobs, locateActs, mapOptions, selectedRatId } = this.state;
    // const { zoom } = mapOptions;

    // const image = zoom >= 16 ? ratImageM : zoom >= 14 ? ratImageS : ratImageXS;

    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: [YOUR_KEY] }}
        options={this.createMapOptions}
        onChange={this.onMapChange}
        {...defaultOptions}
        {...mapOptions}
      >
        {locateJobs.map(rat => (
          <JobsMarker
            locateJobs={rat}
            selected={rat.unique_key === selectedRatId}
            lat={rat.latitude}
            lng={rat.longitude}
          />
        ))}
          {locateActs.map(rat => (
          <ASMarker
            locateActs={rat}
            selected={rat.unique_key === selectedRatId}
            lat={rat.latitude}
            lng={rat.longitude}
          />
        ))}
      </GoogleMapReact>
    );
  }
}

export default Map;