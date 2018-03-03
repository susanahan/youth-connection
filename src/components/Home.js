import React, { Component } from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'

class Home extends Component {
    constructor(props){
      super(props)
      this.state = {
        dataJob:[],
        dataAfter:[]     
      }
    }

    dataJobs=()=> {
        fetch(`https://data.cityofnewyork.us/resource/6fic-ympf.json`)
                .then(response=>{
            return response.json()
        })
        .then(data => {
            console.log('FETCH Jobs: ', data)
            this.setState({
            dataJob: data
            }) 
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    dataActivties=()=> {
        fetch(`https://data.cityofnewyork.us/resource/mbd7-jfnc.json`)
        .then(response=>{
            return response.json()
        })
        .then(data => {
            console.log('FETCH Activties: ', data)
            this.setState({
            dataAfter: data
            }) 
        })
        .catch(err => {
            console.log(err)
        })
    }
    

    componentDidMount(){
        this.dataJobs()
        this.dataActivties()
        
    }


    render() {
        
        return (
          <div>
              <h1>Welcome to Home</h1>
     
          </div>
        );
      }
    }
    
export default Home;
    