import React, { Component } from 'react';
import Layout from "./jobLayout";
import injectTapEventPlugin from 'react-tap-event-plugin';

// const Info = ({ dataArr }) => {
//     return (
//         <div>
//             {dataArr.map((el) => {
//                 return <p> {`Agency: ${el.agency}`} <br></ br>
//                            {`Address: ${el.address}`} <br></ br>
//                            {`Borough community: ${el.borough_community}`} <br></ br>
//                            {`Contact Number: ${el.contact_number}`} <br></ br>
//                            {`Program: ${el.program}`} <br></ br>
//                            {`Program Type: ${el.program_type}`} <br></ br>
//                            {`Site name: ${el.site_name}`} <br></ br>
//                         </p>
//                 })}
//         </div>
//     )
// };


class Jobs extends Component {
    constructor(props){
        super(props)
        this.state = {
          dataJobs:[],
          page: 0
        }
      }

      dataJobs=()=> {
        fetch(`https://data.cityofnewyork.us/resource/6fic-ympf.json?$limit=16&$offset=${this.state.page * 16}`)
        .then(response=>{
            return response.json()
        })
        .then(data => {
            console.log('JOHN FETCH Jobs: ', data)
            this.setState({
                dataJobs: data,
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
    console.log('dataJobs' , dataJobs )
    // console.log('YO THIS BRONX ' ,this.filterBorough('bronx'))
    return(
        <div >
            <h1>Jobs</h1>
            <Layout dataArr={this.state.dataJobs} />
            <span className='next change' onClick={this.handleNext}>NEXT</span>
            
        </div>
    )
    }

}
export default Jobs;