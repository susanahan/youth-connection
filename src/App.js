import React, { Component } from 'react';
import { Link, Switch, Route} from 'react-router-dom'

import Home from './components/Home';
import Jobs from './components/Jobs';
import AfterSchool from './components/Afterschool';
import Map from './components/Map';
import Search from "./components/Search"


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataJob:[],
      dataAfter:[],
      nav:'',
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

renderNav=()=>{
    if (this.state.nav === ''){
        this.setState({
            nav: <nav className="HolyGrail-nav">
                  <ul>
        <li className='fas fa-arrow-circle-right'><Link style={{paddingLeft: 3, textDecoration: 'none'}} to="/"> Home </Link>   </li>
        <li className='fas fa-arrow-circle-right'><Link style={{paddingLeft: 3, textDecoration: 'none'}} to="/About-Us"> About Us </Link> </li>
        <li className='fas fa-arrow-circle-right'><Link style={{paddingLeft: 3, textDecoration: 'none'}} to="/Jobs-Internships"> Jobs & Internships </Link> </li>
        <li className='fas fa-arrow-circle-right'><Link style={{paddingLeft: 3, textDecoration: 'none'}} to="/AS-Activites"> After School Activites </Link> </li>
      </ul> </nav>
        })
    }else{
        this.setState({
            nav: ''
        })
    }
}

  handleSearch = ({match}) => {
    const { dataJob, searchVal } = this.state
   return <Search infoArr={dataJob} match={match}/>
  }

  handleJobs = () => {
  return <Jobs bronx={this.state.Bronx} brooklyn={this.state.Brooklyn} queens={this.state.Queens}
  ny={this.state['New York']} manhattan={this.state.Manhattan} />
  }

  handleText = (e) => {
    this.setState({searchVal:e.target.value})
  }

  renderHome = ({history}) => {
    const { dataJob, dataAfter,searchVal } = this.state
    return <Home props={this.state.dataJob} props={this.state.dataAfter} history={history} handleText={this.handleText} />
  }
 
  render() {
    return (
      <div className="HolyGrail-body">
          <div onClick={this.renderNav} className="menu-icon">
          </div>
          {this.state.nav}        

    
          <Switch>
    
         <Route exact path="/" component={Home} />
         <Route  path="/About-Us" render={""} />
         <Route  path="/Jobs-Internships" render={props=>(
                     <Jobs dataJob={this.state.dataJob} 
                     />                    
                    )}/>
          <Route path="/search/:name" render={this.handleSearch}/>
          <Route  path="/AS-Activites" component={AfterSchool} />
  
          </Switch>
      </div>
    );
  }
}

export default App;
