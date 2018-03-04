import React, { Component } from 'react';
import { Link, Switch, Route} from 'react-router-dom'
import About from './components/AboutUs'
import Home from './components/Home';
import Jobs from './components/Jobs';
import AfterSchool from './components/Afterschool'
import Map from './components/Map'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataJob:[],
      dataAfter:[],
      nav:''
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

renderNav=()=>{
    if (this.state.nav === ''){
        this.setState({
            nav: <nav className="HolyGrail-nav">
                  <ul>
        <li className='fas fa-arrow-circle-right'><Link style={{paddingLeft: 3, textDecoration: 'none'}} to="/"> Home </Link>   </li>
        <li className='fas fa-arrow-circle-right'><Link style={{paddingLeft: 3, textDecoration: 'none'}} to="/Jobs-Internships"> Jobs & Internships </Link> </li>
        <li className='fas fa-arrow-circle-right'><Link style={{paddingLeft: 3, textDecoration: 'none'}} to="/AS-Activites"> After School Activites </Link> </li>
        <li className='fas fa-arrow-circle-right'><Link style={{paddingLeft: 3, textDecoration: 'none'}} to="/About-Us"> About Us </Link> </li>
      </ul> </nav>
        })
    }else{
        this.setState({
            nav: ''
        })
    }
}

  render() {
    return (
      <div className="HolyGrail-body">
          {/* <div className="menu-icon">
          </div> */}
<nav className="HolyGrail-nav">
                  <ul>
        <li className='fas fa-home'><Link style={{paddingLeft: 2, textDecoration: 'none'}} to="/"> Home </Link> </li>| {" "} 
        <li className='fas fa-dollar-sign'><Link style={{paddingLeft: 2, textDecoration: 'none'}} to="/Jobs-Internships"> Jobs & Internships </Link> </li> |{" "} 
        <li className='fas fa-puzzle-piece'><Link style={{paddingLeft: 2, textDecoration: 'none'}} to="/AS-Activites"> After School Activites </Link> </li>|{" "}
        <li className='fas fa-users'><Link style={{paddingLeft: 2, textDecoration: 'none'}} to="/About-Us"> About Us </Link> </li>
      </ul> </nav>
          <Switch>
         <Route exact path="/" component={Home} />
         <Route  path="/About-us" render={About} />
         <Route  path="/Jobs-Internships" render={props=>(
                     <Jobs dataJob={this.state.dataJob} 
                     />                    
                    )}/>
          
          <Route  path="/AS-Activites" component={AfterSchool} />
  
          </Switch>
      </div>
    );
  }
}

export default App;
