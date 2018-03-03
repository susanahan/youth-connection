import React, { Component } from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import AfterSchool from './components/Afterschool'


class App extends Component {
  constructor(){
    super()
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
          <nav>
            
          <Link to="/About-Us"> About Us </Link>|
          <Link to="/Jobs-Internships"> Jobs& Internships </Link> |
          <Link to="/AS-Activites"> After School Activites </Link> |
  
      </nav>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/" render={props=>(
                          <Home dataJob={this.state.dataJob} 
                                dataActivties={this.state.dataAfter} />
                     )}/>
          <Route exact path="/About-Us" render={""} />
          <Route path="/Jobs-Internships" component={""} />
          <Route  path="/AS-Activites" component={AfterSchool} />
  
          </Switch>
      </div>
    );
  }
}

export default App;
