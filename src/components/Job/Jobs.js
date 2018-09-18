import React, { Component } from 'react';
import Layout from "./jobLayout";
import axios from "axios";
import injectTapEventPlugin from 'react-tap-event-plugin';

class Jobs extends Component {
    constructor(props){
        super(props)
        this.state = {
          jobs:[],
          page: 0
        }
      }

      dataJobs=()=> {
        axios
        .get(`https://data.cityofnewyork.us/resource/6fic-ympf.json?$limit=16&$offset=${this.state.page * 16}`)
        .then(data => {
            this.setState({
                jobs: data,
            }) 
        })
        .catch(err => {
            console.log(err)
        })
    }
      
    handleNext = () => {
        this.setState({
            page: this.state.page + 1
        })

        this.dataJobs()
    }
      

//   filterBorough=(placeholder)=>{
//       let {dataJobs} = this.state
//         let obj = {
//             queens: dataJobs.filter(point => point.borough_community === 'Queens' && 'Long Island  City'),
//             manhattan: dataJobs.filter(point => point.borough_community === 'Manhattan' && 'New York'),
//             bronx: dataJobs.filter(point => point.borough_community === 'Bronx'),
//             si: dataJobs.filter(point => point.borough_community === 'Staten Island'),
//             brooklyn: dataJobs.filter(point => point.borough_community === 'Brooklyn'),
            
//         }
//         return obj[placeholder]
//     }

    componentDidMount=() => {
        this.dataJobs()
    }

render() {  
    const {dataJobs } =this.state
    // console.log('dataJobs' , dataJobs )
    // console.log('YO THIS BRONX ' ,this.filterBorough('bronx'))
    return(
        <div >
            {/* <h1>Jobs</h1> */}
            <Layout dataArr={this.state.jobs} />
            <span className='next change' onClick={this.handleNext}>NEXT</span>
            
        </div>
    )
    }

}
export default Jobs;