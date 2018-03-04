import React from "react";

class SearchBox extends React.Component{
    constructor(props){
        super(props)
    }

    handleSearch = ( props ) => {
        const { infoArr, text } = this.props
        return this.props.infoArr.filter(elem => elem.program.includes(text))
    }

    render(){
        const filterArr = this.handleSearch()
        return(
            <div>
                {console.log('search engine',this.handleSearch('Summer Youth Employment '))}
            </div>
        )
    }
}

export default SearchBox;