import React, { Component } from 'react';

// const Jobs = ({bronx, ny, brooklyn, queens, manhattan}) =>{
class Jobs extends Component {
    constructor(props){
        super(props)
        this.state = {
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
        fetch(`https://data.cityofnewyork.us/resource/6fic-ympf.json?$limit=19`)
                .then(response=>{
            return response.json()
        })
        .then(data => {
            console.log('JOHN FETCH Jobs: ', data)
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

    componentDidMount=() => {
        this.dataJobs()
    }

render() {  
    const NY = this.state['New York']
    const SI = this.state['Staten Island']
    const LIC = this.state['Long Island City']
    const {Bronx, Brooklyn, Manhattan, Queens, } =this.state
    return(
        <div id="container-jobs">
            <h1>Bronx Jobs and Internships</h1>
            <div className="bronx">
                {Bronx.map(job=>(
                    <div className='jobPost'>
                    <p>
                        {job.agency}
                    </p>
                    <p>
                        {job.address}
                    </p>
                    <p>
                        {job.contact_number}
                    </p><br/>
                    </div>
                ))}
            </div>
            <h1>New York Jobs and Internships</h1>
            <div className="NY">
                {NY.map(job=>(
                    <div className='jobPost'>
                    <p>
                        {job.agency}
                    </p>
                    <p>
                        {job.address}
                    </p>
                    <p>
                        {job.contact_number}
                    </p><br/>
                    </div>
                ))}
            </div>
            <h1>Manhattan Jobs and Internships</h1>
            <div className="manhattan">
                {Manhattan.map(job=>(
                    <div className='jobPost'>
                    <p>
                        {job.agency}
                    </p>
                    <p>
                        {job.address}
                    </p>
                    <p>
                        {job.contact_number}
                    </p><br/>
                    </div>
                ))}
            </div>
            <h1>Queens Jobs and Internships</h1>
            <div className="queens">
                {Queens.map(job=>(
                    <div className='jobPost'>
                    <p>
                        {job.agency}
                    </p>
                    <p>
                        {job.address}
                    </p>
                    <p>
                        {job.contact_number}
                    </p><br/>
                    </div>
                ))}
            </div>
            <h1>Brooklyn Jobs and Internships</h1>
            <div className="brooklyn">
                {Brooklyn.map(job=>(
                    <div className='jobPost'>
                    <p>
                        {job.agency}
                    </p>
                    <p>
                        {job.address}
                    </p>
                    <p>
                        {job.contact_number}
                    </p><br/>
                    </div>
                ))}
            </div>
                        
        </div>
    )
    }

}
export default Jobs;