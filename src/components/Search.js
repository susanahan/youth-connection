import React from "react";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterArr: []
    };
  }

  Search = props => {
    const { infoArr, text } = this.props;
    console.log('search text', text)
    const newArr = this.props.infoArr.filter(elem =>
      elem.program.includes(text)
    );
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
      <div>
        {filterArr.map(el => (
          <div>
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
