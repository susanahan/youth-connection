import React, { Component } from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Jobs from './components/Jobs';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataJob:[],
      dataAfter:[],
      Bronx:[],
      Brooklyn: [],
      'New York': [],
      Manhattan: [],
      Queens: [],
      'Staten Island': [],
      'Long Island  City': []
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
      this.boroughComunity();
      })
      .catch(err => {
          console.log(err)
      })
  }
  boroughComunity = () =>{
    let boroughs = [];
    if(this.state.dataJob.length > 0){
      this.state.dataJob.forEach(job=>{
        if(!boroughs.includes(job.borough_community)){
          boroughs.push(job.borough_community);
        };
      });
      this.setState({boroughs: boroughs});
      this.state.dataJob.map(job=>{
        boroughs.map(b=>{
          if(job.borough_community === b){
            this.setState({
              b: this.state[b].push(job)
            });
          }
        })
      })
    };

  };
  
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
      this.dataJobs();
      this.dataActivties();
      
  }


  render() {
    // console.log("NY ", this.state['New York']);
    // console.log('Manhattan ', this.state.Manhattan)
    return (
      <div>
          <nav>
            
          <Link to="/About-Us"> About Us </Link>|
          <Link to="/Jobs-Internships"> Jobs& Internships </Link> |
          <Link to="/AS-Activites"> After School Activites </Link> |
  
      </nav>
          <Switch>
          <Route exact path="/">
            <Home props={this.state.dataJob} props={this.state.dataAfter} />
          </Route>
          <Route exact path="/About-Us" render={""} />
          <Route path="/Jobs-Internships">
            <Jobs bronx={this.state.Bronx} brooklyn={this.state.Brooklyn} queens={this.state.Queens}
            ny={this.state['New York']} manhattan={this.state.Manhattan} />
          </Route>
          <Route  path="/AS-Activites" component={""} />
  
          </Switch>
      </div>
    );
  }
}

export default App;
