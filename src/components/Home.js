import React, { Component } from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
// import { GoogleMap } from "react-google-maps"
import GoogleMapReact from 'google-map-react';
const YOUR_KEY = 'AIzaSyAw18hOsPcRzhnr-O_SuP2XEedQizSUQDI'

const K_WIDTH = 20;
const K_HEIGHT = 20;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
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
    <i className='fab fa-earlybirds'>  </i>
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
//   const MapWithAMarker = withScriptjs(withGoogleMap(props =>
//     <GoogleMap
//       defaultZoom={8}
//       defaultCenter={{ lat: 40.61904739455146, lng: -73.96399704536418 }}
//     >
//       <Marker
//         position={{ lat: 40.61904739455146, lng: -73.96399704536418 }}
//       />
//     </GoogleMap>
//   ));
  


// const defaultOptions = {
//     defaultCenter: { lat: 40.7128, lng: -73.9 },
//     defaultZoom: 12
//   };

//   const AS_Symbol = ({selected}) => (
//     <div
//       className={selected ? "symbol selected" : "earlybirds"}
//           />
//   );

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
       constructor(props){
        super(props)
        this.state = {
        //   mapOptions: defaultOptions,   
          spots: []   
        }
      }

  static defaultProps = {
    center: {lat: 40.7128, lng: -73.9},
    zoom: 12
  };

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: [YOUR_KEY] }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <ASMarker
          lat={40.7128}
          lng={-73.9}
          text={'Kreyser Avrora'}
        />
        <JobsMarker
          lat={40.7128}
          lng={-73.9}
          text={'Kreyser Avrora'}
        />
        {/* <ASMarker /> */}
      </GoogleMapReact>
    );
  }
}
  
// class Map extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //       mapOptions: defaultOptions,   
    //       spots: []   
    //     }
    //   }
  
    //   onMapChange = options => {
    //     this.setState({
    //       mapOptions: options
    //     });
    //   };
    // render() { 
    //  return (
    //         <div style={{height: '300px', width: '300px'}} >
    //           <GoogleMapReact
    //           bootstrapURLKeys={{ key: "AIzaSyAw18hOsPcRzhnr-O_SuP2XEedQizSUQDI" }}
    //           defaultCenter={this.props.center}
    //           defaultZoom={this.props.zoom}
    //           >
    //           {this.state.spots.map(spot => (
    //           <AS_Symbol
    //           lat={59.955413}
    //           lng={30.337844}
    //           text={'Kreyser Avrora'}
    //           />
    //           ))}
    //           </GoogleMapReact>
    //           hfde
              
    //         </div>
    //       );
    //     }
    //   }

      
class Home extends Component {
    constructor(props){
      super(props)
      this.state = {
        dataJob:[],
        dataAfter:[],
        selectedSpot: null   
      }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state !== nextState;
      }

    dataJobs=()=> {
        fetch(`https://data.cityofnewyork.us/resource/6fic-ympf.json?$limit=150`)
                .then(response=>{
            return response.json()
        })
        .then(data => {
            // console.log('FETCH Jobs: ', data)
            this.setState({
            dataJob: data
            }) 
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    dataActivties=()=> {
        fetch(` https://data.cityofnewyork.us/resource/mbd7-jfnc.json?$where=latitude > 1&$limit=150`)
        .then(response=>{
            return response.json()
        })
        .then(data => {
            // console.log('FETCH Activties: ', data)
            this.setState({
            dataAfter: data
            }) 
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    onSpotClick = spot => {
        this.setState({ selectedSpot: spot });
      };

    componentDidMount(){
        this.dataJobs();
        this.dataActivties();
    }

    render() {
        
        return (
          <div>
            <h1>Welcome to Home</h1>
            {/* <Map onClick={this.onSpotClick} /> */}
            {/* <MapWithAMarker
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  /> */}

<div style={{width: '50%', height: '400px'}}>
    <SimpleMap/>
  </div>
          </div>
        );
      }
    }
    

export default Home;
    