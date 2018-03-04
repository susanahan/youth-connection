import React from "react";
import GoogleMapReact from "google-map-react";
const YOUR_KEY = 'AIzaSyAw18hOsPcRzhnr-O_SuP2XEedQizSUQDI'

const K_WIDTH = 25;
const K_HEIGHT = 20;

const iconImageM = {
    position: 'absolute',
    width: K_WIDTH,
    height: K_HEIGHT,
    left: -K_WIDTH / 2,
    top: -K_HEIGHT / 2,
    border: '1px solid #f44336',
    borderRadius: K_HEIGHT,
    backgroundColor: 'white',
    textAlign: 'center',
    color: '#3f51b5',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 4
  };

const iconImageXS = {
    position: 'absolute',
    width: K_WIDTH,
    height: K_HEIGHT,
    left: -K_WIDTH / 2,
    top: -K_HEIGHT / 2,
    border: '1px solid #f44336',
    borderRadius: K_HEIGHT,
    backgroundColor: 'white',
    textAlign: 'center',
    color: '#3f51b5',
    fontSize: 5,
    fontWeight: 'bold',
    padding: 4
  };

  const iconImageS = {
    position: 'absolute',
    width: K_WIDTH,
    height: K_HEIGHT,
    left: -K_WIDTH / 2,
    top: -K_HEIGHT / 2,
    border: '1px solid #f44336',
    borderRadius: K_HEIGHT,
    backgroundColor: 'white',
    textAlign: 'center',
    color: '#3f51b5',
    fontSize: 10,
    fontWeight: 'bold',
    padding: 4
  };


const greatPlaceStyle = {
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '1px solid #f44336',
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
     <i style={greatPlaceStyle} className='fab fa-earlybirds'>  </i>
    )
 }


const JobsMarker = () =>{
    return( 
     <i style={greatPlaceStyle} className='far fa-money-bill-alt'>  </i>

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
    selectedSpotId: null
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
            locateJobs: data.filter(point => point.latitude && point.longitude)
            }) 
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
        console.log('WHAT IS DATA: ', map1)
        
        this.setState({
            locateActs: map1.filter(point => point.latitude && point.longitude)
            
        
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

  onSpotClick = spot => {
    console.log("clicked on: ", spot);
    this.props.onSpotClick(spot);
    this.setState({ selectedSpotId: spot.unique_key });
  };

  render() {
    const { locateJobs, locateActs, mapOptions, selectedSpotId } = this.state;
    const { zoom } = mapOptions;

    const image = zoom >= 16 ? iconImageM : zoom >= 14 ? iconImageS : iconImageXS;

    return (
        
      <GoogleMapReact
        bootstrapURLKeys={{ key: [YOUR_KEY] }}
        options={this.createMapOptions}
        onChange={this.onMapChange}
        {...defaultOptions}
        {...mapOptions}
      >
        {locateJobs.map(point => (
          <JobsMarker
            locateJobs={point}
            selected={point.unique_key === selectedSpotId}
            lat={point.latitude}
            lng={point.longitude}
          />
        ))}
          {locateActs.map(point => (
          <ASMarker
            locateActs={point}
            selected={point.unique_key === selectedSpotId}
            lat={point.latitude}
            lng={point.longitude}
          />
        ))}
      </GoogleMapReact>
    );
  }
}

export default Map;