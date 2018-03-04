import React from "react";

class Activities extends React.Component {
  constructor(props){
      super(props)

    //   this.state ={
    //       arr: this.p
    //   }
  }

  classArr = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "tweleve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty"
  ];

  render() {
    console.log("calling", this.props);
    return (
      <div>
        <div className="outside outline">
        <div className="container">
        <div className="one title"><h1>AfterSchool Activities</h1></div>
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
      </div>
    );
  }
}

export default Activities;