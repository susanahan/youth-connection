import React from 'react';

class Home extends React.Component{
    state = [];

    componentDidMount(){
        fetch('https://data.cityofnewyork.us/resource/6fic-ympf.json')
        .then(res=>{
            console.log(res);
        })
    }

    render(){
        return(
            <div>
                
            </div>
        )
    }
}

export default Home;