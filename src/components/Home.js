import React, { Component } from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import Search from "./Search"

class Home extends Component {
    constructor(props){
      super(props)
      this.state = {
        dataJob:[],
        dataAfter:[],
        searchVal:''     
      }
    }

    dataJobs=()=> {
        fetch(`https://data.cityofnewyork.us/resource/6fic-ympf.json`)
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
        fetch(`https://data.cityofnewyork.us/resource/mbd7-jfnc.json`)
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

    componentDidMount(){
        this.dataJobs()
        this.dataActivties()
        
    }
    handleText = (e) => {
        this.setState({searchVal:e.target.value})
    }

    handleEnter = (e) => {
        e.preventDefault()
        console.log(e.target.value)
            this.props.history.push(`/search/${e.target.value}`)
     }

    render() {
        const { searchVal } = this.state
        return (
          <div>
              <h1>Welcome to Home</h1>
              <form onSubmit={this.handleEnter}>
                  <input 
                  type="text"
                  value={searchVal}
                  placeholder="program name"
                  onInput = {this.handleText}
                  />
            </form>
     
          </div>
        );
      }
    }
    
export default Home;
    