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
        <div className="container">
        <div className="one"><h1>AfterSchool Activities</h1></div>
          {this.props.dataArr.map((el, idx) =><div className={this.classArr[idx+1]}><p>
            {" "}
            {`Agency: ${el.agency}`} <br />
            {`Borough community: ${el.borough_community}`} <br />
            {`Contact Number: ${el.contact_number}`} <br />
            {`Program: ${el.program}`} <br />
            {`Program Type: ${el.program_type}`} <br />
            {`Site name: ${el.site_name}`} <br />
          </p>
          </div>)
          }
        </div>
      </div>
    );
  }
}

export default Activities;