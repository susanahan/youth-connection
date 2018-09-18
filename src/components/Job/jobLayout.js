import React from "react";
import Dialog from "material-ui/Dialog";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
const muiTheme = getMuiTheme();

const styles = require('../styles').popStyle
const customContentStyle = require('../styles').customContentStyle
const backgroundStyle = require('../styles').bodyStyle

const Info = el => (
  <div>
    <h3>{`Agency: ${el.agency}`} </h3>
    <p>{`Borough community: ${el.borough_community}`}</p>
    <p>{`Address: ${el.address}`}</p>
    <p>{`Contact Number: ${el.contact_number}`}</p>
    <p>{`Program: ${el.program}`}</p>
    <p>{`Program Type: ${el.program_type}`}</p>
    <p>{`Site name: ${el.site_name}`}</p>)}
  </div>
);

class Jobs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      id: null
    };
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

  handleDialogOpen = (id) => {
    console.log("its opening");
    this.setState({ open: true, id:id });
  };
  handleDialogClose = () => {
    this.setState({ open: false });
  };

  handlePopup = (el) => {
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme} >
            <Dialog
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleDialogClose}
              bodyStyle= {backgroundStyle}
              contentStyle= {customContentStyle}
            >
            {console.log('the current idx is')}
              <h3>{`Agency: ${el.agency}`} </h3>
              <p>{`Borough community: ${el.borough_community}`}</p>
              <p>{`Contact Number: ${el.contact_number}`}</p>
              <p>{`Program: ${el.program}`}</p>
              <p>{`Program Type: ${el.program_type}`}</p>
              <p>{`Site name: ${el.site_name}`}</p>

            </Dialog>
            </MuiThemeProvider>
      </div>
    )
  }
  render() {
    console.log("calling", this.props);
    return (
      <div>
        {/* <div className="outside outline"> */}
        <div className="container">
          <div className="jone title job">
            <h1>JOBS AND INTERNSHIPS</h1>
          </div>
          {this.props.dataArr.map((el, idx) => (
            <div onTouchTap={() => this.handleDialogOpen(idx)} className={this.classArr[idx + 1] + " change"}>
                <h3>{`Agency: ${el.agency}`} </h3>
                <p>{`Borough community: ${el.borough_community}`}</p>
                <p>{`Address: ${el.address}`}</p>
                <p>{`Contact Number: ${el.contact_number}`}</p>
                <p>{`Program: ${el.program}`}</p>
                <p>{`Program Type: ${el.program_type}`}</p>
                <p>{`Site name: ${el.site_name}`}</p>

                {this.state.id === idx? this.handlePopup(el) : ""}
              </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Jobs;