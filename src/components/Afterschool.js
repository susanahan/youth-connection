import React, { Component } from 'react';
import Activities from "./activitiesLayout"



class AfterSchool extends Component {
    constructor(props){
      super(props)
      this.state = {
        dataAfter:[],
        page:0    
      }
    }

    
    dataActivties=()=> {
        fetch(`https://data.cityofnewyork.us/resource/mbd7-jfnc.json?$where=latitude > 1&$limit=19&$offset=${this.state.page * 19}`)
        .then(response=>{
            return response.json()
        })
        .then(data => {
            console.log('setState: ', this.setState)
    
            this.setState({
            dataAfter: data
            }) 
        })
        .catch(err => {
            console.log(err)
        })
    }
    

    componentDidMount(){
        this.dataActivties()    
    }

    handleNext = () => {
        this.setState({
            page: this.state.page + 1
        })

        this.dataActivties()
    }
      
    render() {
            console.log(' Activties: ', this.state.dataAfter)
        
        return (
          <div>
              <h1>Afterschool</h1>
     <Activities dataArr={this.state.dataAfter} />
     <span className='next change' onClick={this.handleNext}>NEXT</span>

          </div>
        );
      }
    }
    
export default AfterSchool;
    