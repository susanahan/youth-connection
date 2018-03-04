import React, { Component } from 'react';
// import { Link, Switch, Route} from 'react-router-dom'
// import { GoogleMap } from "react-google-maps"
import Map from './Map'
import GoogleMapReact from 'google-map-react';

    
class Home extends Component {
    constructor(props){
      super(props)
      this.state = {
        dataJob:[],
        dataAfter:[], 
      }
    }


    dataJobs=()=> {
        fetch(`https://data.cityofnewyork.us/resource/6fic-ympf.json?$where=latitude is not null&$limit=150`)
                .then(response=>{
            return response.json()
        })
        .then(data => {
            this.setState({
                locations1: data.map(el => { 
                    return {latitude: el.latitude, 
                            longitude:el.longitude}
                        })
                // location1: data.filter(el => el.latitude && el.longitude)
                }) 
            console.log('FILTERED! Jobs: ', this.state.locations1)
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
                locations2: data.map(el => { 
                    return {latitude: el.latitude, 
                            longitude:el.longitude}
                        })
                }) 
            console.log('FILTERED! Acts: ', this.state.locations2)
                
        })
        .catch(err => {
            console.log(err)
        })
    }
    
 
    componentDidMount(){
        this.dataJobs();
        this.dataActivties();
    }

    render() {

        return (
        <div>
            <fieldset className='map-container'>
            <legend>Map</legend>

             <Map onSpotClick={this.onSpotClick} />
            </fieldset>
        </div>
        
        );
      }
    }
    

export default Home;
    