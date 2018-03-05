import React from "react";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterArr: []
    };
  }

  Search = () => {
    const { infoArr, match } = this.props;
    console.log('current props',this.props)
    const text = match.params.name.charAt(0).toUpperCase() 
    console.log('search text', text)
    const newArr = infoArr.filter(elem =>
      elem.program.includes(text) || elem.borough_community.includes(text)
    );
    console.log('oldArr', infoArr)
    console.log('newArr',newArr)
    this.setState({
      filterArr: newArr
    });
  };
  componentDidMount() {
    this.Search();
  }

  render() {
    const { filterArr } = this.state;
    return (
      <div className = "wrapper">
        {filterArr.map(el => (
          <div className ="search change">
            <p>
              {" "}
              {`Agency: ${el.agency}`} <br />
              {`Borough community: ${el.borough_community}`} <br />
              {`Contact Number: ${el.contact_number}`} <br />
              {`Program: ${el.program}`} <br />
              {`Program Type: ${el.program_type}`} <br />
              {`Site name: ${el.site_name}`} <br />
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default SearchBox;
