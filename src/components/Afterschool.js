import React, { Component } from 'react';

// const ASinfo = data => {
//     // const formattedDate = formatDate(date);
  
//     return (
//       <div>
//           {data.map(data => x * 2)}
//         {/* Spotted on: {formattedDate} <br />
//         Location type: {rat.location_type} <br />
//         Address: {rat.incident_address} */}
//       </div>
//     );
//   };

  const Info = ({ dataArr }) => {
    return (
        <div>
                {dataArr.map((el) => {
                    return <p> {`Agency: ${el.agency}`} <br></ br>
                               {`Borough community: ${el.borough_community}`} <br></ br>
                               {`Contact Number: ${el.contact_number}`} <br></ br>
                               {`Program: ${el.program}`} <br></ br>
                               {`Program Type: ${el.program_type}`} <br></ br>
                               {`Site name: ${el.site_name}`} <br></ br>
                           </p>
                })}
        </div>
    )
};
  

class AfterSchool extends Component {
    constructor(props){
      super(props)
      this.state = {
        dataAfter:[]     
      }
    }

    
    dataActivties=()=> {
        fetch(`https://data.cityofnewyork.us/resource/mbd7-jfnc.json?$where=latitude > 1&$limit=19`)
        .then(response=>{
            return response.json()
        })
        .then(data => {
            console.log('setState: ', this.setState)
            // let datas = data.map(card => {
            //     return data;
            // });
    
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


    render() {
            console.log(' Activties: ', this.state.dataAfter)
        
        return (
          <div>
              <h1>Afterschool</h1>
     <Info dataArr={this.state.dataAfter} />
          </div>
        );
      }
    }
    
export default AfterSchool;
    