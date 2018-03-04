import React from "react";

class Jobs extends React.Component {
  constructor(props){
      super(props)

    //   this.state ={
    //       arr: this.p
    //   }
  }

  classArr = [
    "jone",
    "jtwo",
    "jthree",
    "jfour",
    "jfive",
    "jsix",
    "jseven",
    "jeight",
    "jnine",
    "jten",
    "jeleven",
    "jtweleve",
    "jthirteen",
    "jfourteen",
    "jfifteen",
    "jsixteen",
    "jseventeen"
  ];

  render() {
    console.log("calling", this.props);
    return (
      <div>
        {/* <div className="outside outline"> */}
        <div className="container">
        <div className="jone title job"><h1>JOBS AND INTERNSHIPS</h1></div>
          {this.props.dataArr.map((el, idx) =><div className={this.classArr[idx+1] + " change"}>
            <h3>{`Agency: ${el.agency}`} </h3>
            <p>{`Borough community: ${el.borough_community}`}</p>
            <p>{`Contact Number: ${el.contact_number}`}</p>
            <p>{`Program: ${el.program}`}</p>
            <p>{`Program Type: ${el.program_type}`}</p>
            <p>{`Site name: ${el.site_name}`}</p>
          </div>)
          }
        </div>
        </div>
      // </div>
    );
  }
}

export default Jobs;