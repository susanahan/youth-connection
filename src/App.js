import React, { Component } from 'react';
import { Link, Switch, Route} from 'react-router-dom'
import About from './components/AboutUs'
import Home from './components/Home';
import Jobs from './components/Jobs';
import AfterSchool from './components/Afterschool'
import Search from "./components/Search";
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataJob:[],
      dataAfter:[],
      searchVal: ''      
    }
  }

  dataJobs=()=> {
      fetch(`https://data.cityofnewyork.us/resource/6fic-ympf.json`)
              .then(response=>{
          return response.json()
      })
      .then(data => {
        //   console.log('FETCH Jobs: ', data)
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
      this.dataJobs();
      this.dataActivties();
  }

  handleSearch = ({match}) => {
    const { dataJob } = this.state
    console.log('just making some changes')
   return <Search infoArr={dataJob} match={match}/>
  }

  handleJobs = () => {
  return <Jobs bronx={this.state.Bronx} brooklyn={this.state.Brooklyn} queens={this.state.Queens}
  ny={this.state['New York']} manhattan={this.state.Manhattan} />
  }

  handleText = (e) => {
    this.setState({searchVal:e.target.value})
  }

//   renderHome = ({history}) => {
//     const { dataJob, dataAfter,searchVal } = this.state
//     return <Home props={this.state.dataJob} props={this.state.dataAfter} history={history} handleText={this.handleText} />
//   }

  render() {
    return (
      <div className="HolyGrail-body">
          {/* <div className="menu-icon">
          </div> */}
<nav className="HolyGrail-nav">
                  <ul>
        <li className='fas fa-home'><Link style={{paddingRight: 7, textDecoration: 'none'}} to="/"> HOME </Link> </li> {" "} {" "} 
        <li className='fas fa-dollar-sign'><Link style={{paddingRight: 7, textDecoration: 'none'}} to="/Jobs-Internships"> JOBS & INTERNSHIPS </Link> </li> {" "} {" "} 
        <li className='fas fa-puzzle-piece'><Link style={{paddingLeft: 7, paddingRight: 7, textDecoration: 'none'}} to="/AS-Activites"> AFTER SCHOOL ACTIVITES </Link> </li>{" "}{" "} 
        <li className='fas fa-users'><Link style={{ paddingLeft: 7, textDecoration: 'none'}} to="/About-Us"> ABOUT US </Link> </li>
      </ul> </nav>
          <Switch>
         <Route exact path="/" component={Home} />
         <Route  path="/About-us" render={About} />
         <Route  path="/Jobs-Internships" render={props=>(
                     <Jobs dataJob={this.state.dataJob} 
                     />                    
                    )}/>
          
          <Route  path="/AS-Activites" component={AfterSchool} />
          <Route path="/search/:name" render={this.handleSearch}/>

          </Switch>
      </div>
    );
  }
}

export default App;
