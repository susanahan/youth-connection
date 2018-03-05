import React from "react";
import Dialog from "material-ui/Dialog";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
const muiTheme = getMuiTheme();

class Activities extends React.Component {
  constructor(props){
      super(props)

      this.state ={
          open: false
      }
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

  handleDialogOpen = () => {
    console.log("its opening");
    this.setState({ open: true });
  };
  handleDialogClose = () => {
    this.setState({ open: false });
  };

  render() {
    console.log("calling", this.props);
    return (
      <div>
        <div className="outside outline">
        <div className="container">
        <div className="one title"><h1>AfterSchool Activities</h1></div>
          {this.props.dataArr.map((el, idx) =><div onTouchTap={this.handleDialogOpen} className={this.classArr[idx+1] + " change"}>
            <h3>{`Agency: ${el.agency}`} </h3>
            <p>{`Borough community: ${el.borough_community}`}</p>
            <p>{`Contact Number: ${el.contact_number}`}</p>
            <p>{`Program: ${el.program}`}</p>
            <p>{`Program Type: ${el.program_type}`}</p>
            <p>{`Site name: ${el.site_name}`}</p>

            <MuiThemeProvider muiTheme={muiTheme} >
              <Dialog
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleDialogClose}
              >
              <h3>{`Agency: ${el.agency}`} </h3>
                <p>{`Borough community: ${el.borough_community}`}</p>
                <p>{`Contact Number: ${el.contact_number}`}</p>
                <p>{`Program: ${el.program}`}</p>
                <p>{`Program Type: ${el.program_type}`}</p>
                <p>{`Site name: ${el.site_name}`}</p>

              </Dialog>
              </MuiThemeProvider>
          </div>)
          }
        </div>
        </div>
      </div>
    );
  }
}

export default Activities;