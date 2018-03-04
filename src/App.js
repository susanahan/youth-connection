import React, { Component } from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Jobs from './components/Jobs';
import Search from "./components/Search";
import AfterSchool from "./components/Afterschool";


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
      'Long Island  City': [],
      searchVal: ''
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

  handleText = (e) => {
    this.setState({searchVal:e.target.value})
  }

  renderHome = ({history}) => {
    const { dataJob, dataAfter,searchVal } = this.state
    return <Home props={this.state.dataJob} props={this.state.dataAfter} history={history} handleText={this.handleText} />
  }

  handleSearch = () => {
    const { dataJob, searchVal } = this.state
   return <Search infoArr={dataJob} text={searchVal} />
  }

  handleJobs = () => {
  return <Jobs bronx={this.state.Bronx} brooklyn={this.state.Brooklyn} queens={this.state.Queens}
  ny={this.state['New York']} manhattan={this.state.Manhattan} />
  }
 
  render() {
    return (
      <div>
          <nav>
            
          <Link to="/"> Home </Link>|
          <Link to="/About-Us"> About Us </Link>|
          <Link to="/Jobs-Internships"> Jobs & Internships </Link> |
          <Link to="/AS-Activites"> After School Activites </Link> 
  
      </nav>
          <Switch>
          <Route exact path="/" render={this.renderHome}>
          </Route>
          {/* <Route exact path="/About-Us" render={""} /> */}
          <Route path="/search" render={this.handleSearch}/>
          <Route path="/Jobs-Internships" render={this.handleJobs}>
          </Route>
          <Route  path="/AS-Activites" component={AfterSchool} />
  
          </Switch>
      </div>
    );
  }
}

export default App;
